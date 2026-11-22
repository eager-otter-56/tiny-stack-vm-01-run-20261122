import{mkdirSync as K,readdirSync as L,readFileSync as R,writeFileSync as S}from'node:fs';
let H='0Aq46:;?0000000099999995999599909990000000000000PTTP00000000000058000000000000004414';
function run(p,q){
let A=new Int32Array(576),O='',n=p.length,s=0,c=0,i=0,pc=0,t=0;
try{for(;;){
if(t++==1e6)throw 10;
if(pc<0|pc>=n)throw 9;
let op=p[pc],v=H.charCodeAt(op)-48,x=pc+1+(v>>4),d=s-((v>>2)&3);
if(x-1>=n)throw 9;
if(d<0|d+(v&3)>256)throw d<0?2:3;
pc=x;
if(op==0)throw 0;
else if(op==1)A[s++]=p[x-1]<<24>>24;
else if(op==2)A[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;
else if(op==3)s--;
else if(op==4)A[s]=A[s-1],s++;
else if(op==5)[A[s-1],A[s-2]]=[A[s-2],A[s-1]];
else if(op==6)A[s]=A[s-2],s++;
else if(op==7)[A[s-3],A[s-2],A[s-1]]=[A[s-2],A[s-1],A[s-3]];
else if(op==23)A[s-1]=-A[s-1]|0;
else if(op==27)A[s-1]=~A[s-1];
else if(op>47&op<51){let r=p[x-2]|p[x-1]<<8<<16>>16;if(op==48||(op==49?A[--s]==0:A[--s]!=0))pc=x+r}
else if(op==51){if(c==64)throw 7;A[256+c++]=x;pc=p[x-2]|p[x-1]<<8}
else if(op==52){if(!c)throw 8;pc=A[256+--c]}
else if(op==64){let a=A[s-1];if(a<0|a>255)throw 6;A[s-1]=A[320+a]}
else if(op==65){if(A[s-1]<0|A[s-1]>255)throw 6;A[320+A[s-1]]=A[s-2];s-=2}
else if(op==80){if(O.length+(''+A[s-1]).length>65536)throw 11;O+=''+A[--s]}
else if(op==81){if(O.length>65535)throw 11;O+=String.fromCharCode(A[--s]&255)}
else if(op==82)A[s++]=i<q.length?q[i++]:-1;
else if(op==83)throw A[--s]&255;
else{let b=A[s-1],a=A[s-2],r,u=a>>>0,w=b>>>0;if(op<16|op>34|op==31)throw 5;if(!b&op>18&op<23)throw 4;
r=op==16?a+b|0:op==17?a-b|0:op==18?Math.imul(a,b):op==19?a/b|0:op==20?a%b|0:op==21?u/w|0:op==22?u%w|0:op==24?a&b:op==25?a|b:op==26?a^b:op==28?a<<b:op==29?a>>b:op==30?a>>>b|0:op==32?+(a==b):op==33?+(a<b):+(u<w);
s-=2;A[s++]=r}
}}catch(e){return[O,+e]}
}
let E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',W=E.MAKEFUN_OUTPUT_DIR||'/output';
for(let d of L(I)){let g=I+'/'+d,r=run(R(g+'/program.bin'),R(g+'/input.bin'));K(W+'/'+d,{recursive:true});S(W+'/'+d+'/stdout.bin',r[0],'latin1');S(W+'/'+d+'/exit.txt',''+r[1])}
