import React from 'react';
import ReactDOM from 'react-dom';

import {c, a,b} from './component/myName';

console.log(a);

const aac = require('../webpack.config');



ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById('root')
);

const obc = {
	a: 1,
	b: 2,
	c: 3
};

// let nameObj = name('ss');

// console.log( { ...obc, ...nameObj} );

// {a:1, b: 2, c:3, name: 'Sal'}

// my code
class Drap{
	constructor(id){
		this.box = document.getElementById(id);
		this.divX = 0;
		this.divY = 0;
		this.box.addEventListener("mousedown",(e) => {
			this.down(e);
		})
	}
	down(e){
		this.divX = e.clientX - this.box.offsetLeft;
		this.divY = e.clientY- this.box.offsetTop;
		var move = (e) => {
			this.move(e);
		}
		var up = (e)=>{
			this.up(e,move,up);
		}
		document.addEventListener("mousemove",move);
		document.addEventListener("mouseup",up)

	}
	move(e){
		this.box.style.left = e.clientX - this.divX +'px';
		this.box.style.top = e.clientY - this.divY +'px';
	}
	up(e,move,up){
		document.removeEventListener("mousemove",move);
		document.removeEventListener("mouseup",up);
	}
}


var d = new Drap("box");
// var d2 = new Drap("box2")
