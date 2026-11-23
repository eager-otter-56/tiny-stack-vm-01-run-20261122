import{mkdirSync as K,readdirSync as L,readFileSync as R,writeFileSync as S}from'node:fs';
let H='0Aq46:;?0000000099999995999599909990000000000000PTTP00000000000058000000000000004414';
function run(p,q){
let A=new Int32Array(576),O='',s=0,c=0,i=0,pc=0,t=0;
try{for(;;){
if(t++==1e6)throw 10;
let op=p[pc],v=H.charCodeAt(op)-48,x=pc+1+(v>>4),d=s-(v>>2&3);
if(pc<0|x-1>=p.length)throw 9;
if(d<0|d+(v&3)>256)throw d<0?2:3;
pc=x;
if(op==1)A[d]=p[x-1]<<24>>24;
else if(op==2)A[d]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;
else if(op==3);
else if(op==4)A[d+1]=A[d];
else if(op==5)[A[d],A[d+1]]=[A[d+1],A[d]];
else if(op==6)A[d+2]=A[d];
else if(op==7)[A[d],A[d+1],A[d+2]]=[A[d+1],A[d+2],A[d]];
else if(op>47&op<51){let r=p[x-2]|p[x-1]<<8<<16>>16;if(op<49||(op<50?!A[d]:!!A[d]))pc=x+r}
else if(op==51){if(c==64)throw 7;A[256+c++]=x;pc=p[x-2]|p[x-1]<<8}
else if(op==52){if(!c)throw 8;pc=A[256+--c]}
else if(op>63&op<66){let a=A[d+op-64];if(a<0|a>255)throw 6;op<65?A[d]=A[320+a]:A[320+a]=A[d]}
else if(op>79&op<82){let y=op<81?''+A[d]:String.fromCharCode(A[d]&255);if(O.length+y.length>65536)throw 11;O+=y}
else if(op==82)A[d]=q[i++]??-1;
else if(op==83)throw A[d]&255;
else if(op>15&op<35&op!=31){let b=A[d+1],a=A[d],r,u=a>>>0,w=b>>>0;if(!b&op>18&op<23)throw 4;r=op==23?-a|0:op==27?~a:op==16?a+b:op==17?a-b:op==18?Math.imul(a,b):op==19?a/b:op==20?a%b:op==21?u/w:op==22?u%w:op==24?a&b:op==25?a|b:op==26?a^b:op==28?a<<b:op==29?a>>b:op==30?a>>>b:op==32?a==b:op==33?a<b:u<w;A[d]=r}
else throw op?5:0;
s=d+(v&3);
}}catch(e){return[O,e]}
}
let{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:W='/output'}=process.env;
for(let d of L(I)){let g=I+'/'+d,r=run(R(g+'/program.bin'),R(g+'/input.bin'));K(W+'/'+d,{recursive:!0});S(W+'/'+d+'/stdout.bin',r[0],'latin1');S(W+'/'+d+'/exit.txt',''+r[1])}
