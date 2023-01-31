// Generated by Selenium IDE
// New Relic Synthetics Formatter for Selenium IDE
// Feel free to explore, or check out the full documentation
// https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
// for details


  const assert = require("assert");
  const urlRequest = require("urllib").request;
  // Threshold for duration of entire script - fails test if script lasts longer than X (in ms)
  // Script-wide timeout for all wait and waitAndFind functions (in ms)
  var DefaultTimeout = 30000;
  // Change to any User Agent you want to use.
  // Leave as "default" or empty to use the Synthetics default.
  var UserAgent = "default";
  const By = $driver.By;
  const browser = $browser.manage();
  var vars = new Map();
  const logger = function({timeout:e=18e4,stepLogging:t=!1,insightsKey:n=""}){const r=Date.now();var s=0,o="",i=0,a=0;function l({step:e=0,msg:t="",duration:r=0,eventType:s="SyntheticsCustom",custom:o={}}){if(void 0===n||""==n)return;var i={method:"POST",headers:{"X-Insert-Key":n,"Content-Type":"application/json"},data:{eventType:s,step:e,message:t,duration:r,JOB_ID:$env.JOB_ID,MONITOR_ID:$env.MONITOR_ID,ACCOUNT_ID:$env.ACCOUNT_ID,LOCATION:$env.LOCATION,PROXY_HOST:$env.PROXY_HOST,PROXY_PORT:$env.PROXY_PORT},dataType:"text"};const a=`https://insights-collector.newrelic.com/v1/accounts/${$env.ACCOUNT_ID}/events`;i.data=Object.assign({},i.data,o),urlRequest(a,i)}function c(e,t,n=""){e>a&&0!=a&&_({testCase:n});let i=`Step ${e}: ${t} STARTED at ${s=Date.now()-r}ms. testCase=${n}`;console.log(i),o=t,a=e}function _({testCase:i=""}){var c=Date.now()-r,_=c-s;if(console.log(`Step ${a}: ${o} FINISHED. It took ${_}ms to complete. testCase=${i}`),t&&n.length>0?l({step:a,msg:o,duration:_,custom:{testCase:i}}):t&&$util.insights.set(`Step ${a}: ${o}`,_),e>0&&c>e)throw new Error("Script timed out. "+c+"ms is longer than script timeout threshold of "+e+"ms.")}return{logStep:function(e){c(i++,e)},log:c,getStep:function(){return i},end:_,endTestCase:function(e=""){var i=Date.now()-r-s;console.log(`Step ${a}: ${o} FINISHED. It took ${i}ms to complete.`),t&&n.length>0?l({step:a,msg:o,duration:i,custom:{testCase:e}}):t&&$util.insights.set(`Step ${a}: ${o}`,i),$util.insights.set("testCase",e),$util.insights.set("testCaseStatus","Pass"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:e,testCaseStatus:"Pass"}})},error:function(e,r=""){console.log(`Error in Step ${a}: ${o}`),$util.insights.set("errorStep",""+a),$util.insights.set("errorMsg",e.message),$util.insights.set("errorLineNumber",e.lineNumber),$util.insights.set("testCase",r),$util.insights.set("testCaseStatus","fail"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:r,testCaseStatus:"Fail"}})},postInsights:l}}({})
  $browser.getCapabilities().then(function () { })
  // Test Case: Sample Size for Proportions  
  .then(function (){
  	return Promise.resolve(true)
  
    .then( function(){return logger.log(1,"Open URL https://abtester.app/","Sample Size for Proportions"),$browser.get("https://abtester.app/").then(e=>e)})
    .then( function(){return logger.log(2,"Set Window Size Width=1440 Height=875","Sample Size for Proportions"),$browser.manage().window().setSize(1440,875).then(e=>e)})
    .then( function(){return logger.log(3,"Waiting 10 seconds to load the web app","Sample Size for Proportions"),$webDriver.sleep(20000)})
    .then( function(){return logger.log(4,"Switch to Frame Index 0","Sample Size for Proportions"),Promise.resolve($browser.switchTo().frame(0))})
    .then( function(){return logger.log(5,"Click By.css(\".st-bw\")","Sample Size for Proportions"),$browser.waitForAndFindElement(By.css(".st-bw"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(6,"Click By.css(\"#bui-8__anchor .css-8ojfln\")","Sample Size for Proportions"),$browser.waitForAndFindElement(By.css("#bui-8__anchor .css-8ojfln"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    // reusable RUN() scripts not supported
    .then( function(){return logger.log(7,"Click By.css(\".css-z2nz7u\")","Sample Size for Proportions"),$browser.waitForAndFindElement(By.css(".css-z2nz7u"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    // reusable RUN() scripts not supported
  	.then(function() {
  		logger.endTestCase("Sample Size for Proportions");
  	}, function(err) {
  		logger.error (err, "Sample Size for Proportions");
  		throw(err);
  	});
  
  })
