var React=require("react");
var E=React.createElement;
var s56_11=require("./s56-11.json");
var versions=Object.keys(s56_11)
var Diff=require("diff");
var VersionSelector=require("./versionselector");

var normalize=function(s){
  var o="";
  s=s.replace(/ṁ/g,"ṃ").replace(/—/g,"-").replace(/­/g,"-").toLowerCase();
  return s.replace(/[^abcdefghijklmnopqrstuvwxyzāīūṅṃñṭḍṇḷ]/g," ");//there is 00AD at the last
};

var maincomponent = React.createClass({
  getInitialState:function() {
    return {from:"bjt",to:"vri",charmode:false};
  }
  ,setcomparemode:function(e) {
      this.setState({charmode:e.target.checked});
  }
  ,renderDiff:function(diff){
    var html=[];
    for (var j=0;j<diff.length;j++) {
      var d=diff[j];
      if (d.added) {
        html.push(<span className="ins">{d.value}</span>);
      } else if (d.removed) {
        html.push(<span className="del">{d.value}</span>);
      } else html.push(d.value)
    }
    return html;
  }
  ,renderText:function(){
    var o=[];
    for (var i in s56_11[this.state.from]) {
      var from=normalize(s56_11[this.state.from][i]).trim();
      var to=normalize(s56_11[this.state.to][i]).trim();
      var diff= this.state.charmode?Diff.diffChars(from,to):Diff.diffWords(from,to);
      o.push(E("span",{key:i},<br/>,i,")",this.renderDiff(diff)));
    }
    return o;
  }
  ,selectversion:function(value,name){
    var obj={};
    obj[name]=value;
    this.setState(obj);
  }
  ,render: function() {
    return <div>
    <h1>Dhammacakkappavattanasuttaṃ S56-11</h1>
        Compare From:<VersionSelector onChange={this.selectversion} defaultValue={this.state.from} name="from" versions={versions}/>
        , Compare to:<VersionSelector onChange={this.selectversion} defaultValue={this.state.to} name="to" versions={versions}/>
        <label><input type="checkbox" onClick={this.setcomparemode}>Char Mode</input></label>
        <br/>
      {this.renderText()}
    </div>;
  }
});
module.exports=maincomponent;