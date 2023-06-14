const personalInfo = {
    fullName: "Liga Niedola",
    phone: "26746407",
    adress: [
        {
            state: "Latvija",
            city: "Grobiņa",
            street: [
                {
                    name: "Priežu iela",
                    number: "11"
                }
            ]
        }
    ],
    skills: [
        {
            computerSkills: [
                {
                    productivitySoftware: [
                        {
                            digitalCalendars: "Digital calendars",
                            presentationSoftware: "Presentation software",
                            emailManagement: "Email Management",
                        }
                    ],

                    operatingSystems: [
                        {
                            msWindows: "Microsoft Windows",
                            appleIOS: "Apple iOS",
                            linux: "Linux",
                        }
                    ],

                    digitalMarketing:[
                        {
                            websiteAnalytics: "Website analytics",
                            digitalMedia: "Digital media",

                        }
                    ]
                }
            ],

            problemSolvingSkills: [
                {
                    creativity: "Creativity",
                    research: "Research",
                    communication: "Communication",
                }
            ],
        }
    ],
};
console.log("My name: ", personalInfo.fullName);
console.log("Adress: ", personalInfo.adress[0].city);
console.log("Computer skills: ", personalInfo.skills[0].computerSkills[0].operatingSystems[0].linux);
