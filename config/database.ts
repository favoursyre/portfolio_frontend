//This acts as a database for country list

import { IExpertise, IProject, ITestimony } from "./interfaces";

///Libraries -->

///Commencing code
export const expertises: Array<IExpertise> = [
    {
      _id: "64f7077c440b53f40798b10c",
      name: "JMeter",
      image: "https://drive.google.com/uc?export=download&id=1Vee0CCYuNhnW6hN7aqbsKmzRjftgpWRd",
      percent: 85
    },
    {
        _id: "64f7074f440b53f40798b10a",
      name: "Ethereum",
      image: "https://drive.google.com/uc?export=download&id=1EV84lTLxafxCoZsmij0EPQ_2T47qcH3r",
      percent: 85
    },
    {
        _id: "64f7072f440b53f40798b108",
      name: "Pytorch",
      image: "https://drive.google.com/uc?export=download&id=1WjVAuuztMPXdMR44MkzJ_UMdlWzLlHG7",
      percent: 65
    },
    {
        _id: "64f70704440b53f40798b106",
      name: "Open CV",
      image: "https://drive.google.com/uc?export=download&id=1XRT1iDM3XbVPtpZRZ7XN10GOySgY2lyb",
      percent: 65
    },
    {
        _id: "64f706d5440b53f40798b104",
      name: "Heroku",
      image: "https://drive.google.com/uc?export=download&id=1RNtlo29miCzXqX_ZfNWaKcVb7Ki-MORf",
      percent: 90
    },
    {
        _id: "64bebe82a2cded9c56cf9cce",
      name: "Polygon",
      image: "https://drive.google.com/uc?export=download&id=1dyi8f_yWfMOSJA8aLhk3fvSB3QxXKjcQ",
      percent: 85
    },
    {
        _id: "64ba20c1aa7e6b8178b27419",
      name: "Docker",
      image: "https://drive.google.com/uc?export=download&id=1_AIhE1EB6TNa8pTQrvaVP9DRuAImNa9S",
      percent: 90
    },
    {
        _id: "64b60d6f01c3e1b0948dde55",
      name: "Soft Skills",
      image: "https://drive.google.com/uc?export=download&id=1dSF5t_OEA0l5QtmyYTUtXU6KRE8hurc_",
      percent: 90
    },
    {
        _id: "64b60d3901c3e1b0948dde53",
      name: "Git",
      image: "https://drive.google.com/uc?export=download&id=1gkqbUSBv4tAe-zgA4eZMtObxW2eq2Lmh",
      percent: 90
    },
    {
        _id: "64b60d1301c3e1b0948dde51",
      name: "Assembly",
      image: "https://drive.google.com/uc?export=download&id=1R2ruufmDY56Kn4VDicuTjk6eNx1_aa0A",
      percent: 40
    },
    {
        _id: "64b60cea01c3e1b0948dde4f",
      name: "C++",
      image: "https://drive.google.com/uc?export=download&id=1kKQeYWizvqsvrqKGh2e5XVh-2C6EmzWM",
      percent: 65
    },
    {
        _id: "64b60cb001c3e1b0948dde4d",
      name: "Infura",
      image: "https://drive.google.com/uc?export=download&id=1lcrMy13GqZqK6YbrLdyDKfrqVMuNeEfs",
      percent: 90
    },
    {
        _id: "64b60c3c01c3e1b0948dde4b",
      name: "GCloud",
      image: "https://drive.google.com/uc?export=download&id=1KXzgltqa4oNar0DAclOjBEEE4aubM8_S",
      percent: 90
    },
    {
        _id: "64b60c1d01c3e1b0948dde49",
      name: "Vercel",
      image: "https://drive.google.com/uc?export=download&id=1JTm4h-zXGuognjHkKGkLpgptht4Vm2sk",
      percent: 90
    },
    {
        _id: "64b60b4201c3e1b0948dde47",
      name: "IPFS",
      image: "https://drive.google.com/uc?export=download&id=1d-oDtg-aMYRnt24YZc2NRJIW2C20oC8Q",
      percent: 90
    },
    {
        _id: "64b60b1801c3e1b0948dde45",
      name: "Hardhat",
      image: "https://drive.google.com/uc?export=download&id=1d0Og4OykOpNTc8614iGVq3xHOkLW1vTG",
      percent: 90
    },
    {
        _id: "64b60adc01c3e1b0948dde43",
      name: "Yul",
      image: "https://drive.google.com/uc?export=download&id=1poGjo7WQrD0S6BgJLKhw5LrrNrI6FMQ1",
      percent: 50
    },
    {
        _id: "64b60ab801c3e1b0948dde41",
      name: "Solidity",
      image: "https://drive.google.com/uc?export=download&id=1gjrYLe49Kd8_rwdBzIKa75iA4UMdYi2k",
      percent: 90
    },
    {
        _id: "64b60a7901c3e1b0948dde3f",
      name: "Python",
      image: "https://drive.google.com/uc?export=download&id=1d7k77yUJREJGC8YGPx7Ph9kNcMHi5kur",
      percent: 90
    },
    {
        _id: "64b60a3f01c3e1b0948dde3d",
      name: "Mongo DB",
      image: "https://drive.google.com/uc?export=download&id=1BNzZHL0ht3n-UrthwuFjPzhLxNKp7D90",
      percent: 90
    },
    {
        _id: "64b60a1f01c3e1b0948dde3b",
      name: "Express JS",
      image: "https://drive.google.com/uc?export=download&id=1sziaQePbiXHwxltFsOYDlzE6FV-H2eD9",
      percent: 90
    },
    {
        _id: "64b609f701c3e1b0948dde39",
      name: "Next JS",
      image: "https://drive.google.com/uc?export=download&id=17PTDGrxhERuuxa5VY8K8l_uM7XcChDPK",
      percent: 90
    },
    {
        _id: "64b609dd01c3e1b0948dde37",
      name: "React JS",
      image: "https://drive.google.com/uc?export=download&id=1-Nr4X3DK-d9-WM2bzLOKAkaMKXTye4Ba",
      percent: 90
    },
    {
        _id: "64b609ac01c3e1b0948dde35",
      name: "Node JS",
      image: "https://drive.google.com/uc?export=download&id=18XIryez8h9CChtnMbZrEcgGxMXY7MKZx",
      percent: 90
    },
    {
        _id: "64b6098701c3e1b0948dde33",
      name: "Typescript",
      image: "https://drive.google.com/uc?export=download&id=1FY7h9U3al2dcsVTnVzVytw76YkfG7O1y",
      percent: 90
    },
    {
        _id: "64b6096d01c3e1b0948dde31",
      name: "Javascript",
      image: "https://drive.google.com/uc?export=download&id=16qHXWLREY0WS2P7o5cvmyPOdsnOI75si",
      percent: 90
    },
    {
        _id: "64b6092901c3e1b0948dde2f",
      name: "SCSS",
      image: "https://drive.google.com/uc?export=download&id=1AV_eBjr2CqNdbc4nxSjuh2mXL7-Fjh29",
      percent: 90
    },
    {
        _id: "64b608cc01c3e1b0948dde2d",
      name: "HTML/CSS",
      image: "https://drive.google.com/uc?export=download&id=12-iiYvh0zXpNNe48-H21Mf1cAWUV97zc",
      percent: 90
    }
  ]

