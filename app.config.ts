export default defineAppConfig({
  docus: {
    title: 'ArmoniK',
    description: 'ArmoniK Documentation',
    socials: {
      website: {
        label: "Website",
        href: "https://armonik.fr",
        icon: "mdi:web",
      },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/aneo/",
        icon: "mdi:linkedin",
      },
      twitter: "https://twitter.com/ANEOConseil",
      github: "aneoconsulting/ArmoniK.Api",
    },
    aside: {
      level: 1,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      credits: {
        href: "https://aneo.fr",
        icon: "LogosAneo",
      },
      textLinks: [
        {
          text: "ArmoniK",
          target: "_blank",
          href: "https://aneoconsulting.github.io/ArmoniK/",
        },
        {
          text: "ArmoniK.Core",
          target: "_blank",
          href: "https://aneoconsulting.github.io/ArmoniK.Core/",
        },
        {
          text: "ArmoniK.Api",
          target: "_blank",
          href: "https://aneoconsulting.github.io/ArmoniK.Api/",
        },
        {
          text: "ArmoniK.Admin.GUI",
          target: "_blank",
          href: "https://aneoconsulting.github.io/ArmoniK.Admin.GUI/",
        },
      ],
      iconLinks: [],
    },
  },
})
