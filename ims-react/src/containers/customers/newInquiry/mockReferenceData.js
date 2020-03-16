const referenceData = {
  "usesOfInformation": [
    {"informationUseID":12,"informationUse":"Advocacy"},
    {"informationUseID":1,"informationUse":"Fundraising/Grant Writing"},
    {"informationUseID":2,"informationUse":"Other"},
    {"informationUseID":3,"informationUse":"Personal Use"},
    {"informationUseID":4,"informationUse":"Policy Development"},
    {"informationUseID":5,"informationUse":"Professional Development"},
    {"informationUseID":6,"informationUse":"Program Improvement"},
    {"informationUseID":7,"informationUse":"Provide Information for Families"},
    {"informationUseID":8,"informationUse":"Public Awareness"},
    {"informationUseID":11,"informationUse":"Reporting"},
    {"informationUseID":9,"informationUse":"Research"},
    {"informationUseID":13,"informationUse":"School Project"},
    {"informationUseID":10,"informationUse":"Service Delivery"}
  ],
  "orderTypes":[
    {"typeID":2,"orderType":"Conference"},
    {"typeID":1,"orderType":"Customer"},
    {"typeID":3,"orderType":"Online"},
    {"typeID":4,"orderType":"Pre-Order"},
    {"typeID":5,"orderType":"Targeted Mailing"}
  ],
  "typesOfInventory":[
    {"productType":"Administrative Item","productTypeID":2},
    {"productType":"Conference Only Item","productTypeID":1},
    {"productType":"Publication Item","productTypeID":3}
  ],
  "orderStatuses":[
    {"status":"Pending","id":1,"orderBy":1},
    {"status":"Archived","id":2,"orderBy":2},
    {"status":"Confirmed","id":3,"orderBy":3},
    {"status":"Processed","id":4,"orderBy":4},
    {"status":"Held","id":5,"orderBy":5}
  ],
  "surveyReasons":[
    {"surveyReason":"Caller < 18 Yrs","surveyReasonID":1},
    {"surveyReason":"Belligerent/Intoxicated","surveyReasonID":2},
    {"surveyReason":"Forgot to offer","surveyReasonID":3},
    {"surveyReason":"Request not on a survey day","surveyReasonID":4},
    {"surveyReason":"Language preference unsupported","surveyReasonID":5},
    {"surveyReason":"2nd call today","surveyReasonID":6},
    {"surveyReason":"Other","surveyReasonID":7},
    {"surveyReason":"Customer hung up before survey could be offered","surveyReasonID":8}
  ],
  "states":[
    {"countryID":121,"regionOfficeID":4,"state":"Alabama","stateID":1,"state_abbr":"AL"},
    {"countryID":121,"regionOfficeID":10,"state":"Alaska","stateID":2,"state_abbr":"AK"},
    {"countryID":121,"regionOfficeID":9,"state":"American Samoa","stateID":3,"state_abbr":"AS"},
    {"countryID":121,"regionOfficeID":9,"state":"Arizona","stateID":4,"state_abbr":"AZ"},
    {"countryID":121,"regionOfficeID":6,"state":"Arkansas","stateID":5,"state_abbr":"AR"},
    {"countryID":121,"regionOfficeID":9,"state":"California","stateID":6,"state_abbr":"CA"},
    {"countryID":121,"regionOfficeID":8,"state":"Colorado","stateID":7,"state_abbr":"CO"},
    {"countryID":121,"regionOfficeID":1,"state":"Connecticut","stateID":8,"state_abbr":"CT"},
    {"countryID":121,"regionOfficeID":3,"state":"Delaware","stateID":9,"state_abbr":"DE"},
    {"countryID":121,"regionOfficeID":3,"state":"District of Columbia","stateID":10,"state_abbr":"DC"},
    {"countryID":121,"regionOfficeID":4,"state":"Florida","stateID":11,"state_abbr":"FL"},
    {"countryID":121,"regionOfficeID":4,"state":"Georgia","stateID":12,"state_abbr":"GA"},
    {"countryID":121,"regionOfficeID":9,"state":"Guam","stateID":13,"state_abbr":"GU"},
    {"countryID":121,"regionOfficeID":9,"state":"Hawaii","stateID":14,"state_abbr":"HI"},
    {"countryID":121,"regionOfficeID":10,"state":"Idaho","stateID":15,"state_abbr":"ID"},
    {"countryID":121,"regionOfficeID":5,"state":"Illinois","stateID":16,"state_abbr":"IL"},
    {"countryID":121,"regionOfficeID":5,"state":"Indiana","stateID":17,"state_abbr":"IN"},
    {"countryID":121,"regionOfficeID":7,"state":"Iowa","stateID":18,"state_abbr":"IA"},
    {"countryID":121,"regionOfficeID":7,"state":"Kansas","stateID":19,"state_abbr":"KS"},
    {"countryID":121,"regionOfficeID":4,"state":"Kentucky","stateID":20,"state_abbr":"KY"},
    {"countryID":121,"regionOfficeID":6,"state":"Louisiana","stateID":21,"state_abbr":"LA"},
    {"countryID":121,"regionOfficeID":1,"state":"Maine","stateID":22,"state_abbr":"ME"},
    {"countryID":121,"regionOfficeID":9,"state":"Marshall Islands","stateID":23,"state_abbr":"MH"},
    {"countryID":121,"regionOfficeID":3,"state":"Maryland","stateID":24,"state_abbr":"MD"},
    {"countryID":121,"regionOfficeID":1,"state":"Massachusetts","stateID":25,"state_abbr":"MA"},
    {"countryID":121,"regionOfficeID":5,"state":"Michigan","stateID":26,"state_abbr":"MI"},
    {"countryID":121,"regionOfficeID":5,"state":"Minnesota","stateID":27,"state_abbr":"MN"},
    {"countryID":121,"regionOfficeID":4,"state":"Mississippi","stateID":28,"state_abbr":"MS"},
    {"countryID":121,"regionOfficeID":7,"state":"Missouri","stateID":29,"state_abbr":"MO"},
    {"countryID":121,"regionOfficeID":8,"state":"Montana","stateID":30,"state_abbr":"MT"},
    {"countryID":121,"regionOfficeID":7,"state":"Nebraska","stateID":31,"state_abbr":"NE"},
    {"countryID":121,"regionOfficeID":9,"state":"Nevada","stateID":32,"state_abbr":"NV"},
    {"countryID":121,"regionOfficeID":1,"state":"New Hampshire","stateID":33,"state_abbr":"NH"},
    {"countryID":121,"regionOfficeID":2,"state":"New Jersey","stateID":34,"state_abbr":"NJ"},
    {"countryID":121,"regionOfficeID":6,"state":"New Mexico","stateID":35,"state_abbr":"NM"},
    {"countryID":121,"regionOfficeID":2,"state":"New York","stateID":36,"state_abbr":"NY"},
    {"countryID":121,"regionOfficeID":4,"state":"North Carolina","stateID":37,"state_abbr":"NC"},
    {"countryID":121,"regionOfficeID":8,"state":"North Dakota","stateID":38,"state_abbr":"ND"},
    {"countryID":121,"regionOfficeID":9,"state":"Northern Mariana Islands","stateID":39,"state_abbr":"MP"},
    {"countryID":121,"regionOfficeID":5,"state":"Ohio","stateID":40,"state_abbr":"OH"},
    {"countryID":121,"regionOfficeID":6,"state":"Oklahoma","stateID":41,"state_abbr":"OK"},
    {"countryID":121,"regionOfficeID":10,"state":"Oregon","stateID":42,"state_abbr":"OR"},
    {"countryID":121,"regionOfficeID":9,"state":"Palau","stateID":43,"state_abbr":"PW"},
    {"countryID":121,"regionOfficeID":3,"state":"Pennsylvania","stateID":44,"state_abbr":"PA"},
    {"countryID":121,"regionOfficeID":2,"state":"Puerto Rico","stateID":45,"state_abbr":"PR"},
    {"countryID":121,"regionOfficeID":1,"state":"Rhode Island","stateID":46,"state_abbr":"RI"},
    {"countryID":121,"regionOfficeID":4,"state":"South Carolina","stateID":47,"state_abbr":"SC"},
    {"countryID":121,"regionOfficeID":8,"state":"South Dakota","stateID":48,"state_abbr":"SD"},
    {"countryID":121,"regionOfficeID":4,"state":"Tennessee","stateID":49,"state_abbr":"TN"},
    {"countryID":121,"regionOfficeID":6,"state":"Texas","stateID":50,"state_abbr":"TX"},
    {"countryID":121,"regionOfficeID":8,"state":"Utah","stateID":51,"state_abbr":"UT"},
    {"countryID":121,"regionOfficeID":1,"state":"Vermont","stateID":52,"state_abbr":"VT"},
    {"countryID":121,"regionOfficeID":2,"state":"Virgin Islands","stateID":53,"state_abbr":"VI"},
    {"countryID":121,"regionOfficeID":3,"state":"Virginia","stateID":54,"state_abbr":"VA"},
    {"countryID":121,"regionOfficeID":10,"state":"Washington","stateID":55,"state_abbr":"WA"},
    {"countryID":121,"regionOfficeID":3,"state":"West Virginia","stateID":56,"state_abbr":"WV"},
    {"countryID":121,"regionOfficeID":5,"state":"Wisconsin","stateID":57,"state_abbr":"WI"},
    {"countryID":121,"regionOfficeID":8,"state":"Wyoming","stateID":58,"state_abbr":"WY"}
  ],
  "countries":[
    {"isUSA":1,"isDefault":1,"country":"United States of America","countryID":121},
    {"isUSA":0,"isDefault":0,"country":"Afghanistan","countryID":1},
    {"isUSA":0,"isDefault":0,"country":"Algeria","countryID":2},
    {"isUSA":0,"isDefault":0,"country":"Antigua","countryID":3},
    {"isUSA":0,"isDefault":0,"country":"Argentina","countryID":4},
    {"isUSA":0,"isDefault":0,"country":"Aruba","countryID":5},
    {"isUSA":0,"isDefault":0,"country":"Australia","countryID":6},
    {"isUSA":0,"isDefault":0,"country":"Austria","countryID":7},
    {"isUSA":0,"isDefault":0,"country":"Bahamas","countryID":8},
    {"isUSA":0,"isDefault":0,"country":"Bahrain","countryID":9},
    {"isUSA":0,"isDefault":0,"country":"Bangladesh","countryID":10},
    {"isUSA":0,"isDefault":0,"country":"Barbados","countryID":11},
    {"isUSA":0,"isDefault":0,"country":"Belgium","countryID":12},
    {"isUSA":0,"isDefault":0,"country":"Belize","countryID":13},
    {"isUSA":0,"isDefault":0,"country":"Bermuda","countryID":14},
    {"isUSA":0,"isDefault":0,"country":"Bolivia","countryID":15},
    {"isUSA":0,"isDefault":0,"country":"Brazil","countryID":16},
    {"isUSA":0,"isDefault":0,"country":"Bulgaria","countryID":17},
    {"isUSA":0,"isDefault":0,"country":"Cambodia","countryID":18},
    {"isUSA":0,"isDefault":0,"country":"Cameroon","countryID":19},
    {"isUSA":0,"isDefault":0,"country":"Canada","countryID":20},
    {"isUSA":0,"isDefault":0,"country":"Caroline Islands","countryID":21},
    {"isUSA":0,"isDefault":0,"country":"Cayman Islands","countryID":22},
    {"isUSA":0,"isDefault":0,"country":"Chile","countryID":23},
    {"isUSA":0,"isDefault":0,"country":"China","countryID":24},
    {"isUSA":0,"isDefault":0,"country":"Colombia","countryID":25},
    {"isUSA":0,"isDefault":0,"country":"Congo","countryID":26},
    {"isUSA":0,"isDefault":0,"country":"Costa Rica","countryID":27},
    {"isUSA":0,"isDefault":0,"country":"Cote D'Ivoire","countryID":28},
    {"isUSA":0,"isDefault":0,"country":"Croatia","countryID":29},
    {"isUSA":0,"isDefault":0,"country":"Cuba","countryID":30},
    {"isUSA":0,"isDefault":0,"country":"Cyprus","countryID":31},
    {"isUSA":0,"isDefault":0,"country":"Czech Republic","countryID":32},
    {"isUSA":0,"isDefault":0,"country":"Denmark","countryID":33},
    {"isUSA":0,"isDefault":0,"country":"Dominican Republic","countryID":34},
    {"isUSA":0,"isDefault":0,"country":"Ecuador","countryID":35},
    {"isUSA":0,"isDefault":0,"country":"Egypt","countryID":36},
    {"isUSA":0,"isDefault":0,"country":"El Salvador","countryID":37},
    {"isUSA":0,"isDefault":0,"country":"Ethiopia","countryID":38},
    {"isUSA":0,"isDefault":0,"country":"Fiji","countryID":39},
    {"isUSA":0,"isDefault":0,"country":"Finland","countryID":40},
    {"isUSA":0,"isDefault":0,"country":"France","countryID":41},
    {"isUSA":0,"isDefault":0,"country":"French Polynesia","countryID":42},
    {"isUSA":0,"isDefault":0,"country":"Germany","countryID":43},
    {"isUSA":0,"isDefault":0,"country":"Ghana","countryID":44},
    {"isUSA":0,"isDefault":0,"country":"Greece","countryID":45},
    {"isUSA":0,"isDefault":0,"country":"Greenland","countryID":46},
    {"isUSA":0,"isDefault":0,"country":"Grenada","countryID":47},
    {"isUSA":0,"isDefault":0,"country":"Guadeloupe","countryID":48},
    {"isUSA":0,"isDefault":0,"country":"Guatemala","countryID":49},
    {"isUSA":0,"isDefault":0,"country":"Haiti","countryID":50},
    {"isUSA":0,"isDefault":0,"country":"Honduras","countryID":51},
    {"isUSA":0,"isDefault":0,"country":"Hungary","countryID":52},
    {"isUSA":0,"isDefault":0,"country":"Iceland","countryID":53},
    {"isUSA":0,"isDefault":0,"country":"India","countryID":54},
    {"isUSA":0,"isDefault":0,"country":"Indonesia","countryID":55},
    {"isUSA":0,"isDefault":0,"country":"Iraq","countryID":56},
    {"isUSA":0,"isDefault":0,"country":"Ireland","countryID":57},
    {"isUSA":0,"isDefault":0,"country":"Israel","countryID":58},
    {"isUSA":0,"isDefault":0,"country":"Italy","countryID":59},
    {"isUSA":0,"isDefault":0,"country":"Jamaica","countryID":60},
    {"isUSA":0,"isDefault":0,"country":"Japan","countryID":61},
    {"isUSA":0,"isDefault":0,"country":"Jordan","countryID":62},
    {"isUSA":0,"isDefault":0,"country":"Kenya","countryID":63},
    {"isUSA":0,"isDefault":0,"country":"Korea (South,","countryID":64},
    {"isUSA":0,"isDefault":0,"country":"Kuwait","countryID":65},
    {"isUSA":0,"isDefault":0,"country":"Latvia","countryID":66},
    {"isUSA":0,"isDefault":0,"country":"Lebanon","countryID":67},
    {"isUSA":0,"isDefault":0,"country":"Liberia","countryID":68},
    {"isUSA":0,"isDefault":0,"country":"Liberia","countryID":69},
    {"isUSA":0,"isDefault":0,"country":"Libya","countryID":70},
    {"isUSA":0,"isDefault":0,"country":"Liechtenstein","countryID":71},
    {"isUSA":0,"isDefault":0,"country":"Luxembourg","countryID":72},
    {"isUSA":0,"isDefault":0,"country":"Madagascar","countryID":73},
    {"isUSA":0,"isDefault":0,"country":"Malaysia","countryID":74},
    {"isUSA":0,"isDefault":0,"country":"Mali","countryID":75},
    {"isUSA":0,"isDefault":0,"country":"Martinique","countryID":76},
    {"isUSA":0,"isDefault":0,"country":"Mexico","countryID":77},
    {"isUSA":0,"isDefault":0,"country":"Mongolia","countryID":78},
    {"isUSA":0,"isDefault":0,"country":"Morocco","countryID":79},
    {"isUSA":0,"isDefault":0,"country":"Myanmar","countryID":80},
    {"isUSA":0,"isDefault":0,"country":"Nepal","countryID":81},
    {"isUSA":0,"isDefault":0,"country":"Netherlands","countryID":83},
    {"isUSA":0,"isDefault":0,"country":"Netherlands Antilles","countryID":82},
    {"isUSA":0,"isDefault":0,"country":"New Zealand","countryID":84},
    {"isUSA":0,"isDefault":0,"country":"Nicaragua","countryID":85},
    {"isUSA":0,"isDefault":0,"country":"Nigeria","countryID":86},
    {"isUSA":0,"isDefault":0,"country":"Norway","countryID":87},
    {"isUSA":0,"isDefault":0,"country":"Pakistan","countryID":88},
    {"isUSA":0,"isDefault":0,"country":"Panama","countryID":89},
    {"isUSA":0,"isDefault":0,"country":"Papua New Guinea","countryID":90},
    {"isUSA":0,"isDefault":0,"country":"Paraguay","countryID":91},
    {"isUSA":0,"isDefault":0,"country":"Peru","countryID":92},
    {"isUSA":0,"isDefault":0,"country":"Philippines","countryID":93},
    {"isUSA":0,"isDefault":0,"country":"Poland","countryID":94},
    {"isUSA":0,"isDefault":0,"country":"Portugal","countryID":95},
    {"isUSA":0,"isDefault":0,"country":"Puerto Rico","countryID":96},
    {"isUSA":0,"isDefault":0,"country":"Romania","countryID":97},
    {"isUSA":0,"isDefault":0,"country":"Russian Federation","countryID":98},
    {"isUSA":0,"isDefault":0,"country":"Saint Lucia","countryID":99},
    {"isUSA":0,"isDefault":0,"country":"Saudi Arabia","countryID":100},
    {"isUSA":0,"isDefault":0,"country":"Senegal","countryID":101},
    {"isUSA":0,"isDefault":0,"country":"Sierra Leone","countryID":102},
    {"isUSA":0,"isDefault":0,"country":"Singapore","countryID":103},
    {"isUSA":0,"isDefault":0,"country":"South Africa","countryID":104},
    {"isUSA":0,"isDefault":0,"country":"Spain","countryID":105},
    {"isUSA":0,"isDefault":0,"country":"Sri Lanka","countryID":106},
    {"isUSA":0,"isDefault":0,"country":"Sudan","countryID":107},
    {"isUSA":0,"isDefault":0,"country":"Sweden","countryID":108},
    {"isUSA":0,"isDefault":0,"country":"Switzerland","countryID":109},
    {"isUSA":0,"isDefault":0,"country":"Syria","countryID":110},
    {"isUSA":0,"isDefault":0,"country":"Taiwan","countryID":111},
    {"isUSA":0,"isDefault":0,"country":"Tanzania","countryID":112},
    {"isUSA":0,"isDefault":0,"country":"Thailand","countryID":113},
    {"isUSA":0,"isDefault":0,"country":"Trinidad and Tobago","countryID":114},
    {"isUSA":0,"isDefault":0,"country":"Tunisia","countryID":115},
    {"isUSA":0,"isDefault":0,"country":"Turkey","countryID":116},
    {"isUSA":0,"isDefault":0,"country":"Uganda","countryID":117},
    {"isUSA":0,"isDefault":0,"country":"Ukraine","countryID":118},
    {"isUSA":0,"isDefault":0,"country":"United Arab Emirates","countryID":119},
    {"isUSA":0,"isDefault":0,"country":"United Kingdom","countryID":120},
    {"isUSA":0,"isDefault":0,"country":"Uruguay","countryID":122},
    {"isUSA":0,"isDefault":0,"country":"Venezuela","countryID":123},
    {"isUSA":0,"isDefault":0,"country":"Vietnam","countryID":124},
    {"isUSA":0,"isDefault":0,"country":"Wake Island","countryID":125},
    {"isUSA":0,"isDefault":0,"country":"Yugoslavia","countryID":126},
    {"isUSA":0,"isDefault":0,"country":"Zambia","countryID":127},
    {"isUSA":0,"isDefault":0,"country":"Zimbabwe","countryID":128}
  ],
  "servicesProvided":[
    {"serviceID":1,"service":"Discussion Only"},
    {"serviceID":2,"service":"Electronic Publication"},
    {"serviceID":3,"service":"Library Search"},
    {"serviceID":4,"service":"Out of Scope"},
    {"serviceID":5,"service":"Print Publication"},
    {"serviceID":6,"service":"Referral to ABA/American Academy of Adoption Attorneys"},
    {"serviceID":7,"service":"Referral to CB Website"},
    {"serviceID":8,"service":"Referral to ChildHelp"},
    {"serviceID":9,"service":"Referral to DSS/DHS"},
    {"serviceID":10,"service":"Referral to IG Website"},
    {"serviceID":11,"service":"Referral to NRC"},
    {"serviceID":18,"service":"Referral to Other Organization"},
    {"serviceID":12,"service":"Referral to Regional Office/Federal Gov't"},
    {"serviceID":13,"service":"Referral to State Complaint Offices"},
    {"serviceID":14,"service":"Referral to USCIS/State Dept."},
    {"serviceID":15,"service":"Special Response/CB/HHS"},
    {"serviceID":16,"service":"Standard (Archived) Response)"},
    {"serviceID":17,"service":"Web Search"}
  ],
  "typesOfInformation":[
    {"informationType":"Complaint Resources","informationTypeID":13},
    {"informationType":"Evidence-based Practice","informationTypeID":1},
    {"informationType":"Family Assistance","informationTypeID":2},
    {"informationType":"Funding Information","informationTypeID":3},
    {"informationType":"General Information","informationTypeID":4},
    {"informationType":"Legal Issues/Laws","informationTypeID":5},
    {"informationType":"Other","informationTypeID":6},
    {"informationType":"Personal Help","informationTypeID":7},
    {"informationType":"Professional Literature","informationTypeID":8},
    {"informationType":"State-specific Information","informationTypeID":9},
    {"informationType":"Statistics","informationTypeID":10},
    {"informationType":"Training/Education Information","informationTypeID":11},
    {"informationType":"Website/Linking/Issues","informationTypeID":12}
  ],
  "inquiryMeduims":[
    {"medium":"Email","mediumID":1},
    {"medium":"Live Chat","mediumID":9},
    {"medium":"Phone","mediumID":2},
    {"medium":"Voicemail","mediumID":3},
    {"medium":"Visitor","mediumID":4},
    {"medium":"Website","mediumID":5},
    {"medium":"Mail","mediumID":6},
    {"medium":"Fax","mediumID":7},
    {"medium":"Conference","mediumID":8},
    {"medium":"Live Chat - email","mediumID":11},
    {"medium":"Social Media","mediumID":10}
  ],
  "languages":[
    {"language":"English","languageID":"en"},
    {"language":"Spanish","languageID":"es"},
    {"language":"Italian","languageID":"it"},
    {"language":"Arabic","languageID":"ar"},
    {"language":"Chinese","languageID":"zh"},
    {"language":"French","languageID":"fr"},
    {"language":"German","languageID":"de"},
    {"language":"Korean","languageID":"ko"},
    {"language":"Portuguese","languageID":"pt"},
    {"language":"Russian","languageID":"ru"},
    {"language":"Vietnamese","languageID":"vi"}
  ],
  "organizationTypes":[
    {"orgTypeID":1,"orgType":"ACF-HHS"},
    {"orgTypeID":22,"orgType":"Advocacy Organization"},
    {"orgTypeID":2,"orgType":"Children's Bureau"},
    {"orgTypeID":3,"orgType":"Community Organization"},
    {"orgTypeID":4,"orgType":"Faith-Based Organization"},
    {"orgTypeID":5,"orgType":"Family/Home"},
    {"orgTypeID":6,"orgType":"Foreign Organization"},
    {"orgTypeID":13,"orgType":"Government Agency"},
    {"orgTypeID":7,"orgType":"K-12"},
    {"orgTypeID":8,"orgType":"Library/CH"},
    {"orgTypeID":9,"orgType":"Media"},
    {"orgTypeID":10,"orgType":"National Organization"},
    {"orgTypeID":12,"orgType":"Other"},
    {"orgTypeID":14,"orgType":"Private Adoption Agency"},
    {"orgTypeID":15,"orgType":"Private Organization"},
    {"orgTypeID":16,"orgType":"Public Agency"},
    {"orgTypeID":17,"orgType":"Public Child Welfare Agency"},
    {"orgTypeID":18,"orgType":"Regional Office "},
    {"orgTypeID":19,"orgType":"State/Local Government"},
    {"orgTypeID":23,"orgType":"Tribal Child Welfare Agency"},
    {"orgTypeID":11,"orgType":"TTA Network Member"},
    {"orgTypeID":20,"orgType":"University"},
    {"orgTypeID":21,"orgType":"Unknown"}
  ],
  "deliveryMethods":[
    {"deliveryMethodID":1,"deliveryMethod":"USPS Media Mail"},
    {"deliveryMethodID":2,"deliveryMethod":"USPS 1st Class/Priority"},
    {"deliveryMethodID":3,"deliveryMethod":"USPS Express Mail"},
    {"deliveryMethodID":12,"deliveryMethod":"Courier within 30 miles radius"},
    {"deliveryMethodID":8,"deliveryMethod":"Courier to CB"}
  ],
  "publicationFormats":[
    {"formatID":1,"format":"Bound","orderBy":1,"isPaper":1},
    {"formatID":2,"format":"Unbound","orderBy":2,"isPaper":1},
    {"formatID":5,"format":"CD-ROM","orderBy":5,"isPaper":0},
    {"formatID":6,"format":"Audio Visual","orderBy":6,"isPaper":0},
    {"formatID":7,"format":"Poster","orderBy":7,"isPaper":0}
  ],
  "responseMethods":[
    {"responseMethod":"Phone","responseMethodID":1},
    {"responseMethod":"Fax","responseMethodID":2},
    {"responseMethod":"Email","responseMethodID":3},
    {"responseMethod":"Live Chat","responseMethodID":6},
    {"responseMethod":"Voicemail","responseMethodID":9},
    {"responseMethod":"Order","responseMethodID":5},
    {"responseMethod":"Letter","responseMethodID":4},
    {"responseMethod":"No Response","responseMethodID":7},
    {"responseMethod":"Social Media","responseMethodID":8}
  ],
  "customerTypes":[
    {"custType":"Professional","custTypeID":1},
    {"custType":"Personal","custTypeID":2},
    {"custType":"Student","custTypeID":3},
    {"custType":"Unknown","custTypeID":5}
  ],
  "InquiryAssignedTo":[
    {"surveyReason":"Caller < 18 Yrs","surveyReasonID":1},
    {"surveyReason":"Belligerent/Intoxicated","surveyReasonID":2},
    {"surveyReason":"Forgot to offer","surveyReasonID":3},
    {"surveyReason":"Request not on a survey day","surveyReasonID":4},
    {"surveyReason":"Language preference unsupported","surveyReasonID":5},
    {"surveyReason":"2nd call today","surveyReasonID":6},
    {"surveyReason":"Other","surveyReasonID":7},
    {"surveyReason":"Customer hung up before survey could be offered","surveyReasonID":8}
  ],
  "itemTopics":[
    {"topicID":2,"topic":"Adoption","orderBy":2},
    {"topicID":11,"topic":"Behavioral Health","orderBy":11},
    {"topicID":1,"topic":"Child Abuse and Neglect","orderBy":1},
    {"topicID":3,"topic":"Child Welfare Services and Systems","orderBy":3},
    {"topicID":12,"topic":"Custody","orderBy":12},
    {"topicID":9,"topic":"Family Support and Preservation","orderBy":9},
    {"topicID":4,"topic":"Family-Centered Practice","orderBy":4},
    {"topicID":10,"topic":"Kinship Care","orderBy":10},
    {"topicID":5,"topic":"Other","orderBy":5},
    {"topicID":6,"topic":"Out-of-Home Care/Foster Care","orderBy":6},
    {"topicID":7,"topic":"Permanency for Children and Youth","orderBy":7},
    {"topicID":8,"topic":"Prevention","orderBy":8},
    {"topicID":13,"topic":"Trending Issue","orderBy":13}
  ],
  "customerRoles":[
    {"custRole":"Adopted Person","custRoleID":3},
    {"custRole":"Adoption in a Private Agency","custRoleID":4},
    {"custRole":"Adoption in a Public Agency","custRoleID":47},
    {"custRole":"Adoption Personal","custRoleID":2},
    {"custRole":"Adoptive Parent","custRoleID":5},
    {"custRole":"Advocate","custRoleID":53},
    {"custRole":"Behavioral Health/Substance Use","custRoleID":26},
    {"custRole":"Biological Parent","custRoleID":7},
    {"custRole":"Birth Relative","custRoleID":8},
    {"custRole":"CAN Victim/Relative","custRoleID":9},
    {"custRole":"CAN/CW Personal ","custRoleID":10},
    {"custRole":"Child","custRoleID":41},
    {"custRole":"Child Abuse Prevention/Family Support","custRoleID":11},
    {"custRole":"Child Care Professional","custRoleID":12},
    {"custRole":"Child Welfare in Private Agency","custRoleID":13},
    {"custRole":"Child Welfare in Public Agency","custRoleID":48},
    {"custRole":"CPS Professional","custRoleID":15},
    {"custRole":"Faculty ? Higher Education","custRoleID":1},
    {"custRole":"FC Alumni","custRoleID":56},
    {"custRole":"Foster Care Professional","custRoleID":16},
    {"custRole":"Foster Parent/Legal Guardian","custRoleID":17},
    {"custRole":"General Public","custRoleID":18},
    {"custRole":"Government/Legislative Staff","custRoleID":19},
    {"custRole":"Info Specialist/Librarian","custRoleID":21},
    {"custRole":"K-12 Student","custRoleID":22},
    {"custRole":"Latchkey Child/Age Guideline","custRoleID":42},
    {"custRole":"Law Enforcement","custRoleID":49},
    {"custRole":"Legal/Courts","custRoleID":50},
    {"custRole":"Legal/Law Enforcement","custRoleID":23},
    {"custRole":"Library","custRoleID":51},
    {"custRole":"Media","custRoleID":52},
    {"custRole":"Media or Library","custRoleID":24},
    {"custRole":"Medical Professional","custRoleID":25},
    {"custRole":"Other","custRoleID":44},
    {"custRole":"Other","custRoleID":45},
    {"custRole":"Other","custRoleID":46},
    {"custRole":"Parent/Caretaker","custRoleID":37},
    {"custRole":"Postgraduate Student","custRoleID":20},
    {"custRole":"Prospective Adoptive Parent","custRoleID":29},
    {"custRole":"Prospective Foster Parent","custRoleID":43},
    {"custRole":"Reporter/Journalist","custRoleID":54},
    {"custRole":"Researcher/Evaluator","custRoleID":30},
    {"custRole":"School Counselor","custRoleID":58},
    {"custRole":"Social Service Professional","custRoleID":31},
    {"custRole":"Student (General)","custRoleID":57},
    {"custRole":"Teacher - K-12","custRoleID":32},
    {"custRole":"Undergrad Student","custRoleID":33},
    {"custRole":"Unknown","custRoleID":34},
    {"custRole":"Unknown","custRoleID":38},
    {"custRole":"Unknown","custRoleID":39},
    {"custRole":"Unknown","custRoleID":40},
    {"custRole":"Youth in FC","custRoleID":55}
  ],
  "topicLabels":[
    {
      "preload":
      {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":1,
    "label":"How to Foster"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":10,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":2,
    "label":"Complaint"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]
      }
    },  
    "labelID":3,
    "label":"How to Adopt"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":4,
    "label":"ETV/IL"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":5,
    "label":"School Project"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":6,
    "label":"Kinship/Grandparents"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":7,
    "label":"Adoption Search"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":8,
    "label":"Foster Care Records"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":9,
    "label":"Behavioral Health"
  },
  {
    "preload":{
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":10,
    "label":"Age Guidelines"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":11,"label":
    "Post Adoption"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":12,
    "label":"Family Assistance"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":13,"label":"CPS Records/Expungement"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":14,
    "label":"CAN on Internet Reporting"
  },
  {
    "preload":
    {
      "customerProfile":{"isAnonymous":1,"customerTypeID":2,"customerRoleID":43,"languageID":"en","organizationTypeID":5},
      "inquiry":{
        "topics":[{"topicID":1}],
        "informationType":[{"informationTypeID":7}],
        "informationUse":[{"informationUseID":3}]
      },
      "response":{"servicesProvided":[{"serviceID":9}]}
    },
    "labelID":15,
    "label":"Child Custody"
  }
]};

export default referenceData;