---
title: How to connect Bosch HomeCom Easy air conditioning units to Home Assistant and Homekit?
description: Ditch the HomeCom app and control your AC directly via Home Assistant and Apple Homekit with a local API!
tags:
    - Home Automation
    - Homekit
    - Home Assistant
isDraft: false
publishedDate: 2024-04-30
---
If you have a smart air conditioning unit from Bosch with the HomeCom Easy app, you may be underwhelmed by how non-smart and difficult it is to use. 

Last year, I installed a few of these in my house: one Bosch 5000i (1x1) and one Bosch 3000i (3x1). I also bought the WiFi modules from the manufacturer, assuming they would integrate with any home automation system. It's 2024, and I see that as table stakes.

There's no local API, and you're locked into using the clunky official app. Who knows how long these cloud APIs will be maintained before Bosch launches a new system?

I could live with the clunky app if they had just opened the API. But there is none, so you can't connect the app to Alexa, Apple Home, or Home Assistant. You're 100% locked to the vendor's app, which seems a bit abandoned. 

You _can_ sort of reverse engineer the API using something like Wireshark, but you still need to go through Bosch's cloud service to control an AC unit just a few feet away from you.


## So, how Can I Set it up in Home Assistant?
![All AC units added to Home Assistant](../../assets/img/homeassistant-bosch-homecom-easy.jpeg)

It's pretty simple. After some research online, I saw that the boards are manufactured by Midea, or at least they are more or less the same as Midea boards. This is true for a lot of AC units from brands like Bosch, Electrolux, Beko, and a lot of other brands.

Knowing this, it was likely that _any_ smart controller for Midea AC units would work.

I found [these controllers from Smartlight.me](https://smartlight.me/smart-home-devices/wifi-devices/wifi-dongle-air-conditioners-midea-idea-electrolux-for-home-assistant) for less than $15, which was cheap enough to test. 

There are many other options; you could even make your own using an ESP32.

## Installation
I replaced the modules from Bosch with the above WiFi sticks. It will provide a temporary WiFi network once it's connected and booted up. You can log onto this network from a computer or your phone and choose your WiFi network.

I set it up on my IOT SSID, then gave each unit a static IP. 

After about 2 minutes, seeing the units connected in my logs, I tested adding them to Home Assistant with the ESP Home config, providing their local IP addresses and the default port. 

![Original AC unit replaced with unit from Smartlight](../../assets/img/homeassistant-bosch-homecom-easy2.jpeg)

And it worked right out of the box. 

After adding all the units to Home Assistant, I added them to the HomeKit bridge and brought them to my Apple Home app. 

The integration has been very reliable, both in Home Assistant and in Apple Home. Finally, I can control my climate devices via "Hey Siri" or my Apple Watch ... So I don't have to reach for the remote.

