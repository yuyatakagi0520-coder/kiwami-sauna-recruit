import"./Webgl.Vk8aYVlz.js";import{k as x,D as p,m as T,i as y,aJ as b}from"./BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js";import{c as v}from"./Common.B66LcCm3.js";var R=`uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform vec2 uMeshResolution;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;

mat2 scale2d_mat(vec2 _scale) {
    return mat2(_scale.x, 0., 0., _scale.y);
}

void main()  {
  vUv = uv;
  vec3 pos = position;

  pos.xy *= scale2d_mat(uMeshResolution);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`,_=`precision highp float;

varying vec2 vUv;
const float PI = 3.14159265;

void main() {
    gl_FragColor = vec4( vec3(1.,0.,0.), 1. );
}`;const n={vs:R,fs:_,materialOption:{depthTest:!1,transparent:!0,alphaTest:.5,wireframe:!1}};class M{vs;fs;mesh;material;geometry;materialOption;uniforms;isInView;constructor(e={}){this.vs=e.vs??n.vs,this.fs=e.fs??n.fs,this.mesh=null,this.material=e.material??null,this.geometry=e.geometry??null,this.materialOption={depthTest:e.materialOption?.depthTest??n.materialOption.depthTest,transparent:e.materialOption?.transparent??n.materialOption.transparent,alphaTest:e.materialOption?.alphaTest??n.materialOption.alphaTest,wireframe:e.materialOption?.wireframe??n.materialOption.wireframe},this.uniforms={uTime:{value:0},uOpacity:{value:0},uStageResolution:{value:{x:0,y:0}},uMeshResolution:{value:{x:1,y:1}}},this.isInView=!1}init(){this.material=new x({vertexShader:this.vs,fragmentShader:this.fs,...this.materialOption}),this.material.uniforms=this.uniforms,this.material.side=p,this.mesh=new T(this.geometry??new y,this.material)}destroy(){this.mesh&&(this.material&&this.material.dispose(),this.mesh.material&&this.mesh.material.dispose(),this.geometry&&this.geometry.dispose(),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh=null)}_setMeshSize(){}onResize(){this._setMeshSize()}onRaf(){}}var w=`attribute vec2 uv;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform vec2 uMeshResolution;
uniform vec2 uMeshOffset;
varying vec2 vUv;

mat2 scale2d_mat(vec2 _scale) {
    return mat2(_scale.x, 0., 0., _scale.y);
}

void main()  {
    vUv = uv;
    vec3 pos = position;
    pos.xy *= scale2d_mat(uMeshResolution);
    pos.xy += uMeshOffset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`,P=`precision highp float;

uniform vec2 uTextureResolution;
uniform vec2 uMeshResolution;

uniform sampler2D uTexture;

uniform float uProgress;

uniform float uParallaxRange;

uniform float uParallaxScale;

uniform float uRadius;

varying vec2 vUv;

vec2 coverUv(vec2 baseUv, vec2 size1, vec2 size2, vec2 origin) {
    vec2 ratio = vec2(
        min((size1.x / size1.y) / (size2.x / size2.y), 1.),
        min((size1.y / size1.x) / (size2.y / size2.x), 1.)
    );
    baseUv -= origin;
    baseUv *= ratio;
    baseUv += origin;
    return baseUv;
}
float roundedRectMask(vec2 uv, vec2 meshResolution, float radiusPx) {
    vec2 pixelPos = (uv - 0.5) * meshResolution;
    vec2 halfSize = meshResolution * 0.5;
    vec2 q = abs(pixelPos) - halfSize + radiusPx;
    float dist = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radiusPx;
    return 1.0 - smoothstep(-1.0, 1.0, dist);
}

void main() {
    vec2 uvTex = vUv;
    uvTex = coverUv(uvTex, uMeshResolution, uTextureResolution, vec2(.5));

    
    
    uvTex.y = (uvTex.y - 0.5) * (1.0 - abs(uParallaxRange)) + 0.5;

    
    uvTex = (uvTex - 0.5) / uParallaxScale + 0.5;

    
    uvTex.y += (uProgress - 0.5) * uParallaxRange;

    vec4 cTex = texture2D(uTexture, uvTex);

    float mask = roundedRectMask(vUv, uMeshResolution, uRadius);
    gl_FragColor = vec4(cTex.rgb, cTex.a * mask);
}`;class S extends M{instanceName;constructor(e={}){super({...e,vs:w,fs:P}),this.instanceName=e.instanceName??"thumbPlaneMesh",this.uniforms.uMeshOffset={value:{x:0,y:0}},this.uniforms.uTexture={value:null},this.uniforms.uTextureResolution={value:{x:1,y:1}},this.uniforms.uProgress={value:.5},this.uniforms.uParallaxRange={value:.15},this.uniforms.uParallaxScale={value:1},this.uniforms.uRadius={value:0}}setTexture(e){this.uniforms.uTexture.value=e;const t=e.image;this.uniforms.uTextureResolution.value.x=t?.width??1,this.uniforms.uTextureResolution.value.y=t?.height??1}}class q{stage;thumbs=[];hideThumbElements;constructor(e){this.stage=e.stage,this.hideThumbElements=e.hideThumbElements??!0}enter(){this._initThumbs()}leave(){this._destroyThumbs()}onRaf(e){this._syncThumbOffsets()}onResize(){this._cacheThumbRects(),this._syncThumbSizes()}_initThumbs(){Array.from(document.querySelectorAll("[data-gl-thumb]")).forEach((t,i)=>{const s=new S({instanceName:`thumb-${i}`,geometry:new b(1,1)});s.init(),s.mesh&&this.stage.scene&&this.stage.scene.add(s.mesh);const a=t.dataset.imgSrc;if(a){const l=v.webgl?.textureCache.get(a);l&&s.setTexture(l)}this.hideThumbElements&&(t.style.visibility="hidden");const r=parseFloat(t.dataset.glParallaxRange??"0.15"),o=parseFloat(t.dataset.glParallaxScale??"1.0"),u=parseFloat(t.dataset.glRadius??"0");s.uniforms.uParallaxRange.value=r,s.uniforms.uParallaxScale.value=o,s.uniforms.uRadius.value=u,this.thumbs.push({el:t,mesh:s,docLeft:0,docTop:0,width:0,height:0,scrollStart:0,scrollEnd:0,parallaxRange:r,scale:o,radius:u})}),this._cacheThumbRects(),this._syncThumbSizes(),this._syncThumbOffsets()}_destroyThumbs(){this.thumbs.forEach(({el:e,mesh:t})=>{t.mesh&&this.stage.scene&&this.stage.scene.remove(t.mesh),t.destroy(),this.hideThumbElements&&(e.style.visibility="")}),this.thumbs=[]}_cacheThumbRects(){const e=window.scrollX,t=window.scrollY,i=window.innerHeight;this.thumbs.forEach(s=>{const a=s.el.getBoundingClientRect();s.docLeft=a.left+e,s.docTop=a.top+t,s.width=a.width,s.height=a.height,s.scrollStart=s.docTop-i,s.scrollEnd=s.docTop+s.height})}_syncThumbSizes(){const{width:e,height:t}=this.stage.stageSize;this.thumbs.forEach(({mesh:i,width:s,height:a})=>{i.mesh&&(i.uniforms.uMeshResolution.value.x=s,i.uniforms.uMeshResolution.value.y=a,i.uniforms.uStageResolution.value.x=e,i.uniforms.uStageResolution.value.y=t)})}_syncThumbOffsets(){const{width:e,height:t}=this.stage.stageSize,i=v.scrollY;this.thumbs.forEach(s=>{const{mesh:a,docLeft:r,docTop:o,width:u,height:l,scrollStart:m,scrollEnd:f,parallaxRange:z,scale:O,radius:U}=s;if(!a.mesh)return;const d=o-i;a.uniforms.uMeshOffset.value.x=r+u/2-e/2,a.uniforms.uMeshOffset.value.y=-(d+l/2-t/2);const c=f-m,g=c>0?(i-m)/c:.5;a.uniforms.uProgress.value=Math.min(1,Math.max(0,g))})}}export{q as B};
