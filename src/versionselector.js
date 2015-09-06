var React=require("react");
var VersionSelector=React.createClass({
	select:function(e){
			this.props.onChange(e.target.dataset.value,this.props.name);
	}
	,renderButton:function(item){
		var checked=item==this.props.defaultValue;
		return <label><input data-value={item} onClick={this.select} checked={checked}
				name={this.props.name} type="radio">{item}</input></label>
	}
	,render:function(){
		return <span>
			{this.props.versions.map(this.renderButton)}
		</span>
	}
});
module.exports=VersionSelector;