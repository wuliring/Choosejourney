<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/1651790/224081217-86521beb-1b69-4071-b195-f2ce0bb33db7.png">
  <img alt="NebulaGraph Data Intelligence Suite(ngdi)" src="https://user-images.githubusercontent.com/1651790/224081979-d3aa7867-94a6-4a85-a5d7-603e02360cee.png">
</picture>

<p align="center">
    <br> English | <a href="README-CN.md">中文</a>
</p>
<p align="center">
    <em>AI empowers a general-purpose prompt assistant, systematically generating and selecting prompts on AI generation platforms such as Midjourney, Suno, ComfyUI, and others for images, music, documents, and more.</em>
</p>

<p align="center">

  <a href="https://chrome.google.com/webstore/detail/openai-translator/ogjibjphoadhljaoicdnjnmgokohngcc" target="_blank">
    <img alt="Chrome" src="https://img.shields.io/chrome-web-store/stars/ogjibjphoadhljaoicdnjnmgokohngcc?color=blue&label=Chrome&style=flat-square&logo=google-chrome&logoColor=white" />
  </a>

</p>

# 为什么造这个轮子

I have developed a [Bob](https://bobtranslate.com/) [plugin](https://github.com/yetone/bob-plugin-openai-translator) that utilizes ChatGPT API to provide global word translation on macOS. However, since not all users have access to macOS to benefit from the plugin, I have created this project!

# 有哪些功能

What began as a Chrome extension has now evolved into a multi-platform desktop app that I am currently developing.

<p align="center">
  <img width="560" src="https://user-images.githubusercontent.com/1206493/223899374-ff386436-63b8-4618-afdd-fed2e6b48d56.png" />
</p>

# 怎么安装

1. Visit your Browser Extension Store to install this plugin:

   <p align="center">
     <a target="_blank" href="https://chrome.google.com/webstore/detail/openai-translator/ogjibjphoadhljaoicdnjnmgokohngcc">
       <img src="https://img.shields.io/chrome-web-store/v/ogjibjphoadhljaoicdnjnmgokohngcc?label=Chrome%20Web%20Store&style=for-the-badge&color=blue&logo=google-chrome&logoColor=white" />
     </a>
     <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/openai-translator/">
       <img src="https://img.shields.io/amo/v/openai-translator?label=Firefox%20Add-on&style=for-the-badge&color=orange&logo=firefox&logoColor=white" />
     </a>
   </p>

2. Click on the OpenAI Translator icon in the browser plugin list, and enter the obtained API KEY into the configuration interface that pops up from this plugin.

   <p align="center">
     <img width="600" src="https://user-images.githubusercontent.com/1206493/222958165-159719b4-28a5-44a4-b700-567786df7f03.png" />
   </p>

3. Refresh the page in the browser to enjoy the smooth translation experience 🎉!

# 怎么使用

<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/1206493/223200182-6a1d2a02-3fe0-4723-bdae-99d8b7212a33.gif" />
</p>

# 需要准备些什么

- (required) Apply for an OpenAI API key [here](https://platform.openai.com/account/api-keys) or [Azure OpenAI Service API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/chatgpt-quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint)
- (optional) If you cannot access OpenAI, you can use the OpenAI API Proxy.

# License

[LICENSE](./LICENSE)