export const testimonies: Array<ITestimony> = [
    {
        _id: "64ba24baaa7e6b8178b2742d",
        name: "Emeka Okafor",
        image: "https://drive.google.com/uc?export=download&id=1M5G_AmdFGjOUbm3Fb0hrKl65SvZO2NNn",
        testimony: "Working with Favour was a breeze. His communication skills and technical expertise are top-notch!",
    },
    {
        _id: "64ba2468aa7e6b8178b2742b",
        name: "Ifeoma Adesuwa",
        image: "https://drive.google.com/uc?export=download&id=1ZyCnA48kMslwyP_qdbVie9f3s_raHBvO",
        testimony: "Favour is a talented programmer who can handle any challenge. He's a valuable asset to any team."
    },
    {
        _id: "64ba242caa7e6b8178b27429",
        name: "Chinedu Okonkwo",
        image: "https://drive.google.com/uc?export=download&id=1AEbP4sgKkF1IUFikxMrYx4i4wnrLff9F",
        testimony: "Favour's attention to detail and commitment to quality made a huge difference in our project's success."
    },
    {
        _id: "64ba23daaa7e6b8178b27427",
        name: "Oladapo Adekunle",
        image: "https://drive.google.com/uc?export=download&id=1uQQX6icw8t2VF8dBXr8BW0say7GawKr2",
        testimony: "Favour is a highly skilled developer with a strong problem-solving mindset. It was a pleasure to work with him."
    }
]

