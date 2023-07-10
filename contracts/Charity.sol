pragma solidity ^0.8.0;

contract Charity {
    //Struct of  Beneficiary
    struct Beneficiary {
        string name;
        string cnic;
        string residentAddress;
        uint256 bankBalance;
        string bankName;
        string bankAccount;
        string authorizedEntity;
        address walletAddress;
        string status;
        string phoneNumber;
        uint256 lastDonationTimestamp;
    }


    //Struct of  Organiziation

    struct Organization {
        string name;
        string organizationBased;
        string authorizedEntity;
        string status;
        address walletAddress;
        uint256 bankBalance;
        string bankName;
        string bankAccount;
        string phoneNumber;
    }

    //Struct of  Donor


    struct Donor {
        string name;
        string cnic;
        string residentAddress;
        string phoneNumber;
        uint256 bankBalance;
        string bankName;
        string bankAccount;
        string status;
    }

    // Struct of Charity Request
    struct CharityRequest {
        string charityType;
        uint256 requestedMoney;
        string title;
        string description;
        address organizationWallet;
        string status;
    }

    struct DonationRequest {
        string charityType;
        address wallet_address;
        address organizationWallet; 
    }

     struct TrackingStruct {
       address userAddress;
       address organizationAddress;
       address beneficiary;
       uint256 amount;
       string charityType;
    }
    struct TransferDetails {
        address userAddress;
        uint256 amount;
    }

    //Mapping
    mapping(address => Beneficiary) public beneficiaries;
    mapping(address => Organization) public organizations;
    mapping(address => Donor) public donors;
    mapping(address => CharityRequest) public charityRequests;
    mapping(address => DonationRequest) public doantionRequests;
    mapping(address => mapping(string => uint256)) public charityTypeAmount;  
 
    

    TransferDetails[] public transferDetails;
    string[] public authorizedBanks;
    address public admin;
    address[] public approvedBeneficiaries;
    address[] public approvedDonors;
    address[] public approvedOrganizations;

    mapping(address => TrackingStruct[]) public TrackingTransaction;
   


    uint256 public oneMonth = 30 days;

    //Constructor
    constructor() {
        authorizedBanks = ["BAHL", "HBL", "MB"];
        admin = msg.sender;
    }

    // Modifier to check if the caller is the admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Add a new beneficiary
    function addBeneficiary(
        string memory _name,
        string memory _cnic,
        string memory _residentAddress,
        uint256 _bankBalance,
        string memory _bankName,
        string memory _bankAccount,
        string memory _authorizedEntity,
        string memory _phoneNumber
    ) public {
        // Validate inputs
        require(bytes(_bankAccount).length == 21, "Bank account must be 21 digits");
        require(bytes(_cnic).length == 13, "CNIC must be 13 digits");
        require(bytes(_phoneNumber).length == 11, "Phone number must be 11 digits");
        require(bytes(_phoneNumber)[0] == "0" && bytes(_phoneNumber)[1] == "3" , "Phone number must start with 3");

        // Create a new beneficiary
        Beneficiary memory newBeneficiary = Beneficiary(
            _name,
            _cnic,
            _residentAddress,
            _bankBalance,
            _bankName,
            _bankAccount,
            _authorizedEntity,
            msg.sender,
            "Waiting",
            _phoneNumber,
            0
        );
        beneficiaries[msg.sender] = newBeneficiary;
    }

    // Add a new organization
    function addOrganization(
        string memory _name,
        string memory _organizationBased,
        string memory _authorizedEntity,
        address _payableAddress, 
        uint256 _bankBalance,
        string memory _bankName,
        string memory _bankAccount,
        string memory _phoneNumber 

    ) public {
        // Validate organization's location
        require(
            keccak256(bytes(_organizationBased)) == keccak256(bytes("Karachi")),
            "Organization must be based in Karachi"
        );

        // Create a new organization
        Organization memory newOrganization = Organization(
            _name,
            _organizationBased,
            _authorizedEntity,
            "Waiting",
            msg.sender,
            _bankBalance,
            _bankName,
            _bankAccount,
            _phoneNumber
            
        );
        organizations[msg.sender] = newOrganization;
    }

    // Add a new donor
    function addDonor(
        string memory _name,
        string memory _cnic,
        string memory _residentAddress,
        string memory _phoneNumber,
        uint256 _bankBalance,
        string memory _bankName,
        string memory _bankAccount
    ) public {
        // Validate inputs
        
        require(bytes(_bankAccount).length == 21, "Bank account must be 21 digits");
        require(bytes(_cnic).length == 13, "CNIC must be 13 digits");
        require(bytes(_phoneNumber).length == 11, "Phone number must be 11 digits");
        require(bytes(_phoneNumber)[0] == "0" && bytes(_phoneNumber)[1] == "3" , "Phone number must start with 3");


        // Create a new donor
        Donor memory newDonor = Donor(
            _name,
            _cnic,
            _residentAddress,
            _phoneNumber,
            _bankBalance,
            _bankName,
            _bankAccount,
            "Waiting"
        );
        donors[msg.sender] = newDonor;
    }

    // Check if a bank is authorized
    function isBankAuthorized(string memory _bankName) internal view returns (bool) {
        for (uint256 i = 0; i < authorizedBanks.length; i++) {
            if (keccak256(bytes(authorizedBanks[i])) == keccak256(bytes(_bankName))) {
                return true;
            }
        }
        return false;
    }

    // Create a new charity request
    function createCharity(string memory _charityType,uint256 _requestedMoney,string memory _title,string memory _description,address _organizationWallet) public payable {
        Beneficiary storage beneficiary = beneficiaries[msg.sender];
        require(beneficiary.walletAddress != address(0), "Sender must be a beneficiary");
        require(beneficiary.bankBalance >= _requestedMoney, "Insufficient funds");
        require(
            beneficiary.lastDonationTimestamp + oneMonth <= block.timestamp,
            "Must wait at least one month since last donation"
        );

        // Adjust the requested money if the bank balance is less
        uint256 actualRequestedMoney = beneficiary.bankBalance - _requestedMoney ;
     

        string memory bankName = beneficiary.bankName;
        require(isBankAuthorized(bankName), "Bank is not authorized");

        // Create a new charity request
        charityRequests[msg.sender] = CharityRequest(
            _charityType,
            actualRequestedMoney,
            _title,
            _description,
            _organizationWallet,
            "Waiting"
        );

        beneficiary.lastDonationTimestamp = block.timestamp;
    }

    // Approve the status of a beneficiary
    function approveBeneficiary(address _address) public onlyAdmin payable {
    
        Beneficiary storage beneficiary = beneficiaries[_address];
        require(keccak256(bytes(beneficiary.status)) == keccak256(bytes("Waiting")),"Beneficiary status is not waiting");
        beneficiary.status = "Approved";
        approvedBeneficiaries.push(_address);

    }

    // Approve the status of a donor
    function approveDonor(address _address) public onlyAdmin payable {
        Donor storage donor = donors[_address];
        require(keccak256(bytes(donor.status)) == keccak256(bytes("Waiting")),"Donor status is not waiting");
        donor.status = "Approved";
        approvedDonors.push(_address);
    }

    // Approve the status of an organization
    function approveOrganization(address _address) public onlyAdmin payable {
        Organization storage organization = organizations[_address];
        require(keccak256(bytes(organization.status)) == keccak256(bytes("Waiting")),"Organization status is not waiting");
        organization.status = "Approved";
        approvedOrganizations.push(_address);
    }

    // Transfer funds from donor to organization
    function transferFunds(address  _organizationAddress, uint256 _amount,string memory _charityType) public payable {
        Donor storage donor = donors[msg.sender];
        Organization storage organization = organizations[_organizationAddress];
        require(
            keccak256(bytes(donor.status)) == keccak256(bytes("Approved")),
            "The donor must be approved"
        );
        require(
            keccak256(bytes(organization.status)) == keccak256(bytes("Approved")),
            "The organization must be approved"
        );

        require(keccak256(bytes(_charityType)) == keccak256(bytes("Education")) ||keccak256(bytes(_charityType)) == keccak256(bytes("Health")) ||keccak256(bytes(_charityType)) == keccak256(bytes("Food")), "Transfer amount must be greater than zero");
        require(_amount > 0, "Transfer amount must be greater than zero");
        require(_amount <= donor.bankBalance / 2, "Transfer amount exceeds donor's limit");
        require(donor.bankBalance >= _amount, "Insufficient funds in the donor's account");

        donor.bankBalance -= _amount;
        organization.bankBalance += _amount;
        charityTypeAmount[_organizationAddress][_charityType] += _amount;

          DonationRequest memory newDonationRequest = DonationRequest(
           _charityType,
           msg.sender,
           _organizationAddress
           
        );

        doantionRequests[msg.sender]=newDonationRequest;
        
    }

    function addTransferDetails(address userAddress, uint256 amount) public payable {
        transferDetails.push(TransferDetails(userAddress, amount));
    }

    // // Transfer funds from organization to beneficiary
    function transferFundsToBeneficiary(address _beneficiaryAddress,uint256 _amount) public {

        Organization storage organization = organizations[msg.sender];
        Beneficiary storage beneficiary = beneficiaries[_beneficiaryAddress];
        CharityRequest storage charityRequest = charityRequests[_beneficiaryAddress];
        require(organization.walletAddress != msg.sender, "Invalid organization");
        require(
            keccak256(bytes(organization.status)) == keccak256(bytes("Approved")),
            "The organization must be approved"
        );
        require(
            keccak256(bytes(organization.status)) == keccak256(bytes("Approved")),
            "The organization must be approved"
        );
        require(
            keccak256(bytes(beneficiary.status)) == keccak256(bytes("Approved")),
            "The beneficiary must be approved"
        );
        require(
            keccak256(bytes(charityRequest.status)) == keccak256(bytes("Approved")),
            "The charity request must be approved"
        );
        require(
            keccak256(bytes(charityRequest.charityType)) == keccak256(bytes("Education")) || keccak256(bytes(charityRequest.charityType)) == keccak256(bytes("Food")) ||keccak256(bytes(charityRequest.charityType)) == keccak256(bytes("Health")),
            "Invalid Charity Type"
        );
        require(_amount > 0, "Transfer amount must be greater than zero");
        require(
            charityRequest.requestedMoney >= _amount,
            "Transfer amount exceeds the requested money for the charity"
        );
        require(
            organization.bankBalance >= _amount,
            "Insufficient funds in the organization's account"
        );


        organization.bankBalance -= _amount;
        beneficiary.bankBalance += _amount;
        charityRequest.status = "Transferred";
        charityTypeAmount[msg.sender][charityRequest.charityType] -= _amount;

        // uint256 remainingAmount = _amount;

        // for (uint256 i = 0; i < transferDetails.length; i++) {
        //     address addr = transferDetails[i].userAddress;
        //     uint256 amount = transferDetails[i].amount;
        //     if(transferDetails[i].amount !=0)
        //     {

        //      if (remainingAmount == 0) {
        //         break;
        //     }
        //     else if (transferDetails[i].amount >= remainingAmount) {
        //          transferDetails[i].amount -= remainingAmount;
        //          remainingAmount=0;
        //         TransactionTracking(transferDetails[i].userAddress,_organizationAddress,_beneficiaryAddress,remainingAmount, charityType);

        //     }
        //     else if (transferDetails[i].amount < remainingAmount) {
        //          remainingAmount-=transferDetails[i].amount;
        //          transferDetails[i].amount=0;
        //          TransactionTracking(transferDetails[i].userAddress,_organizationAddress,_beneficiaryAddress,transferDetails[i].amount, charityType);

        //     }

        //     }
        // }
        
    }

    function TransactionTracking(address userAddress,address organizationAddress, address donne,uint256 amount, string memory charityType) private {
        TrackingTransaction[userAddress].push(TrackingStruct(userAddress,organizationAddress,donne,amount, charityType));
    }


    

}
