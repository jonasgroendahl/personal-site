import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
const items = [
  {
    title: "April update",
    description: [
      "Wow it's been a while since I sat down and wrote something. As expected the big project is going to be delayed but wow, I honestly think we did really good so far and with all major features implemented, looking forward to relaxing a bit.",
      "What else can I report? Well I spend some time to rewrite this site using Material UI v5 and TypeScript for fun and giggles. At LEGO there are some re-organization going on so I'll be moving to a new team, a bit nervous but also excited to see what's going to happen. I would really like to do more frontend and mobile soonish!",
      "At the time of writing this update, the wife is checking out pots and im sitting down to relax a bit. I want to get more into writing these updates, just for myself to look back. I'm gonna do it.",
      "YouTube has reached 1270 subsribers so it's slowly increasing but I'm not that motivated currently since most of the stuff that I'm working on currently is infrastrructure and enterprise backend code, which is not too exciting to make videos about. I've been thinkin about releasing a video about a day in the life of a LEGO Engineer but I'm not sure if I'm allowed to record on Campus and I'm not sure if the video is interesting. It's kind of a classic video to make these days. I need more motivation I think, anyway the idea is there.",
      "I've also played a little bit of WoW: shadowlands but already burned out. I think it's the last wow expansion that I will try, it's getting old for me. Lately been checking out Dota 2 vods, pretty entertaining stuff.",
      "That's all for now. Enjoy your day and check out the syntax.fm podcast if you haven't yet, it's a good listen.",
    ],
    img: "",
    tags: ["Update"],
    date: "2021-04-07",
    link: "",
  },
  {
    title: "November update",
    description: [
      "I'm not very good at updating this but here we go, I took 10 minutes out of my schedule to write some stuff so here we go",
      "There's a big project in the works, I really really hope we can have something ready in March-April 2021 but I'm expecting delays, let's see what happens. Super exicted about this one :) Also finished a semi large React Native project recently for a client - got a lot of learnings from that.",
      "YouTube is making progress although I'm not quite sure where the channel is heading, usually I'm just posting videos on stuff that I'm working on and I can see other people benefitting from it by watching it. BUT I think if I want to make it a real thing, I will probably have to pick a path and spend more time on it. Right now I'm not sure what my plan is. I guess my goal will be 1000 followers and then let's see.",
      "On the personal level, there's also something big going on that I can't reveal. SUPER excited for this ❤️",
      "Right now when I'm sitting here, I feel eager to explore the world while still getting work done. I hope this can become a reality one day in the future.",
      "Sorry for all the blur, I really hope I can post here more often and write something that makes sense.",
    ],
    img:
      "https://showmeinstitute.org/wp-content/uploads/2019/10/shutterstock_1083474668-812x491.jpg",
    tags: ["Update"],
    date: "2020-02-11",
    link: "",
  },
  {
    title: "Services around me",
    description: [
      "A lot of stuff going on these days, first things first I've developed a new app 'Services Around Me' together with a small team here in Denmark.",
      "Initially I was going to only implement the frontend but we ended up using Firebase so me and with assistance from Bjorn implemented the entire thing. It's a really cool initiative, I really hope it can catch some attraction because the idea is simply just helping people out getting help, no fee or anything",
      "The idea of this app has been on Bjorn's mind for years and I've been a big fan of it since I heard the pitch during the Aarhus Hackathon. Anyway the app is live on Google Play Store and App Store. Give it a try and spread the word",
      "LEGO work continuely going well, I'm doing a bunch of DevOps backend stuff, maybe I will become a certified AWS developer one day haha, let's not hope that will be the case.",
      "New milestone on YouTube has been reached - 300 subscribers, slow and steady increasing, I will attempt to continue my efforts to create videos.",
      "And last but not least, a new business initiative is in the works! More information on that in September hopefully ;)",
      "Enjoy the sun everyone, it's hot these days! Oh and I will try post more often so not a bunch of stuff piles up like this in such a short post",
    ],
    img: " ",
    tags: [
      "Update",
      "React Native",
      "YouTube",
      "Free app",
      "Business",
      "Hackahton",
    ],
    date: "2020-02-06",
    link: "https://servicesaroundme.eu/",
  },
  {
    title: "March",
    description: [
      "Just want to post I'm still alive. I don't have many updates other than I'm working more and more on sideprojects these days - just for the fun and learnings.",
      "If somebody has an idea how to create a delivery concept that can get elevated to the next level using technology, I'm very interested. I'm inspired by what waiteer is doing but I want to do it better and by better, I mean not just creating a better app but also a nieche that would interest restaurants",
      "My domain has been down for a few days but that problem should be fixed now. YouTube is still going, I hope to continue down on that path. I had a few weeks that I only posted bi weekly because of lack of inspiration.",
      "I have finished a scraper product that can scrape the FB marketplace using your filters and post updates to your phone. If that's something you're interested in, I can provide the software free of charge. :)",
      "I wish everybody be safe these days, the corona is upon us",
    ],
    img:
      "https://image.freepik.com/free-vector/2020-new-year-written-blue-neon-style_1017-22195.jpg",
    tags: ["Update", "React Native", "YouTube", "Business"],
    date: "2020-31-03",
    link: "",
  },
  {
    title: "2020",
    description: [
      "It's 2020, new year and I'm still working fulltime and still looking for that SaaS app that I can start building. Business as usual.",
      "My main problem right now is that I don't know what problems people have out there. I dont know whether I should start a survey, put on social media and hope for the best. Right now the only problems I can try to solve are problems I have myself and that perspective is not very wide.",
      "Meanwhile I'm searching for that business idea, I still upload videos to YouTube and have been looking around for extra work on freelance websites to gain additional income. Reason is I need to save up a lot of money - maybe I will reveal why in the future!",
      "My latest app has been a iOS/Android app for Dota 2 fans. I made a YouTube video about it, have a look if you're interested. Keep in touch!",
    ],
    img:
      "https://image.freepik.com/free-vector/2020-new-year-written-blue-neon-style_1017-22195.jpg",
    tags: ["Update", "React Native", "YouTube", "Dota 2", "Business"],
    date: "2020-17-01",
    link: "",
  },
  {
    title: "Monthly update",
    description: [
      "New job, new stuff to learn - a lot of stuff to learn.",
      "Here are some of things that I've acquired more knowledge about: TypeScript, iOS React Native development, Git flow, Caching, Swagger, Node CLIs, Github Actions, AWS (ECR, ECS, Fargate) Ruby, Fastlane, AppCenter",
      "And yes, the list goes on. Anyway I'm starting to think of a new idea. I will not be satisfied until I think of a good idea and make that into a app. The year is coming to an end and this is one of my missing goals of the year.",
      "Currently at 80+ subscribers on YouTube so seems like my channel has caught some developers' eyes. Some people have been requesting a Material UI course - I don't know the seriousness of that request but could be interesting to dive into as well. We'll see.",
    ],
    img:
      "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/brainstorm-customer-service-og.jpg",
    tags: ["Update"],
    date: "2019-19-10",
    link: "",
  },
  {
    title: "My startup idea.",
    description: [
      "The past month I've been pretty much all in on my new idea for an app - a ridehailing app based in Denmark - Jubi Rides.",
      "UBER didn't have much success here in Denmark despite their very functional driver and customer app. The problem was they were not ready to adjust to danish law.",
      "What if somebody could take the same concept of cheap and convient ride fares but tailor it to the Danish system?",
      "The Danish taxa system is awful in my opinion. You never know how much you'll end up paying and you have to search around the web to figure what phone number to call to get a cab. In addition it's super expensive.",
      "Like the sound of the idea? Please contact me!! Jubirides.com is up and running. I've already made a proof of concept app but I'm not in a position to go fulltime on this business just yet.",
      "I really believe this idea can change the every day life here in Denmark and bring much happiness and conveninence. This is what I strive to do afterall, to build something that makes a difference to a larger userbase.",
    ],
    img: "https://jubirides.com/static/media/isolated-layout.8d98eaf9.svg",
    tags: ["Project", "Business", "React Native"],
    date: "2019-30-06",
    link: "https://jubirides.com/",
  },
  {
    title: "Senior Software Developer at LEGO Group.",
    description: [
      "This month has been very busy and therefore not a whole lot of time have been spent on side projects.",
      "I have a pretty legit idea of a new app though that I'm gonna start to dive deeper into whenever there's time. Also been working with a lot of React Native and GraphQL which has been exciting.",
      "Now to the big news. I have been accepted as a developer at LEGO Group. I'm super duper excited to get started and see what happens.",
      "I hope to share some more news when I get started!",
    ],
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png",
    tags: ["Project", "Job", "React Native", "GraphQL"],
    date: "2019-09-06",
    link: "https://www.lego.com/",
  },
  {
    title: "Time for mobile! PWA hype train.",
    description: [
      "Another month, another sideproject to stick my teeth into. This time around I've built a Progressive Web App enabled mobile site for trading goods and skill sets - a great idea that my gf came up with.",
      "People tend to go out and buy stuff when they need something and throw out stuff when they don't need it any longer. This app tries to change the mindset of people by opening up a space that allows people to trade goods and even skills.",
      "On the technical side of things, this app is built using React on the frontend, MongoDB for database and Node Express.js for handling backend stuff. Got introduced to a new library webpush which made life a little easier.",
      "This project I've put a lot of focus on creating a neat mobile experience, working with components, layout and navigation that makes sense on mobile. I dove deep into service workers and managed to implement Push notifications among other things.",
    ],
    img: "images/img_5.jpg",
    tags: [
      "Demo",
      "Mobile and Responsive Web design",
      "PWA",
      "MongoDB",
      "React",
      "Node.js",
      "Cloudinary",
    ],
    date: "2019-07-26",
    link: "https://tradester.netlify.com",
  },
  {
    title: "Modern social media - Showcasing my coding style",
    description: [
      "The past 4 days I've been working on a neat little social media site demo. The main purpose of this project is simply to build something 'complete' (changes aren't saved to a database) and then be able to showcase it. I have not created some solid public viewable code in a while so here goes.",
      "In this demo project I'm playing around with a few libraries and test out a new concept. The concept is called minimalistic social media. I believe social media platforms like Facebook have become too broad. This site focuses on just a few things, a blog, a media list and photo albums.",
      "The site is written using modern React with hooks and context. I'm playing around with a few libraries that I really like, like react-spring, react-beautiful-dnd and material-ui.",
      "You can check it out on Github, it showcases my current coding style very well. Important note: I use sonic themed data 🦔 for testing.",
    ],
    img: "images/post_1.jpeg",
    tags: [
      "Demo",
      "Material Design",
      "React",
      "react-spring",
      "react-beautiful-dnd",
      "JavaScript",
    ],
    link: "https://sporkerino.netlify.com",
    date: "2019-06-24",
  },
  {
    title: "Project YouTube",
    description: [
      "I've started to release coding videos on YouTube. So far I've just released a few and I realize there are many improvements to be made as of now, but we'll get there.",
      "I'm planning to release one video a week, so let's see if we can maintain that goal.",
      "The main objective is to find some area of programming using JavaScript that haven't been covered and make a video to show people how I have done it.",
      "Hit me up for any ideas you might have.",
    ],
    img:
      "https://amp.businessinsider.com/images/59a59a8d79bbfd1d008b601a-960-480.png",
    tags: ["Project", "YouTube", "JavaScript", "Video Content"],
    link:
      "https://www.youtube.com/channel/UCVrchtz0z4it4JZjIS1D03A?view_as=subscriber",
    date: "2019-06-17",
  },
  {
    title: "Secondhand priser",
    description: [
      "This website intended use is for looking up secondhand goods in Denmark.",
      "In Denmark there are many websites where you can buy/sell used items and it can be pain to check them all out one by one.",
      "This site solves the problem by fetching all the products from the different sites and putting them in one place.",
      "One of the key features is that it also scrapes items off Facebook Marketplace, which cannot be done by a simple webscraper tool.",
    ],
    img: "secondhandpriser.png",
    tags: [
      "Live",
      "JavaScript",
      "Headless Chrome",
      "Node.js",
      "AWS EC2",
      "Puppeteer",
    ],
    link: "https://secondhandpriser.dk",
    date: "2019-05-30",
  },
];

const Updates: React.FC = () => {
  const [limit, setLimit] = useState(3);

  return (
    <div>
      <Stack spacing={4}>
        {items.slice(0, limit).map((item) => (
          <Paper sx={{ p: 2 }} key={item.title}>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>
            {item.description.map((text, i) => (
              <Typography
                color="textSecondary"
                key={`${item.title}_${i}`}
                paragraph
              >
                {text}
              </Typography>
            ))}
          </Paper>
        ))}
      </Stack>
      {limit < items.length ? (
        <Box my={2} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<ExpandMore />}
            onClick={() => setLimit((prev) => (prev += 3))}
          >
            See more
          </Button>
        </Box>
      ) : null}
    </div>
  );
};

export default Updates;
