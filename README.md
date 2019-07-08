<!-- All-contributors badge -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)<!-- Travis badge -->
[![Build Status](https://travis-ci.org/louiCoder/pamoja-mobile.svg?branch=master)](https://travis-ci.org/louiCoder/pamoja-mobile)<!-- Coveralls badge -->
[![Coverage Status](https://coveralls.io/repos/github/louiCoder/Pamoja-React-Native-App/badge.svg?branch=master)](https://coveralls.io/github/louiCoder/Pamoja-React-Native-App?branch=master)

# :iphone:Pamoja Android and iOS client apps
An Android and iOS mobile client for Pamoja # Contributing

#### Getting started
Please following the instructions below in order to get the application up and running. currently the app is running safely on the android platform and we intend to run the iOS once we can do so. First before setup clone the repository by running the command below.  

`$ git clone git@github.com:louiCoder/profiles-react-native.git`

1. **Install an Android emulator**.  
You can install Android studio from [Here](https://developer.android.com/studio) plus instructions on how to run the studio. In case the emulator does not work out, you can use a physical device.
  - connect your phone over usb cable
  - Go to settings and enable developer options. instructions [Here](https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/)

2. **Install dependencies**.  
- For those using npm, run  
`$ npm install`    

- For those using yarn, run  
`$ yarn install`

3. **Run the application**.  
Since at the moment we can only run for Android platform run the command below specific to only the Android platform.  
`$ react-native run-android`

### Solutions to known issues:
- Make sure you have given permissions to the android/.gradlew file, to do this on linux run  
`sudo chmod u=rwx android/gradlew` or `sudo chmod rwx-rwx-rwx android/.gradlew`  
for windows users right click the gradlew file in the android folder and give the users permissions to read, write and execute the file.

- Make sure your emulator is running and is being recognised. To check if the device is connected properly and recognised, run the following command in the terminal  
`adb devices`  
This will list all devices whether virtual or physically connected to your device.

- Make sure that you have enabled developer priviledges by enabling usb debugging for those debugging on physical devices. The instructions for setting up developer proviledges on android devices can be found [Here](https://www.makeuseof.com/tag/what-is-usb-debugging-mode-on-android-makeuseof-explains/)
## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/louiCoder"><img src="https://avatars2.githubusercontent.com/u/32771081?v=4" width="100px;" alt="Musanje Louis Michael"/><br /><sub><b>Musanje Louis Michael</b></sub></a><br /><a href="https://github.com/louiCoder/Pamoja-Android/commits?author=louiCoder" title="Code">💻</a> <a href="#question-louiCoder" title="Answering Questions">💬</a> <a href="#maintenance-louiCoder" title="Maintenance">🚧</a> <a href="#projectManagement-louiCoder" title="Project Management">📆</a></td><td align="center"><a href="https://github.com/Nsengiyunva"><img src="https://avatars0.githubusercontent.com/u/4712414?v=4" width="100px;" alt="King Isaac Nsengiyunva"/><br /><sub><b>King Isaac Nsengiyunva</b></sub></a><br /><a href="https://github.com/louiCoder/Pamoja-Android/commits?author=Nsengiyunva" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

please read through our contributing guidelines [Here](https://github.com/louiCoder/Pamoja-Android/blob/master/CONTRIBUTING.md)
