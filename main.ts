import{mkdirSync as K,readdirSync as L,readFileSync as R,writeFileSync as S}from'node:fs';
function run(p,q){
let A=new Int32Array(576),O='',s=0,c=0,i=0,pc=0,t=0;
try{for(;;){
if(++t>1e6)throw 10;
let op=p[pc],v='0Aq46:;?0000000099999995999599909990000000000000PTTP00000000000058000000000000004414'.charCodeAt(op)-48,x=pc+1+(v>>4),d=s-(v>>2&3);
if(pc<0|x>p.length)throw 9;
if(d<0|(s=d+(v&3))>256)throw d<0?2:3;
pc=x;
if(op>0&op<3)A[d]=op<2?p[x-1]<<24>>24:p.readInt32LE(x-4);
else if(op==3);
else if(op==4|op==6)A[d+(op>>1)-1]=A[d];
else if(op==5)[A[d],A[d+1]]=[A[d+1],A[d]];
else if(op==7)[A[d],A[d+1],A[d+2]]=[A[d+1],A[d+2],A[d]];
else if(op>47&op<51){let r=p.readInt16LE(x-2);if(op<49||(op<50?!A[d]:A[d]))pc=x+r}
else if(op==51){if(c==64)throw 7;A[256+c++]=x;pc=p[x-2]|p[x-1]<<8}
else if(op==52){if(!c)throw 8;pc=A[256+--c]}
else if(op>63&op<66){let a=A[d+op%2];if(a>>>0>255)throw 6;op<65?A[d]=A[320+a]:A[320+a]=A[d]}
else if(op>79&op<82){let y=op<81?''+A[d]:String.fromCharCode(A[d]&255);if(O.length+y.length>65536)throw 11;O+=y}
else if(op==82)A[d]=q[i++]??-1;
else if(op==83)throw A[d]&255;
else if(op>15&op<35&op!=31){let b=A[d+1],a=A[d],u=a>>>0,w=b>>>0;if(!b&op>18&op<23)throw 4;A[d]=[a+b,a-b,Math.imul(a,b),a/b,a%b,u/w,u%w,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,0,a==b,a<b,u<w][op-16]}
else throw op?5:0;
}}catch(e){return[O,e]}
}
let{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:W='/output'}=process.env;
for(let d of L(I)){let g=I+'/'+d,[o,e]=run(R(g+'/program.bin'),R(g+'/input.bin'));K(W+'/'+d,{recursive:!0});S(W+'/'+d+'/stdout.bin',o,'latin1');S(W+'/'+d+'/exit.txt',''+e)}
