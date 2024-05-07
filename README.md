# 3D T-Shirt Customizer

# Overview

Following the great tutorial by __JavaScriptMastery__ (https://www.youtube.com/watch?v=ZqEa8fTxypQ&list=LL&index=2&ab_channel=JavaScriptMastery)

The 3D T-Shirt Customizer is a dynamic web application designed to allow users to create personalized T-shirt designs using 3D models.

 Built with React, the application integrates advanced UI animations with Framer Motion, state management via Valtio, and custom-designed components for an interactive user experience. 
 
 It provides a real-time design platform with tools like color pickers, file uploaders, and AI-generated decals.

## Features

* __Dynamic 3D T-shirt Modeling:__ 
Users can visualize T-shirt designs in a 3D space, enhancing the customization experience.

* __AI-Powered Image Generation:__ 
Leverage AI to create or modify T-shirt graphics based on user prompts.

* __Customizable Design Options:__ 
Choose between various design tabs such as color picking, file uploading, and AI-generated designs.

* __Responsive Animations:__ 
Smooth transitions and animations for UI elements using Framer Motion.

* __Live Previews:__ 
Immediate feedback on design adjustments with options to apply filters and decals.

* __Downloadable Designs:__ 
Users can download their customized T-shirt designs directly from the platform.

## Installation
To get the application running locally on your system, follow these steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Setup
1. __Clone the repository:__
    ```bash
    git clone https://github.com/roblebob/lab-project-t-shirt-designer

    cd lab-project-t-shirt-designer
    ```
2. __Install dependencies:__
    ```bash
    cd client
    npm install
    npm run dev

    cd ..
    cd server
    npm install
    npm start
    ```
3. __Setup Environment Variables:__
    Create a new file `.env` in the `server` directory and add the following environment variables:
    ```bash
    OPENAI_API_KEY=...
    ```
    where the key is your OpenAI API key.  https://platform.openai.com/api-keys

### Usage

* __Navigating the Interface:__ 
Start by selecting an editor tab to choose color options, upload image files, or generate designs using AI.

* __Applying Designs:__ 
Use the filter tabs to switch between logo designs and full-shirt textures.

* __Downloading Designs:__ 
Click the download button to save your customized T-shirt design as an image.

 