export const projects: Array<IProject> = [
    // {
    //   _id: "64f70527440b53f40798b0ff",
    //   category: "Web 2",
    //   name: "IB Cakes",
    //   image: "https://drive.google.com/uc?export=download&id=1NEA1C0BQsWupPgMCG0OKpLmJ1AR6CLPf",
    //   description: "This is a web for purchasing cakes and pastries",
    //   technologies: [
    //     "Next TS",
    //     "SCSS",
    //     "Mongo DB"
    //   ],
    //   sourceCodeLink: "https://github.com/favoursyre/ibcakes-frontend.git",
    //   appLink: "https://ibcakes.vercel.app"
    // },
    // {
    //   _id: "64f7045e440b53f40798b0fd",
    //   category: "Web 2",
    //   name: "Dr Ritany",
    //   image: "https://drive.google.com/uc?export=download&id=1K0BR4DCNjaSctwSdGQTD31qSzSAHeB3_",
    //   description: "This is an health product ecommerce web app",
    //   technologies: [
    //     "Next TS",
    //     "SCSS",
    //     "Express TS",
    //     "Mongo DB"
    //   ],
    //   sourceCodeLink: "https://github.com/favoursyre/drritany-frontend.git",
    //   appLink: "https://drritany.vercel.app"
    // },
    {
      _id: "64beb2f0a2cded9c56cf9cae",
      category: "Web 2",
      name: "Portfolio Website V1",
      image: "https://drive.google.com/uc?export=download&id=1EhgVKfkQ-AM01TD-VqnmQVhZ_YgAYFsB",
      description: "This is the first version of my portfolio website",
      technologies: [
        "Material UI",
        "Next.JS",
        "Django",
        "Postgresql"
      ],
      sourceCodeLink: "https://github.com/favoursyre/portfolio-website-v1.git",
      appLink: ""
    },
    {
      _id: "64beb160a2cded9c56cf9caa",
      category: "Web 2",
      name: "Finance Dashboard",
      image: "https://drive.google.com/uc?export=download&id=1qWtO55cL4-6F316VRoXb_kfHfA1-HKdm",
      description: "This displays statistical information about a financial data",
      technologies: [
        "Material UI",
        "SCSS",
        "Next.TS"
      ],
      sourceCodeLink: "https://github.com/favoursyre/finance-dashboard.git",
      appLink: ""
    },
    {
      _id: "64bb48d800d97d3eeab07ca6",
      category: "Web 2",
      name: "Calculator",
      image: "https://drive.google.com/uc?export=download&id=1OktQeoE3tqsgG_RV2zgnlnX84j4FVUX_",
      description: "A simple script that creates a simple calculator",
      technologies: [
        "HTML",
        "CSS",
        "Javascript"
      ],
      sourceCodeLink: "https://github.com/favoursyre/calculator-js.git",
      appLink: ""
    },
    {
      _id: "64bb487d00d97d3eeab07ca4",
      category: "Web 2",
      name: "Portfolio Website V2",
      image: "https://drive.google.com/uc?export=download&id=1rLzLtkUp5B-d4G5mD7OyuEmdFLOETZeo",
      description: "This is version 2 of my porfolio website",
      technologies: [
        "Next TS",
        "SCSS",
        "Mongo DB"
      ],
      sourceCodeLink: "https://github.com/favoursyre/portfolio_frontend.git",
      appLink: "https://favoursyre.vercel.app"
    },
    {
      _id: "64bb47a200d97d3eeab07ca2",
      category: "Web 2",
      name: "Weather App",
      image: "https://drive.google.com/uc?export=download&id=1nESY98o85aZD5ERik6FoGwO8km0KvCRX",
      description: "A simple weather map using openweathermap API",
      technologies: [
        "Javascript",
        "React.JS"
      ],
      sourceCodeLink: "https://github.com/favoursyre/weather-app.git",
      appLink: ""
    },
    {
      _id: "64bb46a200d97d3eeab07ca0",
      category: "Blockchain",
      name: "Smart Supply Chain",
      image: "https://drive.google.com/uc?export=download&id=17PdwkRz0fqAI3vODy6VGcgSjoBZWd2CT",
      description: "This demonstrates a simple smart contract for supply chain management",
      technologies: [
        "Javascript",
        "Solidity",
        "Metamask",
        "Ethers.JS",
        "Alchemy"
      ],
      sourceCodeLink: "https://github.com/favoursyre/smart-supply-chain.git",
      appLink: ""
    },
    {
      _id: "64bb454900d97d3eeab07c9e",
      category: "Blockchain",
      name: "Akatsuki DAO",
      image: "https://drive.google.com/uc?export=download&id=1UZLPA9nCFMHt-7pWZWUZG7zv2J59oh9K",
      description: "This demonstrates a simple DAO for Akatsuki NFT holders",
      technologies: [
        "Javascript",
        "Solidity",
        "Metamask",
        "Moralis",
        "Hardhat"
      ],
      sourceCodeLink: "https://github.com/favoursyre/akatsuki-dao.git",
      appLink: ""
    },
    {
      _id: "64bb432c00d97d3eeab07c9b",
      category: "Blockchain",
      name: "Tree Fund",
      image: "https://drive.google.com/uc?export=download&id=1PajvqWoY7fVvNw-glnFs2RHJ_SS5eih9",
      description: "This script allows users to donate ether to the smart contract",
      technologies: [
        "Javascript",
        "Solidity",
        "Metamask",
        "Hardhat"
      ],
      sourceCodeLink: "https://github.com/favoursyre/tree-fund.git",
      appLink: ""
    },
    {
      _id: "64bb425400d97d3eeab07c99",
      category: "Blockchain",
      name: "Stake Chain",
      image: "https://drive.google.com/uc?export=download&id=1NDayOCuEdJBmRDy95pXTdtDE-95pCM0W",
      description: "This is a defi protocol that allows a user to stake ether and earn ROI",
      technologies: [
        "Javascript",
        "Solidity",
        "Metamask",
        "Hardhat"
      ],
      sourceCodeLink: "https://github.com/favoursyre/stake-chain.git",
      appLink: ""
    },
    {
      _id: "64bb420300d97d3eeab07c97",
      category: "Blockchain",
      name: "Block Mall",
      image: "https://drive.google.com/uc?export=download&id=1b0x92LiROUJLGlDaXXy88a5sefWyYbZz",
      description: "BlockMall is a Web3 E-commerce Dapp",
      technologies: [
        "Javascript",
        "React.JS",
        "Metamask",
        "Moralis"
      ],
      sourceCodeLink: "https://github.com/favoursyre/blockmall.git",
      appLink: ""
    },
    {
      _id: "64bb412100d97d3eeab07c95",
      category: "Blockchain",
      name: "Haber Stablecoin",
      image: "https://drive.google.com/uc?export=download&id=1ptJdh6GoVCMDr6B3cFk1zJUxJGbHg2hy",
      description: "This is the script for Haber Stablecoin",
      technologies: [
        "Solidity",
        "Typescript",
        "Infura",
        "Metamask",
        "Hardhat"
      ],
      sourceCodeLink: "https://github.com/favoursyre/haber-stablecoin.git",
      appLink: ""
    },
    {
      _id: "64bb409400d97d3eeab07c93",
      category: "AI/ML",
      name: "Byakugan",
      image: "https://drive.google.com/uc?export=download&id=1loJZx_V1LhtpoIsTj9awfIA1bQekhcA6",
      description: "This is an AI software that detects, classifies and tracks object on an image frame",
      technologies: [
        "Python",
        "Open CV"
      ],
      sourceCodeLink: "https://github.com/favoursyre/byakugan.git",
      appLink: ""
    },
    {
      _id: "64ba6285c1b84f7b995cf3ac",
      category: "AI/ML",
      name: "Pose Estimation",
      image: "https://drive.google.com/uc?export=download&id=16LtDI2XVf4gwTL-0FqYE7jQOofe5HRtj",
      description: "This script uses computer vision for pose estimation",
      technologies: [
        "Python",
        "Open CV",
        "Mediapipe"
      ],
      sourceCodeLink: "https://github.com/favoursyre/pose-estimation.git",
      appLink: ""
    },
    {
      _id: "64ba61eec1b84f7b995cf3aa",
      category: "AI/ML",
      name: "Hand Tracking",
      image: "https://drive.google.com/uc?export=download&id=1L6suTV8x-NRE2xN093KBGR9h3BW-M3Ts",
      description: "This script uses computer vision for hand tracking",
      technologies: [
        "Python",
        "Open CV",
        "Mediapipe"
      ],
      sourceCodeLink: "https://github.com/favoursyre/hand-tracking.git",
      appLink: ""
    },
    {
      _id: "64ba61a9c1b84f7b995cf3a8",
      category: "AI/ML",
      name: "Face Detection",
      image: "https://drive.google.com/uc?export=download&id=1yAcsvNSHjWhUb7H2Fu-0yEQNxVKJCgoL",
      description: "This script uses computer vision for face detection",
      technologies: [
        "Python",
        "Open CV",
        "Mediapipe"
      ],
      sourceCodeLink: "https://github.com/favoursyre/face-detection.git",
      appLink: ""
    }
  ]