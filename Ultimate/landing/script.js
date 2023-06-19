var appName = 'Ultimate';
var storeUrl = '';
var date = '2023-04-23';
var linkBuy = 'https://1.envato.market/Mmmdbn';
var linkFacebook = 'https://www.facebook.com/izidev2023';
var linkDesign = 'https://no13design.webflow.io/work/project-1';
var linkBannerLeftSide = 'https://imp.i246982.net/c/370045/1446118/11346';
var linkBannerRightSide = 'https://namecheap.pxf.io/c/370045/1187122/5618';
var linkBannerFooter = 'https://okx.sjv.io/c/370045/1414645/15383';

function onIndexLoad() {
  document.title = appName;
  document.getElementById('storeUrl').href = storeUrl;
}

function onLinkBuyLoad() {
  document.getElementById('link-buy').href = linkBuy;
}

function onLinkFacebook() {
  document.getElementById('link-facebook').href = linkFacebook;
}

function onLinkDesign() {
  document.getElementById('link-design').href = linkDesign;
}

function onBannerSide() {
  document.getElementById('link-banner-side').href = linkBannerLeftSide;
}

function onBannerSideRight() {
  document.getElementById('link-banner-side-right').href = linkBannerRightSide;
}

function onBannerFooter() {
  document.getElementById('link-banner-footer').href = linkBannerFooter;
}

function onPolicyLoad() {
  document.title = appName + ' ' + 'Privacy Policy';
  getData();
}

function onTermLoad() {
  document.getElementById('appName2').innerHTML = appName;
  document.title = appName + ' ' + 'Terms and Conditions';
  getData();
}

function getData() {
  document.getElementById('appName').innerHTML = appName;
  document.getElementById('date').innerHTML = date;
}
