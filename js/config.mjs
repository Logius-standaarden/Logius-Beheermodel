import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [
    { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://logius.nl/standaarden"
    }
  ],
  editors: [ { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://logius.nl/standaarden"
      } ],
  github: "https://github.com/Logius-standaarden/Logius-Beheermodel",
  nl_markdownCodeClass: "code",
  nl_markdownTableClass: "dkkvs",
  pubDomain: "logius",
  publishDate: "2023-09-23",
  publishVersion: "1.0",
  prevVersion: [],
  shortName: "beheermodel",
  specStatus: "WV",
  specType: "HR"
});
