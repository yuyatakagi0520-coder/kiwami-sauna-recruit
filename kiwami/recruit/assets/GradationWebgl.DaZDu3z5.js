import{cl as v,C as l,aJ as c,au as m,m as f,ch as h}from"./BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js";import{B as g}from"./BasePageWebgl.4pZlS9W1.js";import{c as i}from"./Common.B66LcCm3.js";/* empty css                       */import"./Webgl.Vk8aYVlz.js";var p=`varying vec2 vUv;

void main() {
  vUv = uv;
  
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,S=`vec3 _mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 _mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 _permute(vec3 x) { return _mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(
     0.211324865405187,   
     0.366025403784439,   
    -0.577350269189626,   
     0.024390243902439    
  );

  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1  = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy  -= i1;

  i = _mod289(i);
  vec3 p = _permute(
    _permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;

  vec3 x  = 2.0 * fract(p * C.www) - 1.0;
  vec3 h  = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;
  g.x  = a0.x  * x0.x   + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;

  return 130.0 * dot(m, g);
}

uniform float uTime;
uniform float uScroll;         
uniform vec3  uColor0;         
uniform vec3  uColor1;         
uniform vec3  uColor2;         
uniform vec3  uColor3;         
uniform vec3  uColor4;         
uniform vec3  uColor5;         
uniform float uSpeed;          
uniform float uDriftAmp;       
uniform float uLayerWidth;     
uniform float uTilt;           
uniform float uNoiseScale;     
uniform float uWarpStrength;   
uniform float uLayerWarp;      
uniform float uRotation;       
uniform float uScrollStrength; 
uniform float uBrightness;     
uniform float uEdgeStrength;   

varying vec2 vUv;

float band(float pos, float center, float width) {
  float d = (pos - center) / max(width, 0.001);
  return exp(-d * d);
}

void main() {
  vec2 uv = vUv;
  float t  = uTime * uSpeed;

  
  float nx = snoise(uv * uNoiseScale + vec2(t * 0.20, t * 0.10)) * uWarpStrength * 0.4;
  float ny = snoise(uv * uNoiseScale + vec2(t * 0.15, t * 0.25) + vec2(3.7, 1.3)) * uWarpStrength;
  vec2 uvW = uv + vec2(nx, ny);

  
  float da = uDriftAmp;
  float y0 = 0.08 + sin(t * 0.41          ) * da;
  float y1 = 0.26 + sin(t * 0.35 + 1.26   ) * da;
  float y2 = 0.50 + sin(t * 0.29 + 2.51   ) * da;
  float y3 = 0.72 + sin(t * 0.24 + 3.77   ) * da;
  float y4 = 0.90 + sin(t * 0.19 + 5.03   ) * da;

  
  float cosR = cos(uRotation);
  float sinR = sin(uRotation);
  vec2 centered = uvW - 0.5;
  vec2 uvR = vec2(
    cosR * centered.x - sinR * centered.y,
    sinR * centered.x + cosR * centered.y
  ) + 0.5;

  
  float sc = uScroll * uScrollStrength;
  vec2 uvRS = vec2(uvR.x, uvR.y - sc);

  
  float lw = uLayerWarp;
  float scale = uNoiseScale * 0.7;
  float n0 = snoise(uvRS * scale + vec2(t * 0.18, t * 0.08) + vec2(0.0, 0.0)) * lw;
  float n1 = snoise(uvRS * scale + vec2(t * 0.15, t * 0.12) + vec2(2.1, 3.7)) * lw;
  float n2 = snoise(uvRS * scale + vec2(t * 0.21, t * 0.07) + vec2(5.2, 1.3)) * lw;
  float n3 = snoise(uvRS * scale + vec2(t * 0.13, t * 0.19) + vec2(7.4, 8.6)) * lw;
  float n4 = snoise(uvRS * scale + vec2(t * 0.17, t * 0.11) + vec2(9.1, 4.2)) * lw;

  
  float l0 = band(uvRS.y + n0, y0 + uvRS.x * uTilt * 0.80, uLayerWidth * 1.00);
  float l1 = band(uvRS.y + n1, y1 - uvRS.x * uTilt * 1.00, uLayerWidth * 1.10);
  float l2 = band(uvRS.y + n2, y2 + uvRS.x * uTilt * 0.60, uLayerWidth * 0.95);
  float l3 = band(uvRS.y + n3, y3 - uvRS.x * uTilt * 0.75, uLayerWidth * 1.05);
  float l4 = band(uvRS.y + n4, y4 + uvRS.x * uTilt * 0.90, uLayerWidth * 1.15);

  
  
  float total = l0 + l1 + l2 + l3 + l4;
  vec3 layerCol = uColor1 * l0 + uColor2 * l1 + uColor3 * l2
                + uColor4 * l3 + uColor5 * l4;
  vec3 blended = layerCol / max(total, 0.001);
  float coverage = clamp(total, 0.0, 1.0);
  vec3 col = mix(uColor0, blended, coverage);
  
  float overlapBoost = max(total - 0.8, 0.0) * 0.35;
  col = col * (1.0 + overlapBoost);

  
  
  
  float edge = (l0 * (1.0 - l0)
              + l1 * (1.0 - l1)
              + l2 * (1.0 - l2)
              + l3 * (1.0 - l3)
              + l4 * (1.0 - l4)) * 4.0;
  col += vec3(0.6, 0.9, 1.0) * edge * uEdgeStrength;

  
  col = 1.0 - exp(-col * uBrightness);

  gl_FragColor = vec4(col, 1.0);
}`;const y={color0:"#48d59f",color1:"#7af0cd",color2:"#48e57f",color3:"#7aff9c",color4:"#36c99d",color5:"#2df08c",speed:.6,driftAmp:.09,layerWidth:.18,tilt:.14,rotationDeg:-143,noiseScale:1.2,warpStrength:.4,layerWarp:.2,edgeOn:!1,edgeStrength:.27,scrollStrength:.08,brightness:2};class b extends g{mesh=null;material=null;uniforms;params={...y};gui=null;timer=new v;constructor(t){super(t);const n=this.params;this.uniforms={uTime:{value:0},uScroll:{value:0},uColor0:{value:new l(n.color0)},uColor1:{value:new l(n.color1)},uColor2:{value:new l(n.color2)},uColor3:{value:new l(n.color3)},uColor4:{value:new l(n.color4)},uColor5:{value:new l(n.color5)},uSpeed:{value:n.speed},uDriftAmp:{value:n.driftAmp},uLayerWidth:{value:n.layerWidth},uTilt:{value:n.tilt},uNoiseScale:{value:n.noiseScale},uWarpStrength:{value:n.warpStrength},uLayerWarp:{value:n.layerWarp},uRotation:{value:n.rotationDeg*Math.PI/180},uEdgeStrength:{value:n.edgeOn?n.edgeStrength:0},uScrollStrength:{value:n.scrollStrength},uBrightness:{value:n.brightness}}}enter(){super.enter(),this._buildMesh(),this._buildGui(),this.timer.reset()}leave(){this._destroyGui(),this._destroyMesh(),super.leave()}onRaf(t){super.onRaf(t),this.timer.update(),this.uniforms.uTime.value=this.timer.getElapsed(),this.uniforms.uScroll.value=i.windowHeight>0?i.scrollY/i.windowHeight:0}onResize(){super.onResize()}_buildMesh(){const t=new c(2,2);this.material=new m({vertexShader:p,fragmentShader:S,uniforms:this.uniforms,depthWrite:!1,depthTest:!1}),this.mesh=new f(t,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.stage.scene&&this.stage.scene.add(this.mesh),i.log("[GradationWebgl] mesh built")}_destroyMesh(){this.mesh&&(this.stage.scene&&this.stage.scene.remove(this.mesh),this.material?.dispose(),this.mesh.geometry.dispose(),this.mesh=null,this.material=null)}async _buildGui(){if(!i.debug)return;const[{default:t},{addGuiPreset:n}]=await Promise.all([h(()=>import("./lil-gui.esm.DKPuquql.js"),[]),h(()=>import("./GuiPreset.Bdc6o5SL.js"),[])]),o=this.params;this.gui=new t({title:"Gradation"}),this.gui.close();const r=this.gui.addFolder("Colors");r.addColor(o,"color0").name("背景").onChange(e=>{this.uniforms.uColor0.value.set(e)}),r.addColor(o,"color1").name("層 1").onChange(e=>{this.uniforms.uColor1.value.set(e)}),r.addColor(o,"color2").name("層 2").onChange(e=>{this.uniforms.uColor2.value.set(e)}),r.addColor(o,"color3").name("層 3").onChange(e=>{this.uniforms.uColor3.value.set(e)}),r.addColor(o,"color4").name("層 4").onChange(e=>{this.uniforms.uColor4.value.set(e)}),r.addColor(o,"color5").name("層 5（主役）").onChange(e=>{this.uniforms.uColor5.value.set(e)});const a=this.gui.addFolder("Layers");a.add(o,"speed",0,1,.01).onChange(e=>{this.uniforms.uSpeed.value=e}),a.add(o,"driftAmp",0,.5,.01).onChange(e=>{this.uniforms.uDriftAmp.value=e}),a.add(o,"layerWidth",.05,.6,.01).onChange(e=>{this.uniforms.uLayerWidth.value=e}),a.add(o,"tilt",0,.5,.01).onChange(e=>{this.uniforms.uTilt.value=e}),a.add(o,"rotationDeg",-180,180,1).name("rotation (deg)").onChange(e=>{this.uniforms.uRotation.value=e*Math.PI/180});const u=this.gui.addFolder("Warp");u.add(o,"noiseScale",.1,5,.05).onChange(e=>{this.uniforms.uNoiseScale.value=e}),u.add(o,"warpStrength",0,.5,.01).onChange(e=>{this.uniforms.uWarpStrength.value=e}),u.add(o,"layerWarp",0,.3,.005).onChange(e=>{this.uniforms.uLayerWarp.value=e});const s=this.gui.addFolder("Edge");s.add(o,"edgeOn").name("on / off").onChange(()=>{this.uniforms.uEdgeStrength.value=o.edgeOn?o.edgeStrength:0}),s.add(o,"edgeStrength",0,.5,.01).name("strength").onChange(e=>{o.edgeOn&&(this.uniforms.uEdgeStrength.value=e)});const d=this.gui.addFolder("Output");d.add(o,"scrollStrength",0,2,.01).onChange(e=>{this.uniforms.uScrollStrength.value=e}),d.add(o,"brightness",0,3,.05).onChange(e=>{this.uniforms.uBrightness.value=e}),n(this.gui,this.params,{onImport:()=>{const e=this.params;this.uniforms.uColor0.value.set(e.color0),this.uniforms.uColor1.value.set(e.color1),this.uniforms.uColor2.value.set(e.color2),this.uniforms.uColor3.value.set(e.color3),this.uniforms.uColor4.value.set(e.color4),this.uniforms.uColor5.value.set(e.color5),this.uniforms.uSpeed.value=e.speed,this.uniforms.uDriftAmp.value=e.driftAmp,this.uniforms.uLayerWidth.value=e.layerWidth,this.uniforms.uTilt.value=e.tilt,this.uniforms.uRotation.value=e.rotationDeg*Math.PI/180,this.uniforms.uNoiseScale.value=e.noiseScale,this.uniforms.uWarpStrength.value=e.warpStrength,this.uniforms.uLayerWarp.value=e.layerWarp,this.uniforms.uEdgeStrength.value=e.edgeOn?e.edgeStrength:0,this.uniforms.uScrollStrength.value=e.scrollStrength,this.uniforms.uBrightness.value=e.brightness}})}_destroyGui(){this.gui?.destroy(),this.gui=null}}export{b as GradationWebgl};
