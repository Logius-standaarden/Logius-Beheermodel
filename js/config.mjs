import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [
    { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
    }
  ],
  editors: [ { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      } ],
  github: "https://github.com/Logius-standaarden/Logius-Beheermodel",
  nl_markdownCodeClass: "code",
  nl_markdownTableClass: "dkkvs",
  pubDomain: "dk",
  publishDate: "2023-09-23",
  publishVersion: "1.0",
  prevVersion: [],
  shortName: "beheermodel",
  specStatus: "WV",
  specType: "HR"
});
