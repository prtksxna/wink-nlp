var fs=require("fs"),transformers=require("./cer-transformers.js"),loadNERModel=function(){var a=fs.readFileSync(require.resolve("./languages/cur/models/eng-cer-meta-model.json"),"utf8");return{machines:a,transformers:transformers}};module.exports=loadNERModel;
