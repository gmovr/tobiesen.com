---
title: How to add my iCloud calendar to Home Assistant via CalDAV
description: An easy way to show a card of our shared calendar from iCloud in Home Assistant dashboard
tags:
    - Home Automation
    - Home Assistant
isDraft: false
publishedDate: 2024-08-27
---
I'm currently reworking our Home Assistant dashboard, and I wanted to add a calendar card from the shared iCloud calendar my wife and I use.

To do this, add the CalDAV integration. 

## What is CalDAV?
CalDAV is an extension of WebDAV that provides a standard for clients to access calendar information on a remote server. It is supported by iCloud, Google, and many others. 

This means you can also add additional calendars from different providers. For example, I use a Google Calendar for work, which I could also import. 

## Setting it up in Home Assistant
The first thing you need is an application-specific password from iCloud. You can create one from [your account setting](https://appleid.apple.com/account/manage). You will use this to authenticate CalDAV.
To authenticate, Use `https://caldav.icloud.com/.well-known/caldav` for the URL, your iCloud username/email, and the application-specific password created above.
- Once authenticated, each calendar will show as a separate entity, and when adding a card to your dashboard, you simply pick the corresponding entity/calendar. 

You can now create a dashboard card, like the example below:

```yaml
initial_view: listWeek
type: calendar
entities:
  - calendar.rum_diaries
title: Events
```
