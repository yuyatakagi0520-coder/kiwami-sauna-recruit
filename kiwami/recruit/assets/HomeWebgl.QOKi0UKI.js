const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeWebglGui.BDPE8aNV.js","assets/lil-gui.esm.DKPuquql.js","assets/GuiPreset.Bdc6o5SL.js","assets/BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js","assets/Common.B66LcCm3.js","assets/index.Z_5btCb6.css","assets/BasePageWebgl.4pZlS9W1.js","assets/Webgl.Vk8aYVlz.js"])))=>i.map(i=>d[i]);
import{C as g,V as y,m as j,O as ce,i as ee,j as oe,au as P,bG as k,o as S,d as N,H as z,ay as me,cl as ge,bE as Q,c6 as pe,ah as ie,k as Se,f as xe,n as _e,bW as be,bV as we,bU as ye,bT as de,bS as Me,bR as Ce,bQ as Te,I as se,cg as fe,aJ as ve,cm as Pe,N as Ae,cn as De,co as ae,cp as T,cq as W,av as B,cr as ne,cs as Re,ct as We,cu as E,D as re,cv as Be,ch as Fe}from"./BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js";import{B as Ne}from"./BasePageWebgl.4pZlS9W1.js";import{c as _}from"./Common.B66LcCm3.js";import"./Webgl.Vk8aYVlz.js";var Ie=`vec3 _mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
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
uniform float uSpeed;
uniform float uScrollStrength;
uniform float uScrollWarpAmp;
uniform vec2 uResolution;
uniform vec2 uLogoExtent;  

uniform float uMotionWaveSpeed;
uniform float uMotionWaveFreq;
uniform float uMotionWaveAmp;

uniform float uFlowNoiseScale;
uniform float uFlowNoiseSpeed;
uniform float uFlowNoiseAmp;

uniform float uWaveProgress;
uniform float uWaveNoiseScale;
uniform float uWaveNoiseSpeed;
uniform float uWaveNoiseAmp;

uniform float uParticleWaveWidth;   
uniform float uParticleWaveAmp;     
uniform float uParticleWaveBounce;  

uniform float uMorphT;  

uniform float uDriftAmp;

attribute float aSeed;
attribute float aSize;
attribute vec3 aColor;
attribute vec3 aPositionFrom;  

varying vec3  vColor;
varying float vSeed;
varying float vSize;
varying vec3  vPos;
varying vec2  vLogoUV;

void main() {
  vColor = aColor;
  vSeed  = aSeed;
  vSize  = aSize;

  
  vec3 pos = mix(aPositionFrom, position, uMorphT);

  
  float t = uTime * uSpeed;
  float s = aSeed * 6.2832;

  pos.x += (sin(t * 0.70 + s)         * 18.0
          + sin(t * 0.28 + s * 1.31) * 28.0) * uDriftAmp;
  pos.y += (cos(t * 0.55 + s * 0.81)  * 14.0
          + cos(t * 0.38 + s * 1.73) * 20.0) * uDriftAmp;
  pos.z += sin(t * 0.32 + s * 1.13)  *  9.0  * uDriftAmp;

  
  float ft = uTime * uFlowNoiseSpeed;
  float fs = uFlowNoiseScale;
  float fx = snoise(vec2(pos.x * fs + ft,        pos.y * fs * 0.7));
  float fy = snoise(vec2(pos.y * fs + ft * 0.8,  pos.z * fs * 0.7));
  float fz = snoise(vec2(pos.z * fs + ft * 0.6,  pos.x * fs * 0.7));
  pos += vec3(fx, fy, fz) * uFlowNoiseAmp;

  
  float mwDist = length(pos.xy);
  vec2  mwDir  = pos.xy / max(mwDist, 0.001);
  float pulse  = sin(mwDist * uMotionWaveFreq - uTime * uMotionWaveSpeed) * uMotionWaveAmp;
  pos.xy += mwDir * pulse;

  
  
  vec4 preSplashMvPos = modelViewMatrix * vec4(pos, 1.0);
  vec4 centerMvPos    = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec2 relViewXY      = preSplashMvPos.xy - centerMvPos.xy;

  
  vPos = vec3(relViewXY, 0.0);

  
  
  
  
  
  float splashNoise = snoise(pos.xy * uWaveNoiseScale + uTime * uWaveNoiseSpeed);
  float splashDist  = length(relViewXY) + splashNoise * uWaveNoiseAmp;
  float splashDff   = splashDist - uWaveProgress;
  float splashT     = splashDff / max(uParticleWaveWidth, 1.0);

  
  float splash = splashT >= 0.0
    ? exp(-splashT * splashT * 1.8)
    : exp(splashT * 2.5) * cos(splashT * uParticleWaveBounce);

  splash *= uParticleWaveAmp;

  
  vec2 splashDir = pos.xy / max(length(pos.xy), 0.001);
  pos.xy += splashDir * splash;
  pos.z  += splash * 0.35;

  
  
  
  vLogoUV = uLogoExtent.x > 0.001
    ? vec2(position.x / (2.0 * uLogoExtent.x) + 0.5,
          -position.y / (2.0 * uLogoExtent.y) + 0.5)
    : vec2(0.5);

  
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

  
  mvPos.y += uScroll * uScrollStrength;

  
  float swDist = length(mvPos.xy);
  vec2  swDir  = mvPos.xy / max(swDist, 0.001);
  mvPos.xy += swDir * sin(swDist * uMotionWaveFreq) * uScroll * uScrollWarpAmp;

  gl_Position = projectionMatrix * mvPos;

  float depthZ = max(-mvPos.z, 0.1);
  gl_PointSize = aSize * (uResolution.y * 0.5) / depthZ;
  gl_PointSize = clamp(gl_PointSize, 0.5, 80.0);
}`,Oe=`vec3 _mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
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
uniform float uEmissive;

uniform sampler2D uLogoTex;
uniform float uBlendT;

uniform float uTwinkleSpeed;
uniform float uTwinkleIntensity;

uniform float uDimAmount;  
uniform float uDimSpeed;   
uniform float uDimDuty;    

uniform float uCrossFade;

uniform float uParticleOpacity;

uniform float uFlareStrength;
uniform float uFlareSharpness;
uniform float uFlareMinSize;

uniform float uColorWaveMix;
uniform float uCurrentGroup;
uniform float uWaveProgress;
uniform float uWaveBlendWidth;
uniform float uWaveEdgeBloom;

uniform float uWaveNoiseScale;
uniform float uWaveNoiseSpeed;
uniform float uWaveNoiseAmp;

uniform float uBeadStyle;

uniform vec3  uWaveColors[16];

varying vec3  vColor;
varying float vSeed;
varying float vSize;
varying vec3  vPos;
varying vec2  vLogoUV;

float cubicInOut(float t) {
  t = clamp(t, 0.0, 1.0);
  return t < 0.5
    ? 4.0 * t * t * t
    : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

vec3 groupColor(float g) {
  int base   = int(mod(g, 4.0)) * 4;
  int subIdx = clamp(int(floor(vSeed * 4.0)), 0, 3);
  float bSeed = fract(vSeed * 17.3 + 0.5);
  float br    = 0.8 + bSeed * 0.45;
  return uWaveColors[base + subIdx] * br;
}

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d  = length(uv);

  
  
  vec4 logoSample = vec4(0.0);
  if (uBlendT > 0.0) {
    logoSample = texture2D(uLogoTex, clamp(vLogoUV, 0.0, 1.0));
  }

  
  
  float glowEdge = mix(0.5, 0.18, uBlendT * logoSample.a);
  float glow = pow(1.0 - smoothstep(0.0, glowEdge, d), 1.6);

  
  float tw      = uTime * uTwinkleSpeed + vSeed * 17.3;
  float spike   = pow(abs(sin(tw * 2.3 + vSeed * 3.7)), 10.0);
  float breathe = abs(sin(tw * 0.38)) * 0.35;
  float twinkle = mix(1.0, 0.25 + spike + breathe, uTwinkleIntensity);

  
  
  
  
  float dimSeed   = fract(vSeed * 53.7);
  float dimSpeedJ = uDimSpeed * (0.7 + dimSeed * 0.6);  
  float dimT      = uTime * dimSpeedJ + dimSeed * 31.3;
  float dimWave   = 0.5 + 0.5 * sin(dimT * 6.2832);     
  float duty      = clamp(uDimDuty, 0.0, 1.0);
  float dimEdge   = 0.15;                               
  float dimPulse  = smoothstep(1.0 - duty - dimEdge, 1.0 - duty + dimEdge, dimWave);
  float dimMul    = mix(1.0, 1.0 - uDimAmount, dimPulse);

  
  float isFlare = step(uFlareMinSize, vSize);
  float armH    = exp(-abs(uv.y) * uFlareSharpness) * exp(-abs(uv.x) * 3.0);
  float armV    = exp(-abs(uv.x) * uFlareSharpness) * exp(-abs(uv.y) * 3.0);
  float flare   = max(armH, armV) * uFlareStrength * isFlare;

  
  
  
  
  
  
  
  float waveNoise = snoise(vPos.xy * uWaveNoiseScale + uTime * uWaveNoiseSpeed);
  float cDist     = length(vPos.xy) + waveNoise * uWaveNoiseAmp;

  float fromFront = cDist - uWaveProgress;
  float blendT    = clamp(fromFront / max(uWaveBlendWidth, 1.0) + 0.5, 0.0, 1.0);
  float blend     = cubicInOut(blendT);

  float nextGroup = mod(uCurrentGroup + 1.0, 4.0);
  vec3  waveCol   = mix(groupColor(nextGroup), groupColor(uCurrentGroup), blend);
  vec3  col       = mix(vColor, waveCol, uColorWaveMix);

  
  
  col = mix(col, logoSample.rgb, uBlendT * logoSample.a);

  
  
  float wfEdge = pow(max(1.0 - abs(blendT - 0.5) * 2.0, 0.0), 2.0);
  col *= 1.0 + wfEdge * uWaveEdgeBloom * uColorWaveMix;

  
  float crossFade = uCrossFade;

  
  if (uBeadStyle > 0.5) {
    
    
    vec2  bv = uv * 2.0;  

    if (d > 0.5) discard;  

    float bz     = sqrt(max(0.0, 1.0 - dot(bv, bv)));  
    vec3  L1     = normalize(vec3(0.45, 0.65, 1.0));   
    vec3  V      = vec3(0.0, 0.0, 1.0);                

    vec3  litCol;
    float litAlpha;

    if (uBeadStyle < 1.5) {
      
      vec3  N      = normalize(vec3(bv, bz));
      float NdotL  = max(dot(N, L1), 0.0);
      float NdotV  = bz;
      float VdotR1 = max(dot(V, reflect(-L1, N)), 0.0);
      float diff = NdotL * 0.55 + 0.45;
      float spec = pow(VdotR1, 18.0) * 0.5;
      float fres = pow(1.0 - NdotV, 2.0) * 0.35;
      litCol   = col * diff + mix(vec3(1.0), col * 2.2, 0.5) * spec + col * fres;
      litAlpha = twinkle * uEmissive;

    } else if (uBeadStyle < 2.5) {
      
      vec3  N      = normalize(vec3(bv, bz));
      float NdotL  = max(dot(N, L1), 0.0);
      float NdotV  = bz;
      float VdotR1 = max(dot(V, reflect(-L1, N)), 0.0);
      float diff = NdotL * 0.35 + 0.65;
      float spec = pow(VdotR1, 90.0) * 2.5;
      float fres = pow(1.0 - NdotV, 4.0) * 1.2;
      float rim  = mix(0.35, 1.0, NdotV);
      litCol   = col * diff * rim + vec3(spec) + col * fres;
      litAlpha = mix(0.5, 1.0, NdotV) * twinkle * uEmissive;

    } else {
      
      vec3  N      = normalize(vec3(bv, bz));
      float NdotL  = max(dot(N, L1), 0.0);
      float VdotR1 = max(dot(V, reflect(-L1, N)), 0.0);
      vec3  L2     = normalize(vec3(-0.35, 0.45, 0.8));
      float VdotR2 = max(dot(V, reflect(-L2, N)), 0.0);
      float spec1  = pow(VdotR1, 45.0) * 2.0;
      float spec2  = pow(VdotR2, 22.0) * 0.8;
      float diff   = NdotL * 0.2 + 0.15;
      litCol   = col * diff + col * spec1 + vec3(1.0, 0.95, 0.85) * spec2;
      litAlpha = twinkle * uEmissive;
    }

    litAlpha = max(litAlpha, flare * uEmissive);
    litAlpha *= crossFade * uParticleOpacity * dimMul;
    if (litAlpha < 0.004) discard;
    litCol = litCol + flare * col * 1.5;
    gl_FragColor = vec4(litCol, litAlpha);

  } else {
    
    float alpha = max(glow * twinkle, flare) * uEmissive * crossFade * uParticleOpacity * dimMul;
    if (alpha < 0.004) discard;
    col = col * (1.0 + flare * 1.5);
    gl_FragColor = vec4(col, alpha);
  }
}`,Ee=`vec3 _mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
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
uniform float uSpeed;
uniform float uScrollStrength;
uniform float uScrollWarpAmp;

uniform float uMotionWaveSpeed;
uniform float uMotionWaveFreq;
uniform float uMotionWaveAmp;

uniform float uFlowNoiseScale;
uniform float uFlowNoiseSpeed;
uniform float uFlowNoiseAmp;

uniform float uWaveProgress;
uniform float uWaveNoiseScale;
uniform float uWaveNoiseSpeed;
uniform float uWaveNoiseAmp;

uniform float uParticleWaveWidth;
uniform float uParticleWaveAmp;
uniform float uParticleWaveBounce;

uniform float uMorphT;

uniform float uDriftAmp;

uniform float uDiscScale;
uniform float uDiscTilt;
uniform float uDiscRotSpeed;

attribute vec3  aInstPos;
attribute vec3  aInstPosFrom;
attribute float aInstSeed;
attribute float aInstSize;
attribute vec3  aInstColor;
attribute float aInstRotY;  

varying vec3  vColor;
varying float vSeed;
varying vec3  vNormal;
varying vec3  vPos;

void main() {
  vColor = aInstColor;
  vSeed  = aInstSeed;

  
  vec3 iPos = mix(aInstPosFrom, aInstPos, uMorphT);

  
  float t = uTime * uSpeed;
  float s = aInstSeed * 6.2832;
  iPos.x += (sin(t * 0.70 + s)         * 18.0
           + sin(t * 0.28 + s * 1.31) * 28.0) * uDriftAmp;
  iPos.y += (cos(t * 0.55 + s * 0.81)  * 14.0
           + cos(t * 0.38 + s * 1.73) * 20.0) * uDriftAmp;
  iPos.z += sin(t * 0.32 + s * 1.13)  *  9.0  * uDriftAmp;

  
  float ft = uTime * uFlowNoiseSpeed;
  float fs = uFlowNoiseScale;
  float fx = snoise(vec2(iPos.x * fs + ft,        iPos.y * fs * 0.7));
  float fy = snoise(vec2(iPos.y * fs + ft * 0.8,  iPos.z * fs * 0.7));
  float fz = snoise(vec2(iPos.z * fs + ft * 0.6,  iPos.x * fs * 0.7));
  iPos += vec3(fx, fy, fz) * uFlowNoiseAmp;

  
  float mwDist = length(iPos.xy);
  vec2  mwDir  = iPos.xy / max(mwDist, 0.001);
  float pulse  = sin(mwDist * uMotionWaveFreq - uTime * uMotionWaveSpeed) * uMotionWaveAmp;
  iPos.xy += mwDir * pulse;

  
  
  vec4 preSplashMvPos = modelViewMatrix * vec4(iPos, 1.0);
  vec4 centerMvPos    = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec2 relViewXY      = preSplashMvPos.xy - centerMvPos.xy;
  vPos = vec3(relViewXY, 0.0);

  
  float splashNoise = snoise(iPos.xy * uWaveNoiseScale + uTime * uWaveNoiseSpeed);
  float splashDist  = length(relViewXY) + splashNoise * uWaveNoiseAmp;
  float splashDff   = splashDist - uWaveProgress;
  float splashT     = splashDff / max(uParticleWaveWidth, 1.0);
  float splash = splashT >= 0.0
    ? exp(-splashT * splashT * 1.8)
    : exp(splashT * 2.5) * cos(splashT * uParticleWaveBounce);
  splash *= uParticleWaveAmp;
  vec2 splashDir = iPos.xy / max(length(iPos.xy), 0.001);
  iPos.xy += splashDir * splash;
  iPos.z  += splash * 0.35;

  
  
  vec4 centerMv = modelViewMatrix * vec4(iPos, 1.0);

  
  centerMv.y += uScroll * uScrollStrength;

  
  float swDist = length(centerMv.xy);
  vec2  swDir  = centerMv.xy / max(swDist, 0.001);
  centerMv.xy += swDir * sin(swDist * uMotionWaveFreq) * uScroll * uScrollWarpAmp;

  float discR = aInstSize * uDiscScale;

  
  
  
  vec3 billOffset = vec3(
    position.x * discR,
    position.z * discR,
    position.y * discR
  );

  
  
  float rotAngle = aInstRotY + uTime * uDiscRotSpeed * (0.5 + aInstSeed * 0.8);
  float cy = cos(rotAngle), sy = sin(rotAngle);
  billOffset.xy = vec2(
    billOffset.x * cy - billOffset.y * sy,
    billOffset.x * sy + billOffset.y * cy
  );

  
  
  vec3 billNorm = vec3(normal.x, normal.z, normal.y);
  billNorm.xy = vec2(
    billNorm.x * cy - billNorm.y * sy,
    billNorm.x * sy + billNorm.y * cy
  );

  
  
  float tiltAxisAngle = aInstSeed * 6.2832 + uTime * uDiscRotSpeed * 0.25 * (0.5 + aInstSeed * 0.5);
  vec3  tiltAxis      = vec3(cos(tiltAxisAngle), sin(tiltAxisAngle), 0.0);
  float ct = cos(uDiscTilt), st = sin(uDiscTilt);

  
  billOffset = billOffset * ct
    + cross(tiltAxis, billOffset) * st
    + tiltAxis * dot(tiltAxis, billOffset) * (1.0 - ct);

  billNorm = billNorm * ct
    + cross(tiltAxis, billNorm) * st
    + tiltAxis * dot(tiltAxis, billNorm) * (1.0 - ct);

  vNormal = normalize(billNorm);

  vec4 mvPos  = centerMv + vec4(billOffset, 0.0);
  gl_Position = projectionMatrix * mvPos;
}`,ze=`vec3 _mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
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
uniform float uEmissive;
uniform float uTwinkleSpeed;
uniform float uTwinkleIntensity;

uniform float uDimAmount;
uniform float uDimSpeed;
uniform float uDimDuty;

uniform float uColorWaveMix;
uniform float uCurrentGroup;
uniform float uWaveProgress;
uniform float uWaveBlendWidth;
uniform float uWaveEdgeBloom;
uniform float uWaveNoiseScale;
uniform float uWaveNoiseSpeed;
uniform float uWaveNoiseAmp;
uniform vec3  uWaveColors[16];

uniform float uCrossFade;

uniform float uParticleOpacity;

uniform vec3  uDiscLightDir;
uniform float uDiscAmbient;
uniform float uDiscSpecular;
uniform float uDiscStyle;  

varying vec3  vColor;
varying float vSeed;
varying vec3  vNormal;
varying vec3  vPos;

float cubicInOut(float t) {
  t = clamp(t, 0.0, 1.0);
  return t < 0.5
    ? 4.0 * t * t * t
    : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

vec3 groupColor(float g) {
  int base   = int(mod(g, 4.0)) * 4;
  int subIdx = clamp(int(floor(vSeed * 4.0)), 0, 3);
  float bSeed = fract(vSeed * 17.3 + 0.5);
  float br    = 0.8 + bSeed * 0.45;
  return uWaveColors[base + subIdx] * br;
}

void main() {
  
  float tw      = uTime * uTwinkleSpeed + vSeed * 17.3;
  float spike   = pow(abs(sin(tw * 2.3 + vSeed * 3.7)), 10.0);
  float breathe = abs(sin(tw * 0.38)) * 0.35;
  float twinkle = mix(1.0, 0.25 + spike + breathe, uTwinkleIntensity);

  
  float dimSeed   = fract(vSeed * 53.7);
  float dimSpeedJ = uDimSpeed * (0.7 + dimSeed * 0.6);
  float dimT      = uTime * dimSpeedJ + dimSeed * 31.3;
  float dimWave   = 0.5 + 0.5 * sin(dimT * 6.2832);
  float duty      = clamp(uDimDuty, 0.0, 1.0);
  float dimEdge   = 0.15;
  float dimPulse  = smoothstep(1.0 - duty - dimEdge, 1.0 - duty + dimEdge, dimWave);
  float dimMul    = mix(1.0, 1.0 - uDimAmount, dimPulse);

  
  float waveNoise = snoise(vPos.xy * uWaveNoiseScale + uTime * uWaveNoiseSpeed);
  float cDist     = length(vPos.xy) + waveNoise * uWaveNoiseAmp;
  float fromFront = cDist - uWaveProgress;
  float blendT    = clamp(fromFront / max(uWaveBlendWidth, 1.0) + 0.5, 0.0, 1.0);
  float blend     = cubicInOut(blendT);
  float nextGroup = mod(uCurrentGroup + 1.0, 4.0);
  vec3  waveCol   = mix(groupColor(nextGroup), groupColor(uCurrentGroup), blend);
  vec3  col       = mix(vColor, waveCol, uColorWaveMix);

  
  float wfEdge = pow(max(1.0 - abs(blendT - 0.5) * 2.0, 0.0), 2.0);
  col *= 1.0 + wfEdge * uWaveEdgeBloom * uColorWaveMix;

  
  vec3  N = normalize(vNormal);
  vec3  L = normalize(uDiscLightDir);
  vec3  V = vec3(0.0, 0.0, 1.0);  
  vec3  H = normalize(L + V);

  vec3  litCol;
  float alpha;

  if (uDiscStyle < 0.5) {
    
    litCol = col;
    alpha  = twinkle * uEmissive;

  } else if (uDiscStyle < 1.5) {
    
    float NdotL = abs(dot(N, L));
    float spec  = pow(max(abs(dot(N, H)), 0.0), 32.0) * uDiscSpecular;
    litCol = col * (uDiscAmbient + NdotL) + vec3(spec);
    alpha  = twinkle * uEmissive;

  } else if (uDiscStyle < 2.5) {
    
    float NdotL = abs(dot(N, L));
    float NdotV = abs(dot(N, V));
    float spec  = pow(max(abs(dot(N, H)), 0.0), 80.0) * uDiscSpecular * 2.0;
    float fres  = pow(1.0 - NdotV, 3.0) * 0.6;
    litCol = col * (uDiscAmbient + NdotL * 0.7) + vec3(spec) + col * fres;
    alpha  = twinkle * uEmissive;

  } else {
    
    float NdotL     = abs(dot(N, L));
    float NdotV     = abs(dot(N, V));
    float hueShift  = NdotV * 3.0 + vSeed * 6.2832;
    vec3  rainbow   = vec3(
      sin(hueShift)         * 0.5 + 0.5,
      sin(hueShift + 2.094) * 0.5 + 0.5,
      sin(hueShift + 4.189) * 0.5 + 0.5
    );
    float iridescence = pow(1.0 - NdotV, 1.5);
    litCol = mix(col, rainbow * 1.5, iridescence * 0.8) * (uDiscAmbient + NdotL * 0.6);
    alpha  = twinkle * uEmissive;
  }

  alpha *= uCrossFade * uParticleOpacity * dimMul;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(litCol, alpha);
}`;const ke={sceneBgColor:"#0B0C0B",bgColor:"#0B0C0B",bgImageVisible:!1,bgImageOpacity:0,bgImageBlur:4,bgImageBrightness:.05,bgImageHaze:.9,bgImageHazeColor:"#1A1410",bgBypassEffects:!0,vignetteStrength:.42,vignetteRadius:.08,vignetteSoftness:.4,vignetteColor:"#080706",coverOpacity:0,exposure:.9,count:32e3,baseSize:7,speed:.59,emissive:.9,particleOpacity:1,drift:!1,motionBlurDamp:0,pattern:"logo",morphDuration:2,renderMode:"disc",logoBlend:0,logoPlaneOpacity:1,logoScale:.9,logoDepth:0,logoRotZSpeed:-75e-5,logoFloatAmp:15,logoFloatSpeed:.6,logoFloatScale:.03,logoMobileCenterBias:1,logoCAmp:0,logoBreathAmp:1,logoBreathSpeed:.35,logoAmbientOn:!0,logoAmbientOpacity:.85,logoAmbientCount:750,logoAmbientSize:15,logoAmbientSpeed:.8,logoAmbientDrift:100,helixArms:5,helixTurns:.7,helixRadius:.24,helixHeight:1,cylinderRadius:.45,cylinderHeight:1.1,knotP:3,knotQ:2,knotScale:1,knotTube:.3,discStyle:1,discScale:.5,discTilt:1.57,discRotSpeed:3,discHeight:.6,discSegments:32,discAmbient:0,discSpecular:0,beadStyle:0,colorWaveMix:.35,waveHoldDuration:1.5,waveSweepDuration:8,waveBlendWidth:150,waveEdgeBloom:6.3,waveNoiseScale:.0015,waveNoiseSpeed:.3,waveNoiseAmp:0,particleWaveWidth:55,particleWaveAmp:15,particleWaveBounce:.8,waveG0C0:"#8C3B2A",waveG0C1:"#7A2E24",waveG0C2:"#D39A5A",waveG0C3:"#6E3A48",waveG1C0:"#4E6170",waveG1C1:"#4E7C86",waveG1C2:"#5A3A4A",waveG1C3:"#4E7C86",waveG2C0:"#B87333",waveG2C1:"#4E7C86",waveG2C2:"#C98B4A",waveG2C3:"#6FA3A8",waveG3C0:"#C08A52",waveG3C1:"#A85A2A",waveG3C2:"#E0B27A",waveG3C3:"#D6A36A",lumCap:2.85,bloomStrength:.65,bloomRadius:0,bloomThreshold:.53,twinkleSpeed:2.4,twinkleIntensity:.9,dimAmount:0,dimSpeed:.35,dimDuty:.4,flareStrength:1,flareSharpness:60,flareMinSize:150,rotXDeg:0,rotYDeg:0,rotZDeg:0,autoRotateSpeed:.0013,rotLerp:.11,scrollStrength:0,scrollWarpAmp:0,motionWaveSpeed:.25,motionWaveFreq:.019,motionWaveAmp:14,flowNoiseScale:.012,flowNoiseSpeed:.09,flowNoiseAmp:0,colorGold:"#C08A52",colorPurple:"#8C3B2A",colorTeal:"#4E7C86",colorSilver:"#EAE0D2"},w=l=>{const e=new g(l);return new y(e.r,e.g,e.b)},G=l=>[w(l.waveG0C0),w(l.waveG0C1),w(l.waveG0C2),w(l.waveG0C3),w(l.waveG1C0),w(l.waveG1C1),w(l.waveG1C2),w(l.waveG1C3),w(l.waveG2C0),w(l.waveG2C1),w(l.waveG2C2),w(l.waveG2C3),w(l.waveG3C0),w(l.waveG3C1),w(l.waveG3C2),w(l.waveG3C3)];function le(l,e,t,i,o,s,n){const a=new Float32Array(e*3);if(l==="helix"){const r=i.helixArms,h=i.helixTurns,c=i.helixRadius*t,f=i.helixHeight*t;for(let m=0;m<e;m++){const p=m*3;if(Math.random()<.78){const u=m%r,d=Math.random(),v=d*h*Math.PI*2+u/r*Math.PI*2,M=(Math.random()-.5)*t*.1,C=c+M;a[p]=C*Math.cos(v),a[p+1]=(d-.5)*f*2,a[p+2]=C*Math.sin(v)}else{const u=Math.random()*Math.PI*2,d=Math.random()*c*.55;a[p]=d*Math.cos(u),a[p+1]=(Math.random()-.5)*f*2,a[p+2]=d*Math.sin(u)}}}else if(l==="cylinder"){const r=i.cylinderRadius*t,h=i.cylinderHeight*t;for(let c=0;c<e;c++){const f=c*3,m=Math.random()*Math.PI*2,p=Math.random();if(p<.6){const u=(Math.random()-.5)*t*.08,d=r+u;a[f]=d*Math.cos(m),a[f+1]=(Math.random()-.5)*h*2,a[f+2]=d*Math.sin(m)}else if(p<.8){const u=Math.random()*r,d=(Math.random()<.5?1:-1)*h;a[f]=u*Math.cos(m),a[f+1]=d,a[f+2]=u*Math.sin(m)}else{const u=Math.random()*r*.9;a[f]=u*Math.cos(m),a[f+1]=(Math.random()-.5)*h*2,a[f+2]=u*Math.sin(m)}}}else if(l==="torusknot"){const r=Math.round(i.knotP),h=Math.round(i.knotQ),c=i.knotScale*t,f=c*.65,m=c*.35,p=i.knotTube*t;for(let u=0;u<e;u++){const d=u*3,v=Math.random()*Math.PI*2,M=(f+m*Math.cos(h*v))*Math.cos(r*v),C=m*Math.sin(h*v),x=(f+m*Math.cos(h*v))*Math.sin(r*v),D=Math.random()*Math.PI*2,A=Math.acos(2*Math.random()-1),R=Math.random()*p;a[d]=M+R*Math.sin(A)*Math.cos(D),a[d+1]=C+R*Math.sin(A)*Math.sin(D),a[d+2]=x+R*Math.cos(A)}}else if(l==="logo"){const r=o,h=t*i.logoScale,c=h*n,f=t*i.logoDepth;if(!r||r.length===0)for(let m=0;m<e;m++){const p=m*3,u=Math.random()*t,d=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1);a[p]=u*Math.sin(v)*Math.cos(d),a[p+1]=u*Math.sin(v)*Math.sin(d),a[p+2]=u*Math.cos(v)}else{const p=(s??r).slice();for(let u=p.length-1;u>0;u--){const d=Math.floor(Math.random()*(u+1)),v=p[u];p[u]=p[d],p[d]=v}for(let u=0;u<e;u++){const d=u*3,v=p[u%p.length],M=(v.x-.5)*2,C=-(v.y-.5)*2,x=M*h,D=C*c,R=(1-Math.min(Math.sqrt(M*M+C*C),1))*f*.6,H=(Math.random()-.5)*f;a[d]=x,a[d+1]=D,a[d+2]=R+H}}}else for(let r=0;r<e;r++){const h=r*3,c=Math.random();let f,m,p;if(c<.68){const u=Math.random()*t,d=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1);f=u*Math.sin(v)*Math.cos(d),m=u*Math.sin(v)*Math.sin(d),p=u*Math.cos(v)}else if(c<.93){const u=Math.random()*t*.33,d=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1);f=u*Math.sin(v)*Math.cos(d),m=u*Math.sin(v)*Math.sin(d),p=u*Math.cos(v)}else{const u=t+Math.random()*t*.55,d=Math.random()*Math.PI*2;f=Math.cos(d)*u,m=Math.sin(d)*u,p=(Math.random()-.5)*t*.8}a[h]=f,a[h+1]=m,a[h+2]=p}return a}const I={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class O{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Le=new ce(-1,1,1,-1,0,1);class Ue extends ee{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const Ge=new Ue;class Y{constructor(e){this._mesh=new j(Ge,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Le)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class V extends O{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof P?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=k.clone(e.uniforms),this.material=new P({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Y(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ue extends O{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let n,a;this.inverse?(n=0,a=1):(n=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,n,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class Ve extends O{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ye{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new S);this._width=i.width,this._height=i.height,t=new N(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:z}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V(I),this.copyPass.material.blending=me,this.timer=new ge}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,s=this.passes.length;o<s;o++){const n=this.passes[o];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const a=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ue!==void 0&&(n instanceof ue?i=!0:n instanceof Ve&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new S);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class He extends O{constructor(e,t,i=null,o=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new g}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let s,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=o}}const Ze={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new g(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class L extends O{constructor(e,t=1,i,o){super(),this.strength=t,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new S(e.x,e.y):new S(256,256),this.clearColor=new g(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new N(s,n,{type:z}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const f=new N(s,n,{type:z});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new N(s,n,{type:z});m.texture.name="UnrealBloomPass.v"+c,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),n=Math.round(n/2)}const a=Ze;this.highPassUniforms=k.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new P({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const r=[6,10,14,18,22];s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(r[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new S(1/s,1/n),s=Math.round(s/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=k.clone(I.uniforms),this.blendMaterial=new P({uniforms:this.copyUniforms,vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,premultipliedAlpha:!0,blending:Q,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new g,this._oldClearAlpha=1,this._basic=new pe,this._fsQuad=new Y(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,o),this.renderTargetsVertical[s].setSize(i,o),this.separableBlurMaterials[s].uniforms.invSize.value=new S(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this._fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[r].uniforms.direction.value=L.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[r]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=L.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[r]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[r];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=n}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);return new P({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new S(.5,.5)},direction:{value:new S(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new P({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}L.BlurDirectionX=new S(1,0);L.BlurDirectionY=new S(0,1);const J={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class Qe extends O{constructor(e=.96){super(),this.uniforms=k.clone(J.uniforms),this.damp=e,this.compFsMaterial=new P({uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader}),this.copyFsMaterial=new P({uniforms:k.clone(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,blending:me,depthTest:!1,depthWrite:!1}),this._textureComp=new N(window.innerWidth,window.innerHeight,{magFilter:ie,type:z}),this._textureOld=new N(window.innerWidth,window.innerHeight,{magFilter:ie,type:z}),this._compFsQuad=new Y(this.compFsMaterial),this._copyFsQuad=new Y(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,t,i){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=i.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._copyFsQuad.render(e));const o=this._textureOld;this._textureOld=this._textureComp,this._textureComp=o}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}const Z={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class je extends O{constructor(){super(),this.isOutputPass=!0,this.uniforms=k.clone(Z.uniforms),this.material=new Se({name:Z.name,uniforms:this.uniforms,vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader}),this._fsQuad=new Y(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===be?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===we?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ye?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===de?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Me?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ce?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Te&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Xe=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,qe=`uniform sampler2D tDiffuse;
uniform float uLumCap;
varying vec2 vUv;

void main() {
  vec4 col = texture2D(tDiffuse, vUv);
  float lum = dot(col.rgb, vec3(0.2126, 0.7152, 0.0722));
  if (lum > uLumCap) col.rgb *= uLumCap / lum;
  gl_FragColor = col;
}`,$e=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ke=`uniform sampler2D tDiffuse;
uniform vec2  uResolution;
uniform float uVignetteStrength;
uniform float uVignetteRadius;
uniform float uVignetteSoftness;
uniform vec3  uVignetteColor;
uniform float uCoverOpacity;
varying vec2 vUv;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);

  
  vec2 uv = vUv - 0.5;
  uv.x *= uResolution.x / uResolution.y;
  float dist = length(uv);
  float vignette = smoothstep(uVignetteRadius, uVignetteRadius - uVignetteSoftness, dist);
  float vignetteMask = (1.0 - vignette) * uVignetteStrength;
  color.rgb = mix(color.rgb, uVignetteColor, vignetteMask);

  
  color.rgb = mix(color.rgb, vec3(0.0), uCoverOpacity);

  gl_FragColor = color;
}`,Je=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,et=`uniform sampler2D uBgTexture;
uniform float uHasTexture;
uniform vec2  uResolution;
uniform vec3  uFallbackColor;
uniform float uImageAspect;

uniform float uVisible;
uniform float uBlur;
uniform float uBrightness;
uniform vec3  uHazeColor;
uniform float uHazeStrength;

varying vec2 vUv;

void main() {
  
  if (uHasTexture < 0.5) {
    gl_FragColor = vec4(uFallbackColor, 1.0);
    return;
  }

  
  float viewAspect = uResolution.x / uResolution.y;
  vec2  scale = uImageAspect > viewAspect
    ? vec2(viewAspect / uImageAspect, 1.0)
    : vec2(1.0, uImageAspect / viewAspect);
  vec2  uv = (vUv - 0.5) * scale + 0.5;

  
  gl_FragColor = texture2D(uBgTexture, uv);
}`,tt=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ot=`uniform sampler2D tDiffuse;
uniform float uCaAmp;
uniform vec2  uResolution;
varying vec2 vUv;

void main() {
  
  vec2  dir    = vUv - 0.5;
  float dist   = length(dir);
  vec2  offset = normalize(dir) * uCaAmp / uResolution * dist * 2.5;

  float r = texture2D(tDiffuse, vUv + offset).r;
  float g = texture2D(tDiffuse, vUv         ).g;
  float b = texture2D(tDiffuse, vUv - offset).b;

  gl_FragColor = vec4(r, g, b, 1.0);
}`,it=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,st=`uniform sampler2D tDiffuse;        
uniform sampler2D uBgTex;          
uniform vec3  uSceneBgColor;       
uniform vec3  uFallbackColor;      
uniform float uBgImageOpacity;     
uniform float uBgAdd;              

varying vec2 vUv;

void main() {
  vec3 particlesSRGB = texture2D(tDiffuse, vUv).rgb;
  vec4 bgRaw         = texture2D(uBgTex, vUv);

  
  vec3 imageLayer = mix(uFallbackColor, bgRaw.rgb, bgRaw.a);
  
  vec3 bgComposed = mix(uSceneBgColor, imageLayer, uBgImageOpacity);

  
  vec3 finalBypass = particlesSRGB + bgComposed;
  
  vec3 finalPass   = particlesSRGB;

  vec3 finalColor = mix(finalPass, finalBypass, uBgAdd);
  gl_FragColor = vec4(finalColor, 1.0);
}`;const at={name:"LumCapShader",uniforms:{tDiffuse:{value:null},uLumCap:{value:1.5}},vertexShader:Xe,fragmentShader:qe},nt={name:"OverlayShader",uniforms:{tDiffuse:{value:null},uResolution:{value:new S(1,1)},uVignetteStrength:{value:.42},uVignetteRadius:{value:.08},uVignetteSoftness:{value:.4},uVignetteColor:{value:new y(.024,.071,.035)},uCoverOpacity:{value:0}},vertexShader:$e,fragmentShader:Ke},he={uniforms:{uResolution:{value:new S(1,1)},uHazeColor:{value:new y(.043,.122,.059)},uFallbackColor:{value:new y(.094,.204,.118)}},vertexShader:Je,fragmentShader:et},rt={name:"ChromaticAberrationShader",uniforms:{tDiffuse:{value:null},uCaAmp:{value:0},uResolution:{value:new S(1,1)}},vertexShader:tt,fragmentShader:ot},lt={name:"BgCompositeShader",uniforms:{tDiffuse:{value:null},uBgTex:{value:null},uSceneBgColor:{value:new y(.094,.204,.118)},uFallbackColor:{value:new y(.094,.204,.118)},uBgImageOpacity:{value:0},uBgAdd:{value:1}},vertexShader:it,fragmentShader:st};function ut(l,e,t){const{renderer:i,scene:o,camera:s}=l,{width:n,height:a}=l.stageSize,r=new N(n,a,{minFilter:se,magFilter:se}),h=new fe,c=new ce(-1,1,1,-1,0,1),f=new g(e.bgImageHazeColor),m=new g(e.bgColor),p=new P({vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,uniforms:{tDiffuse:{value:null},uBgTexture:{value:null},uHasTexture:{value:0},uVisible:{value:e.bgImageOpacity},uResolution:{value:new S(n,a)},uBlur:{value:e.bgImageBlur},uBrightness:{value:e.bgImageBrightness},uHazeColor:{value:new y(f.r,f.g,f.b)},uHazeStrength:{value:e.bgImageHaze},uFallbackColor:{value:new y(m.r,m.g,m.b)},uImageAspect:{value:1}}}),u=p.uniforms,d=new j(new ve(2,2),p);h.add(d),new Pe().load("/kiwami-sauna-recruit/kiwami/recruit/assets/img/common/crossfade_bg.webp",U=>t(U,u));const v=o.background;o.background=e.bgBypassEffects?null:r.texture;const M=i.toneMapping,C=i.toneMappingExposure;i.toneMapping=de,i.toneMappingExposure=e.exposure;const x=new Ye(i),D=new He(o,s.instance);D.clearColor=new g(0),D.clearAlpha=0,x.addPass(D);const A=new V(at);A.uniforms.uLumCap&&(A.uniforms.uLumCap.value=e.lumCap),x.addPass(A);const R=new L(new S(n,a),e.bloomStrength,e.bloomRadius,e.bloomThreshold);x.addPass(R);const H=new Qe(e.motionBlurDamp);x.addPass(H);const X=new V(nt),te=X.uniforms;mt(te,n,a,e),x.addPass(X);const q=new V(rt),$=q.uniforms;$.uCaAmp.value=e.pattern==="logo"?e.logoCAmp:0,$.uResolution.value.set(n,a),x.addPass(q),x.addPass(new je);const F=new V(lt);F.uniforms.uBgTex.value=r.texture,F.uniforms.uBgAdd.value=e.bgBypassEffects?1:0,F.uniforms.uBgImageOpacity.value=e.bgImageOpacity;{const U=new g(e.sceneBgColor);F.uniforms.uSceneBgColor.value.set(U.r,U.g,U.b);const K=new g(e.bgColor);F.uniforms.uFallbackColor.value.set(K.r,K.g,K.b)}return x.addPass(F),{bgRT:r,bgScene:h,bgCamera:c,bgMesh:d,bgU:u,composer:x,lumCapPass:A,bloomPass:R,afterimagePass:H,overlayPass:X,ou:te,caPass:q,cau:$,finalCompositePass:F,originalSceneBackground:v,savedToneMapping:M,savedToneMappingExposure:C}}function ht(l,e,t,i){l?.dispose(),e?.material?.dispose(),e?.geometry.dispose(),t?.dispose(),i?.dispose()}function ct(l,e,t,i){l.scene&&(l.scene.background=e),l.renderer&&(l.renderer.toneMapping=t,l.renderer.toneMappingExposure=i)}function mt(l,e,t,i){const o=new g(i.vignetteColor);l.uResolution.value.set(e,t),l.uVignetteStrength.value=i.vignetteStrength,l.uVignetteRadius.value=i.vignetteRadius,l.uVignetteSoftness.value=i.vignetteSoftness,l.uVignetteColor.value.set(o.r,o.g,o.b),l.uCoverOpacity.value=i.coverOpacity}var pt=`attribute float aSeed;
attribute vec3  aColor;
uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform float uDrift;
uniform float uVSpread;
uniform vec2  uResolution;
uniform vec2  uPosScale;
varying vec3  vColor;
varying float vSeed;
varying float vSize;
varying vec3  vPos;
void main() {
  vColor = aColor;
  vSeed  = aSeed;
  vec3  pos = vec3(position.xy * uPosScale, position.z);
  float s   = aSeed * 6.2832;
  float t   = uTime * uSpeed;
  pos.y = mod(pos.y + t * (20.0 + aSeed * 20.0), uVSpread) - uVSpread * 0.5;
  pos.x += sin(t * 0.4  + s) * uDrift;
  pos.z += cos(t * 0.28 + s * 1.3) * uDrift * 0.43;
  vec4 mvPos   = modelViewMatrix * vec4(pos, 1.0);
  vPos         = mvPos.xyz;
  gl_Position  = projectionMatrix * mvPos;
  gl_PointSize = uSize * uResolution.y / max(-mvPos.z, 1.0);
  gl_PointSize = clamp(gl_PointSize, 0.5, 512.0);
  vSize = gl_PointSize;
}`,dt=`uniform float uTime;
uniform float uOpacity;
uniform float uEmissive;
uniform float uTwinkleSpeed;
uniform float uTwinkleIntensity;
uniform float uDimAmount;
uniform float uDimSpeed;
uniform float uDimDuty;
uniform float uFlareStrength;
uniform float uFlareSharpness;
uniform float uFlareMinSize;
uniform float uColorWaveMix;
uniform float uCurrentGroup;
uniform float uWaveProgress;
uniform float uWaveBlendWidth;
uniform vec3  uWaveColors[16];
varying vec3  vColor;
varying float vSeed;
varying float vSize;
varying vec3  vPos;
float cubicInOut(float t) {
  t = clamp(t, 0.0, 1.0);
  return t < 0.5
    ? 4.0 * t * t * t
    : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}
vec3 groupColor(float g) {
  int base   = int(mod(g, 4.0)) * 4;
  int subIdx = clamp(int(floor(vSeed * 4.0)), 0, 3);
  float bSeed = fract(vSeed * 17.3 + 0.5);
  float br    = 0.8 + bSeed * 0.45;
  return uWaveColors[base + subIdx] * br;
}
void main() {
  vec2  uv      = gl_PointCoord - 0.5;
  float d       = length(uv);
  float glow    = pow(1.0 - smoothstep(0.0, 0.48, d), 2.0);
  float tw      = uTime * uTwinkleSpeed + vSeed * 17.3;
  float spike   = pow(abs(sin(tw * 2.3 + vSeed * 3.7)), 10.0);
  float breathe = abs(sin(tw * 0.38)) * 0.35;
  float twinkle = mix(1.0, 0.25 + spike + breathe, uTwinkleIntensity);
  
  float dimSeed   = fract(vSeed * 53.7);
  float dimSpeedJ = uDimSpeed * (0.7 + dimSeed * 0.6);
  float dimT      = uTime * dimSpeedJ + dimSeed * 31.3;
  float dimWave   = 0.5 + 0.5 * sin(dimT * 6.2832);
  float duty      = clamp(uDimDuty, 0.0, 1.0);
  float dimEdge   = 0.15;
  float dimPulse  = smoothstep(1.0 - duty - dimEdge, 1.0 - duty + dimEdge, dimWave);
  float dimMul    = mix(1.0, 1.0 - uDimAmount, dimPulse);
  float isFlare = step(uFlareMinSize, vSize);
  float armH    = exp(-abs(uv.y) * uFlareSharpness) * exp(-abs(uv.x) * 3.0);
  float armV    = exp(-abs(uv.x) * uFlareSharpness) * exp(-abs(uv.y) * 3.0);
  float flare   = max(armH, armV) * uFlareStrength * isFlare;
  float alpha   = max(glow * twinkle, flare) * uEmissive * uOpacity * dimMul;
  if (alpha < 0.004) discard;
  float cDist     = length(vPos.xy);
  float fromFront = cDist - uWaveProgress;
  float blendT    = clamp(fromFront / max(uWaveBlendWidth, 1.0) + 0.5, 0.0, 1.0);
  float blend     = cubicInOut(blendT);
  float nextGroup = mod(uCurrentGroup + 1.0, 4.0);
  vec3  waveCol   = mix(groupColor(nextGroup), groupColor(uCurrentGroup), blend);
  vec3  col       = mix(vColor, waveCol, uColorWaveMix);
  col = col + flare * col * 1.5;
  gl_FragColor = vec4(col, alpha);
}`;function ft(l){let e=0,t=l;for(;t;)e+=t.offsetTop,t=t.offsetParent;return e}function vt(l){return l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2}class b extends Ne{group=null;points=null;geometry=null;material=null;u=null;deu=null;composer=null;bgRT=null;bgScene=null;bgCamera=null;bgMesh=null;bgU=null;bgTexture=null;lumCapPass=null;bloomPass=null;afterimagePass=null;cau=null;finalCompositePass=null;ou=null;originalOnRender=null;_logoOverlayScene=null;originalSceneBackground=null;savedToneMapping=Ae;savedToneMappingExposure=1;gui=null;params={...ke};currentRotX=0;currentRotY=0;currentRotZ=0;autoRotY=0;autoRotZ=0;time=0;cleanupFns=[];static LOCK_TO_GREEN=!0;static INITIAL_GROUP=b.LOCK_TO_GREEN?2:0;waveGroupIndex=b.INITIAL_GROUP;_waveAnim={progress:-99999};_sweepTween=null;_holdTimer=null;_mode={kind:"progressive"};_isDebugMode=!1;_debugWaypointEl=null;_scrollBpCache={valid:!1,wh:0,fadeStartScrollY:0,fadeEndScrollY:0,overlapScrollY:0,endScrollY:0};_colorA=new g;_colorB=new g;_sceneTween=null;_morphTween=null;_morphAnim={t:1};_rotZTween=null;_rotYTween=null;_driftTween=null;_driftAnim={amp:0};_floatTween=null;_floatAmpAnim={amp:0};_scaleAnim={val:1};_scaleTween=null;_currentLogoScale=-1;_logoTargetScaleCache=1;_logoCenterOffsetY=0;_planeMatrixPos=new y;_planeMatrixRot=new De;_planeMatrixSca=new y;_breathTween=null;_breathAnim={offset:0};_decoFadeTween=null;_buildHeight=0;logoDecoGroup=null;ambientPoints=null;ambientMat=null;_decoBuiltSize={width:0,height:0};_logoPixels=null;_logoInnerPixels=null;_logoAspect=1;_cachedLogoExtentSx=-1;_logoTex=null;_logoBlendTween=null;_logoPlaneFadeTween=null;_logoBlendAnim={t:0};_logoPlane=null;static SCENES={introIn:{baseSize:2.2,particleOpacity:.7,bloomStrength:0,bloomRadius:0,bloomThreshold:1,lumCap:1,emissive:.35,twinkleIntensity:.2,dimAmount:0,dimSpeed:.35,dimDuty:.4,flareStrength:0,waveEdgeBloom:0,colorWaveMix:0,autoRotateSpeed:0,logoRotZSpeed:0,logoBlend:0,logoPlaneOpacity:0,logoScale:.7,coverOpacity:.4,bgImageOpacity:1,pattern:"logo"},introOut1:{baseSize:3.2,particleOpacity:1,bloomStrength:.65,bloomRadius:0,bloomThreshold:.53,lumCap:2.85,emissive:.9,twinkleIntensity:.9,dimAmount:.6,dimSpeed:.35,dimDuty:.4,flareStrength:1,waveEdgeBloom:6.3,colorWaveMix:.35,autoRotateSpeed:.0013,logoRotZSpeed:-75e-5,colorGold:"#C08A52",colorPurple:"#8C3B2A",colorTeal:"#4E7C86",colorSilver:"#EAE0D2",logoBlend:0,logoPlaneOpacity:0,logoScale:.9,coverOpacity:.4,pattern:"logo"},futureIn:{pattern:"helix",bloomStrength:.65,bloomRadius:0,bloomThreshold:.53,lumCap:2.85,emissive:.9,twinkleIntensity:.9,dimAmount:0,dimSpeed:.35,dimDuty:.4,flareStrength:1,waveEdgeBloom:6.3,colorWaveMix:.35,autoRotateSpeed:.0013,logoRotZSpeed:0,logoBlend:0,logoPlaneOpacity:1,logoScale:.9,coverOpacity:.6,particleOpacity:1,rotXDeg:0,rotYDeg:0},interviewIn:{pattern:"helix",bloomStrength:.65,bloomRadius:0,bloomThreshold:.53,lumCap:2.85,emissive:.9,twinkleIntensity:.9,dimAmount:0,dimSpeed:.35,dimDuty:.4,flareStrength:1,waveEdgeBloom:6.3,colorWaveMix:.35,autoRotateSpeed:.0013,logoRotZSpeed:0,logoBlend:0,logoPlaneOpacity:1,logoScale:.9,coverOpacity:.6,particleOpacity:1,rotXDeg:0,rotYDeg:0},joinIn:{pattern:"logo",bloomStrength:.65,bloomRadius:0,bloomThreshold:.53,lumCap:2.85,emissive:.9,twinkleIntensity:.9,dimAmount:0,dimSpeed:.35,dimDuty:.4,flareStrength:1,waveEdgeBloom:6.3,colorWaveMix:.35,autoRotateSpeed:.0013,logoRotZSpeed:-75e-5,logoBlend:0,logoPlaneOpacity:0,logoScale:.9,coverOpacity:.6,particleOpacity:0,rotXDeg:0,rotYDeg:0}};constructor(e){super(e)}enter(){this.group=new ae,this.stage.scene?.add(this.group),this._logoOverlayScene=new fe,this._loadLogoTexture(),this._loadLogoPixels().then(()=>{this.params.pattern==="logo"&&this._resetRotationForLogo(),this._buildParticles(),this._buildLogoPlane(),this._buildComposer(),this._buildLogoDecorations(),this._setupGUI(),this._startWaveCycle(),this.params.pattern==="logo"&&this._startLogoAnims(),this._applySceneImmediate({...b.SCENES.introIn??{},logoBlend:1,logoPlaneOpacity:0,logoScale:0}),this._overrideRender(),this._cacheScrollBreakpoints(),requestAnimationFrame(()=>this._setupIOM())})}_modeLabel(){switch(this._mode.kind){case"progressive":return"progressive (intro)";case"waypoint":return`waypoint (${this._mode.scene})`;case"transitioning":{const e=(performance.now()-this._mode.startTime)/this._mode.durationMs,t=Math.max(0,Math.min(1,e));return`→ ${this._mode.toMode.kind==="waypoint"?this._mode.toMode.scene:"progressive"} ${(t*100).toFixed(0)}%`}}}_updateDebugUI(){if(!this._debugWaypointEl)return;const e=this._isDebugMode?"⏸ DEBUG MODE — ":"";this._debugWaypointEl.textContent=`${e}Mode: ${this._modeLabel()}`,this._debugWaypointEl.style.color=this._isDebugMode?"#f33":"#0f0",this._debugWaypointEl.style.borderColor=this._isDebugMode?"#f33":"#0f0"}setDebugMode(e){this._isDebugMode=e,this._updateDebugUI()}_setupDebugWaypointUI(){if(!_.debug||this._debugWaypointEl)return;const e=document.createElement("div");e.style.cssText=["position:fixed","left:8px","bottom:8px","z-index:99999","padding:6px 10px","background:rgba(0,0,0,0.7)","color:#0f0","font:12px/1 ui-monospace,monospace","border:1px solid #0f0","border-radius:4px","pointer-events:none","user-select:none"].join(";"),e.textContent=`Mode: ${this._modeLabel()}`,document.body.appendChild(e),this._debugWaypointEl=e}_destroyDebugWaypointUI(){this._debugWaypointEl?.remove(),this._debugWaypointEl=null}static LERPABLE_KEY_SET=(()=>{const e=new Set;for(const t of Object.keys(b.SCENES)){const i=b.SCENES[t]??{};for(const o of Object.keys(i))o==="pattern"||o==="logoPlaneOpacity"||e.add(o)}return e})();_snapshotParams(){const e={},t=this.params;for(const i of b.LERPABLE_KEY_SET){const o=t[i];(typeof o=="number"||typeof o=="string")&&(e[i]=o)}return e}_sceneToSnapshot(e){const t={},i=b.SCENES[e]??{};for(const[o,s]of Object.entries(i))o==="pattern"||o==="logoPlaneOpacity"||(typeof s=="number"||typeof s=="string")&&(t[o]=s);return t}_lerpSnapshots(e,t,i,o){for(const s of Object.keys(t)){const n=e[s],a=t[s];typeof n=="number"&&typeof a=="number"?o[s]=n+(a-n)*i:typeof n=="string"&&typeof a=="string"&&n.startsWith("#")&&a.startsWith("#")?o[s]=`#${this._colorA.set(n).lerp(this._colorB.set(a),i).getHexString()}`:a!==void 0&&(o[s]=a)}}_applySnapshotToParams(e){const t=this.params;for(const[i,o]of Object.entries(e))t[i]=o}_computeProgressiveTarget(){const e=this._scrollBpCache;if(!e.valid)return{snapshot:this._sceneToSnapshot("introIn"),logoPlaneOpacity:0};const t=e.fadeEndScrollY-e.fadeStartScrollY,i=t>0?Math.max(0,Math.min(1,(_.scrollY-e.fadeStartScrollY)/t)):0,o=e.endScrollY-e.overlapScrollY,s=o>0?(_.scrollY-e.overlapScrollY)/o:0,n=Math.max(0,Math.min(1,s)),a=this._sceneToSnapshot("introIn"),r=this._sceneToSnapshot("introOut1"),h={};if(this._lerpSnapshots(a,r,n,h),i<1){const c=b.SCENES.introIn?.logoScale??.4;h.logoScale=i*c}return{snapshot:h,logoPlaneOpacity:i}}_computeWaypointTarget(e){const t=this._sceneToSnapshot(e),o=(b.SCENES[e]??{}).logoPlaneOpacity??1;return{snapshot:t,logoPlaneOpacity:o}}_tickMode(){if(this._isDebugMode)return;if(this._mode.kind==="transitioning"){const t=(performance.now()-this._mode.startTime)/this._mode.durationMs;if(t>=1)this._mode=this._mode.toMode,this._updateDebugUI();else{const i=vt(Math.max(0,t)),o=this._mode.toMode.kind==="progressive"?this._computeProgressiveTarget():this._computeWaypointTarget(this._mode.toMode.scene),s={};this._lerpSnapshots(this._mode.fromSnapshot,o.snapshot,i,s),this._applySnapshotToParams(s),this.params.logoPlaneOpacity=o.logoPlaneOpacity,this._tickAutoAnims(),this._syncAllUniforms(),_.debug&&this._updateDebugUI(),_.debug&&this.gui?.controllersRecursive().forEach(n=>n.updateDisplay());return}}const e=this._mode.kind==="progressive"?this._computeProgressiveTarget():this._computeWaypointTarget(this._mode.scene);this._applySnapshotToParams(e.snapshot),this.params.logoPlaneOpacity=e.logoPlaneOpacity,this._tickAutoAnims(),this._syncAllUniforms(),_.debug&&this.gui?.controllersRecursive().forEach(t=>t.updateDisplay())}_tickAutoAnims(){const e=this.params.colorWaveMix;e>.01?this._sweepTween===null&&this._holdTimer===null&&this._startWaveCycle():(this._sweepTween!==null||this._holdTimer!==null)&&(this._killWaveTweens(),this._waveAnim.progress=-99999,this.u&&(this.u.uWaveProgress.value=-99999)),e>.05&&this.params.pattern==="logo"?(!this._breathTween&&this.params.logoBreathAmp>0&&(this._breathTween=T.fromTo(this._breathAnim,{offset:this._breathAnim.offset},{offset:this.params.logoBreathAmp,duration:1/Math.max(this.params.logoBreathSpeed,.01),ease:"sine.inOut",yoyo:!0,repeat:-1})),!this._floatTween&&this._floatAmpAnim.amp<.99&&this._tweenFloatAmp(1)):(this._breathTween&&(this._breathTween.kill(),this._breathTween=null,this._breathAnim.offset=0),this._floatAmpAnim.amp>.01&&this._tweenFloatAmp(0,.3))}_setMode(e,t=1){if(e.kind==="progressive"&&this._mode.kind==="progressive"||e.kind==="waypoint"&&this._mode.kind==="waypoint"&&this._mode.scene===e.scene)return;const o=this._snapshotParams(),s=e.kind==="waypoint"?b.SCENES[e.scene]?.pattern??"logo":"logo";s!==this.params.pattern&&(this.params.pattern=s,this._morphToPattern(s)),this._mode={kind:"transitioning",fromSnapshot:o,toMode:e,startTime:performance.now(),durationMs:t*1e3},this._updateDebugUI()}_setupIOM(){this._setupDebugWaypointUI(),this._updateDebugUI();const e=()=>{const s=this._scrollBpCache;return s.valid?_.scrollY<s.endScrollY:!0},t=document.querySelector("#Future");if(t){const s=_.iom.observe(t,(n,a)=>{e()||(a?this._setMode({kind:"waypoint",scene:"futureIn"}):n.boundingClientRect.top>=0&&this._setMode({kind:"progressive"}))},{rootMargin:"0px 0px -10% 0px",threshold:0});this.cleanupFns.push(s)}const i=document.querySelector("#Interview");if(i){const s=_.iom.observe(i,(n,a)=>{e()||(a?this._setMode({kind:"waypoint",scene:"interviewIn"}):n.boundingClientRect.top>=0&&this._setMode({kind:"waypoint",scene:"futureIn"}))},{rootMargin:"0px 0px -10% 0px",threshold:0});this.cleanupFns.push(s)}const o=document.querySelector(".join__title");if(o){const s=_.iom.observe(o,(n,a)=>{e()||(a?this._setMode({kind:"waypoint",scene:"joinIn"}):n.boundingClientRect.top>=0&&this._setMode({kind:"waypoint",scene:"interviewIn"}))},{threshold:0});this.cleanupFns.push(s)}}leave(){this._currentLogoScale=-1,this._mode={kind:"progressive"},this._destroyDebugWaypointUI(),this._sceneTween?.kill(),this._sceneTween=null,this._killWaveTweens(),this._stopLogoAnims(),this._morphTween?.kill(),this._morphTween=null,this._rotZTween?.kill(),this._rotZTween=null,this._rotYTween?.kill(),this._rotYTween=null,this._logoBlendTween?.kill(),this._logoBlendTween=null,this._logoPlaneFadeTween?.kill(),this._logoPlaneFadeTween=null,this._scaleTween?.kill(),this._scaleTween=null,this._destroyLogoPlane(),this._logoOverlayScene=null,this._logoTex?.dispose(),this._logoTex=null,this._restoreRender(),this._destroyComposer(),this._destroyParticles(),this._destroyLogoDecorations(),this._destroyGroup(),this._destroyGUI(),this.cleanupFns.forEach(e=>e()),this.cleanupFns=[]}onRaf(e){this.time+=e,this._tickMode();const t=e*60;this._updateGroupTransform(t),this._updateRafUniforms()}_updateGroupTransform(e){this.params.pattern!=="logo"&&(this.autoRotY+=this.params.autoRotateSpeed*e,this.autoRotY=W.euclideanModulo(this.autoRotY,Math.PI*2));const t=this.params.rotLerp,i=W.degToRad(this.params.rotXDeg),o=W.degToRad(this.params.rotYDeg)+this.autoRotY,s=W.degToRad(this.params.rotZDeg);this.currentRotX+=(i-this.currentRotX)*t;const n=(o-this.currentRotY+Math.PI*3)%(Math.PI*2)-Math.PI;if(this.currentRotY+=n*t,this.currentRotY=W.euclideanModulo(this.currentRotY,Math.PI*2),this.group){if(this.group.rotation.x=this.currentRotX,this.group.rotation.y=this.currentRotY,this.params.pattern==="logo"&&(this.autoRotZ=(this.autoRotZ+this.params.logoRotZSpeed*e)%(Math.PI*2)),!this._rotZTween){const m=((this.params.pattern==="logo"?this.autoRotZ:0)+s-this.currentRotZ+Math.PI*3)%(Math.PI*2)-Math.PI;this.currentRotZ+=m*t,this.currentRotZ=W.euclideanModulo(this.currentRotZ,Math.PI*2)}this.group.rotation.z=this.currentRotZ;let a=1;if(this._buildHeight>0){const m=this._buildHeight*.62*2,p=m*(this._logoAspect>0?this._logoAspect:1),u=Math.min(this.stage.stageSize.width/m,this.stage.stageSize.height/p),d=this.params.logoScale,v=d-this._currentLogoScale,M=this._scaleTween?.isActive()??!1;this._currentLogoScale<0||M?this._currentLogoScale=d:Math.abs(v)>.05?this._currentLogoScale+=v*.3:this._currentLogoScale+=v*.06,a=u*this._currentLogoScale,this._logoTargetScaleCache=a}const r=this._buildHeight>0?this.stage.stageSize.height/this._buildHeight:1,h=this._scaleAnim.val*a+(1-this._scaleAnim.val)*r,c=Math.sin(this.time*this.params.logoFloatSpeed)*this._floatAmpAnim.amp;this.group.position.y=c*this.params.logoFloatAmp*h+this._logoCenterOffsetY*this.params.logoMobileCenterBias*this._scaleAnim.val,this.group.scale.setScalar(h*(1+c*this.params.logoFloatScale))}}_updateRafUniforms(){if(this.bloomPass&&(this.bloomPass.strength=this.params.pattern==="logo"?this.params.bloomStrength+this._breathAnim.offset:this.params.bloomStrength),this.u&&(this.u.uTime.value=this.time,this.u.uScroll.value=_.scrollY,this._buildHeight>0)){const t=this._buildHeight*.62;t!==this._cachedLogoExtentSx&&(this.u.uLogoExtent?.value.set(t,t*this._logoAspect),this._cachedLogoExtentSx=t)}const e=this.ambientMat?.uniforms.uTime;if(e&&(e.value=this.time),this.u){const t=this.u.uCurrentGroup.value,i=this.u.uWaveProgress.value;this.ambientMat&&(this.ambientMat.uniforms.uCurrentGroup.value=t,this.ambientMat.uniforms.uWaveProgress.value=i)}}onResize(){const{width:e,height:t}=this.stage.stageSize;this.group&&this._buildHeight>0&&this.group.scale.setScalar(t/this._buildHeight),this.u&&this.u.uResolution.value.set(e,t),this.bgRT&&(this.bgRT.setSize(e,t),this.bgU?.uResolution.value.set(e,t)),this.composer&&this.composer.setSize(e,t),this.cau&&this.cau.uResolution.value.set(e,t),this.ou&&this.ou.uResolution.value.set(e,t);const i=this.ambientMat?.uniforms.uResolution;if(i&&i.value.set(e,t),this._decoBuiltSize.width>0){const o=this.ambientMat?.uniforms.uPosScale;o&&o.value.set(e/this._decoBuiltSize.width,t/this._decoBuiltSize.height);const s=this.ambientMat?.uniforms.uVSpread;s&&(s.value=t)}this._cacheScrollBreakpoints()}_cacheScrollBreakpoints(){this._updateLogoCenterOffset();const e=window.innerHeight,t=document.querySelector(".intro__title");if(!t){this._scrollBpCache.valid=!1;return}const i=ft(t),o=t.offsetHeight,s=i+o/2-e/2,n=s-e*.35;this._scrollBpCache.valid=!0,this._scrollBpCache.wh=e,this._scrollBpCache.fadeStartScrollY=0,this._scrollBpCache.fadeEndScrollY=e*.5,this._scrollBpCache.overlapScrollY=n,this._scrollBpCache.endScrollY=s}_updateLogoCenterOffset(){if(!_.isMobileLayout){this._logoCenterOffsetY=0;return}const e=document.getElementById("MobileFootNav")?.offsetHeight??0;this._logoCenterOffsetY=e*.5}_destroyGroup(){this.group&&this.stage.scene&&this.stage.scene.remove(this.group),this.group=null}_buildParticles(){const{count:e,baseSize:t}=this.params,{width:i,height:o}=this.stage.stageSize;this._buildHeight=o;const s=o*.62,n=this.params.pattern==="logo"?{...this.params,logoScale:1}:this.params,a=le(this.params.pattern,e,s,n,this._logoPixels,this._logoInnerPixels,this._logoAspect),r=new Float32Array(e),h=new Float32Array(e),c=new Float32Array(e*3),f=[{color:new g(this.params.colorGold),weight:.4},{color:new g(this.params.colorPurple),weight:.3},{color:new g(this.params.colorTeal),weight:.2},{color:new g(this.params.colorSilver),weight:.1}],m=f.reduce((p,u,d)=>(p.push((p[d-1]??0)+u.weight),p),[]);for(let p=0;p<e;p++){const u=p*3;r[p]=Math.random();const d=Math.random();d<.12?h[p]=t*(.15+Math.random()*.25):d<.82?h[p]=t*(.7+Math.random()*1.3):h[p]=t*(2.8+Math.random()*3.5);const v=Math.random();let M=0;for(let x=0;x<m.length;x++)if(v<(m[x]??1)){M=x;break}const C=(f[M]??f[0])?.color??new g("#ffffff");c[u]=C.r,c[u+1]=C.g,c[u+2]=C.b}this._morphAnim.t=1,this.params.renderMode==="disc"?this._buildDiscMesh(a,r,h,c,i,o):this._buildPointsMesh(a,r,h,c,i,o)}_buildPointsMesh(e,t,i,o,s,n){this.geometry=new ee,this.geometry.setAttribute("position",new B(e,3)),this.geometry.setAttribute("aPositionFrom",new B(new Float32Array(e),3)),this.geometry.setAttribute("aSeed",new B(t,1)),this.geometry.setAttribute("aSize",new B(i,1)),this.geometry.setAttribute("aColor",new B(o,3)),this.material=new P({vertexShader:Ie,fragmentShader:Oe,uniforms:{uTime:{value:0},uScroll:{value:0},uSpeed:{value:this.params.speed},uScrollStrength:{value:this.params.scrollStrength},uScrollWarpAmp:{value:this.params.scrollWarpAmp},uResolution:{value:new S(s,n)},uEmissive:{value:this.params.emissive},uTwinkleSpeed:{value:this.params.twinkleSpeed},uTwinkleIntensity:{value:this.params.twinkleIntensity},uDimAmount:{value:this.params.dimAmount},uDimSpeed:{value:this.params.dimSpeed},uDimDuty:{value:this.params.dimDuty},uFlareStrength:{value:this.params.flareStrength},uFlareSharpness:{value:this.params.flareSharpness},uFlareMinSize:{value:this.params.flareMinSize},uMotionWaveSpeed:{value:this.params.motionWaveSpeed},uMotionWaveFreq:{value:this.params.motionWaveFreq},uMotionWaveAmp:{value:this.params.motionWaveAmp},uFlowNoiseScale:{value:this.params.flowNoiseScale},uFlowNoiseSpeed:{value:this.params.flowNoiseSpeed},uFlowNoiseAmp:{value:this.params.flowNoiseAmp},uColorWaveMix:{value:this.params.colorWaveMix},uWaveNoiseScale:{value:this.params.waveNoiseScale},uWaveNoiseSpeed:{value:this.params.waveNoiseSpeed},uWaveNoiseAmp:{value:this.params.waveNoiseAmp},uParticleWaveWidth:{value:this.params.particleWaveWidth},uParticleWaveAmp:{value:this.params.particleWaveAmp},uParticleWaveBounce:{value:this.params.particleWaveBounce},uMorphT:{value:1},uBeadStyle:{value:this.params.beadStyle},uDriftAmp:{value:this.params.drift?1:0},uCurrentGroup:{value:b.INITIAL_GROUP},uWaveProgress:{value:-99999},uWaveBlendWidth:{value:this.params.waveBlendWidth},uWaveColors:{value:G(this.params)},uWaveEdgeBloom:{value:this.params.waveEdgeBloom},uCrossFade:{value:1-this.params.logoBlend},uParticleOpacity:{value:this.params.particleOpacity},uLogoTex:{value:this._logoTex},uBlendT:{value:this.params.logoBlend},uLogoExtent:{value:new S(1,1)}},transparent:!0,blending:Q,depthWrite:!1}),this.u=this.material.uniforms,this.deu=null,this.points=new ne(this.geometry,this.material),this.group?.add(this.points)}_buildDiscMesh(e,t,i,o,s,n){const a=this.params.count,r=this._buildDiscGeometry(e,t,i,o,a);this.geometry=r,this._buildDiscMaterial();const h=new j(r,this.material);this.points=h,this.group?.add(h)}_buildDiscGeometry(e,t,i,o,s){const n=new Re(1,1,this.params.discHeight,this.params.discSegments),a=new We;a.index=n.index,a.setAttribute("position",n.attributes.position),a.setAttribute("normal",n.attributes.normal),a.instanceCount=s,n.dispose();const r=new Float32Array(s);for(let c=0;c<s;c++)r[c]=Math.random()*Math.PI*2;a.setAttribute("aInstPos",new E(new Float32Array(e),3)),a.setAttribute("aInstPosFrom",new E(new Float32Array(e),3));const h=new Float32Array(i.length);for(let c=0;c<i.length;c++)h[c]=i[c]*.1;return a.setAttribute("aInstSeed",new E(t,1)),a.setAttribute("aInstSize",new E(h,1)),a.setAttribute("aInstColor",new E(o,3)),a.setAttribute("aInstRotY",new E(r,1)),a}_buildDiscMaterial(){this.material=new P({vertexShader:Ee,fragmentShader:ze,uniforms:{uTime:{value:0},uScroll:{value:0},uSpeed:{value:this.params.speed},uScrollStrength:{value:this.params.scrollStrength},uScrollWarpAmp:{value:this.params.scrollWarpAmp},uResolution:{value:new S(1,1)},uEmissive:{value:this.params.emissive},uTwinkleSpeed:{value:this.params.twinkleSpeed},uTwinkleIntensity:{value:this.params.twinkleIntensity},uDimAmount:{value:this.params.dimAmount},uDimSpeed:{value:this.params.dimSpeed},uDimDuty:{value:this.params.dimDuty},uFlareStrength:{value:0},uFlareSharpness:{value:0},uFlareMinSize:{value:0},uMotionWaveSpeed:{value:this.params.motionWaveSpeed},uMotionWaveFreq:{value:this.params.motionWaveFreq},uMotionWaveAmp:{value:this.params.motionWaveAmp},uFlowNoiseScale:{value:this.params.flowNoiseScale},uFlowNoiseSpeed:{value:this.params.flowNoiseSpeed},uFlowNoiseAmp:{value:this.params.flowNoiseAmp},uColorWaveMix:{value:this.params.colorWaveMix},uWaveNoiseScale:{value:this.params.waveNoiseScale},uWaveNoiseSpeed:{value:this.params.waveNoiseSpeed},uWaveNoiseAmp:{value:this.params.waveNoiseAmp},uParticleWaveWidth:{value:this.params.particleWaveWidth},uParticleWaveAmp:{value:this.params.particleWaveAmp},uParticleWaveBounce:{value:this.params.particleWaveBounce},uMorphT:{value:1},uBeadStyle:{value:0},uDriftAmp:{value:this.params.drift?1:0},uCurrentGroup:{value:b.INITIAL_GROUP},uWaveProgress:{value:-99999},uWaveBlendWidth:{value:this.params.waveBlendWidth},uWaveColors:{value:G(this.params)},uWaveEdgeBloom:{value:this.params.waveEdgeBloom},uCrossFade:{value:1-this.params.logoBlend},uParticleOpacity:{value:this.params.particleOpacity},uDiscScale:{value:this.params.discScale},uDiscTilt:{value:this.params.discTilt},uDiscRotSpeed:{value:this.params.discRotSpeed},uDiscLightDir:{value:new y(.45,.65,1).normalize()},uDiscAmbient:{value:this.params.discAmbient},uDiscSpecular:{value:this.params.discSpecular},uDiscStyle:{value:this.params.discStyle}},transparent:!0,blending:Q,depthWrite:!1,side:re}),this.u=this.material.uniforms,this.deu=this.material.uniforms}_startWaveCycle(){b.LOCK_TO_GREEN||(this._holdTimer=T.delayedCall(this.params.waveHoldDuration,()=>{this._runSweep()}))}_runSweep(){if(!this.u)return;const e=this.stage.stageSize.height*1.3,t=-this.params.waveBlendWidth;this._waveAnim.progress=t,this.u.uWaveProgress.value=t,this._sweepTween=T.to(this._waveAnim,{progress:e,duration:this.params.waveSweepDuration,ease:"sine.inOut",onUpdate:()=>{this.u&&(this.u.uWaveProgress.value=this._waveAnim.progress)},onComplete:()=>{this.waveGroupIndex=(this.waveGroupIndex+1)%4,this.u&&(this.u.uCurrentGroup.value=this.waveGroupIndex,this.u.uWaveProgress.value=-99999,this._waveAnim.progress=-99999),this._startWaveCycle()}})}_killWaveTweens(){this._sweepTween?.kill(),this._holdTimer?.kill(),this._sweepTween=null,this._holdTimer=null}_loadLogoTexture(){const e=new Image;e.onload=()=>{const i=document.createElement("canvas");i.width=2048,i.height=2048;const o=i.getContext("2d");o&&(o.drawImage(e,0,0,2048,2048),this._logoTex?.dispose(),this._logoTex=new Be(i),this._logoTex.needsUpdate=!0,this.u?.uLogoTex&&(this.u.uLogoTex.value=this._logoTex),this._buildHeight>0&&this._buildLogoPlane())},e.src="/kiwami-sauna-recruit/kiwami/recruit/assets/svg/logo-w.svg"}_buildLogoPlane(){if(this._destroyLogoPlane(),!this._logoTex||!this._logoOverlayScene||this._buildHeight===0)return;const t=this._buildHeight*.62*2,i=t*this._logoAspect,o=new ve(t,i),s=new pe({map:this._logoTex,transparent:!0,opacity:this.params.logoBlend,side:re,depthWrite:!1,depthTest:!1,toneMapped:!1});this._logoPlane=new j(o,s),this._logoPlane.matrixAutoUpdate=!1,this._logoOverlayScene.add(this._logoPlane)}_destroyLogoPlane(){this._logoPlane&&(this._logoOverlayScene?.remove(this._logoPlane),this._logoPlane.geometry.dispose(),this._logoPlane.material.dispose(),this._logoPlane=null)}_loadLogoPixels(){const e=_.webgl?.logoPixelCache;return e?(this._logoPixels=e.pixels.length>0?e.pixels:null,this._logoInnerPixels=e.innerPixels.length>0?e.innerPixels:null,this._logoAspect=e.aspect,Promise.resolve()):(_.webgl?.preloadLogoPixels()??Promise.resolve()).then(()=>{const t=_.webgl?.logoPixelCache;t&&(this._logoPixels=t.pixels.length>0?t.pixels:null,this._logoInnerPixels=t.innerPixels.length>0?t.innerPixels:null,this._logoAspect=t.aspect)})}_computeCurrentPositions(){const e=this.params.renderMode==="disc",t=e?"aInstPos":"position",i=e?"aInstPosFrom":"aPositionFrom",o=this.geometry.attributes[t],s=this.geometry.attributes[i],n=this._morphAnim.t,a=new Float32Array(this.params.count*3);for(let r=0;r<a.length;r++)a[r]=s.array[r]+(o.array[r]-s.array[r])*n;return a}_resetRotationForLogo(){this.params.autoRotateSpeed=0,this.params.rotXDeg=0,this.params.rotYDeg=0,this.autoRotY=0,this.autoRotZ=this.currentRotZ,this.currentRotX=0,this.currentRotY=0,this.group&&(this.group.rotation.x=0,this.group.rotation.y=0),this.gui?.controllersRecursive().forEach(e=>e.updateDisplay())}_morphToPattern(e){if(!this.geometry||!this.u)return;if(this._morphTween?.kill(),this._rotZTween?.kill(),this._rotZTween=null,this._rotYTween?.kill(),this._rotYTween=null,e==="logo"){this.params.rotXDeg=0,this.params.rotYDeg=0,this.autoRotZ=this.currentRotZ,this.currentRotX=0,this.group&&(this.group.rotation.x=0),_.debug&&this.gui?.controllersRecursive().forEach(m=>m.updateDisplay());const f=this.autoRotY>Math.PI?Math.PI*2:0;this._rotYTween=T.to(this,{autoRotY:f,duration:this.params.morphDuration,ease:"power1.inOut",onComplete:()=>{this.autoRotY=0,this._rotYTween=null}}),this._startLogoAnims(),this._tweenScale(1),this._fadeDecoIn()}else{this._stopLogoAnims(),this._tweenFloatAmp(0),this._tweenScale(0),this._fadeDecoOut(),this.autoRotY=W.euclideanModulo(this.currentRotY-W.degToRad(this.params.rotYDeg),Math.PI*2);const f=(0-this.currentRotZ+Math.PI*3)%(Math.PI*2)-Math.PI,m=this.currentRotZ+f;this._rotZTween=T.to(this,{currentRotZ:m,duration:this.params.morphDuration,ease:"power1.inOut",onComplete:()=>{this.currentRotZ=0,this._rotZTween=null}})}this._tweenDriftAmp(this.params.drift?1:0);const t=this.params.renderMode==="disc",i=t?"aInstPos":"position",o=t?"aInstPosFrom":"aPositionFrom",s=this._buildHeight*.62,n=e==="logo"?{...this.params,logoScale:1}:this.params,a=le(e,this.params.count,s,n,this._logoPixels,this._logoInnerPixels,this._logoAspect),r=this._computeCurrentPositions(),h=this.geometry.attributes[o];h.set(r),h.needsUpdate=!0;const c=this.geometry.attributes[i];c.set(a),c.needsUpdate=!0,this._morphAnim.t=0,this.u.uMorphT.value=0,this._morphTween=T.to(this._morphAnim,{t:1,duration:this.params.morphDuration,ease:"power2.inOut",onUpdate:()=>{this.u&&(this.u.uMorphT.value=this._morphAnim.t)}})}_tweenScale(e,t=this.params.morphDuration){this._scaleTween?.kill(),this._scaleTween=T.to(this._scaleAnim,{val:e,duration:t,ease:"power2.inOut"})}_tweenFloatAmp(e,t=this.params.morphDuration){this._floatTween?.kill(),this._floatTween=T.to(this._floatAmpAnim,{amp:e,duration:t,ease:"power2.inOut"})}setLogoBlend(e,t=1.5){this._logoBlendTween?.kill();const i=o=>{this.u?.uBlendT&&(this.u.uBlendT.value=o);const s=this.material?.uniforms.uCrossFade;s&&(s.value=1-o),this.params.logoBlend=o;const n=this._logoPlane?.material;n&&(n.opacity=o*this.params.logoPlaneOpacity)};if(t===0){this._logoBlendAnim.t=e,i(e);return}this._logoBlendAnim.t=this.u?.uBlendT?.value??this._logoBlendAnim.t,this._logoBlendTween=T.to(this._logoBlendAnim,{t:e,duration:t,ease:"power2.inOut",onUpdate:()=>i(this._logoBlendAnim.t)})}_tweenDriftAmp(e,t=1.5){this._driftTween?.kill(),this._driftAnim.amp=this.u?.uDriftAmp.value??this._driftAnim.amp,this._driftTween=T.to(this._driftAnim,{amp:e,duration:t,ease:"power2.inOut",onUpdate:()=>{this.u&&(this.u.uDriftAmp.value=this._driftAnim.amp)}})}_startLogoAnims(){this._stopLogoAnims(),this.params.logoBreathAmp>0&&(this._breathTween=T.fromTo(this._breathAnim,{offset:-this.params.logoBreathAmp},{offset:this.params.logoBreathAmp,duration:1/Math.max(this.params.logoBreathSpeed,.01),ease:"sine.inOut",yoyo:!0,repeat:-1})),this._tweenFloatAmp(1)}_stopLogoAnims(){this._breathTween?.kill(),this._breathTween=null,this._breathAnim.offset=0,this._floatTween?.kill(),this._floatTween=null}_fadeDecoIn(){if(this._decoFadeTween?.kill(),!this.logoDecoGroup)return;this.logoDecoGroup.visible=!0;const e=this.ambientMat?.uniforms.uOpacity;e&&(e.value=0);const t={amb:0},i=this.params.logoAmbientOpacity;this._decoFadeTween=T.to(t,{amb:i,duration:1,ease:"power2.out",onUpdate:()=>{e&&(e.value=t.amb)}})}_fadeDecoOut(){if(this._decoFadeTween?.kill(),!this.logoDecoGroup?.visible)return;const e=this.ambientMat?.uniforms.uOpacity,t={amb:e?.value??0};this._decoFadeTween=T.to(t,{amb:0,duration:.8,ease:"power2.in",onUpdate:()=>{e&&(e.value=t.amb)},onComplete:()=>{this.logoDecoGroup&&(this.logoDecoGroup.visible=!1),e&&(e.value=this.params.logoAmbientOpacity)}})}_buildLogoDecorations(){this._destroyLogoDecorations(),this.logoDecoGroup=new ae,this.logoDecoGroup.visible=this.params.pattern==="logo",this.stage.scene?.add(this.logoDecoGroup),this._buildAmbientParticles();const{width:e,height:t}=this.stage.stageSize;this._decoBuiltSize={width:e,height:t}}_destroyLogoDecorations(){this._decoFadeTween?.kill(),this._decoFadeTween=null,this.logoDecoGroup&&this.stage.scene&&this.stage.scene.remove(this.logoDecoGroup),this.ambientPoints?.geometry.dispose(),this.ambientMat?.dispose(),this.logoDecoGroup=null,this.ambientPoints=null,this.ambientMat=null}_buildDecoColors(e){const t=[{color:new g(this.params.colorGold),weight:.4},{color:new g(this.params.colorPurple),weight:.3},{color:new g(this.params.colorTeal),weight:.2},{color:new g(this.params.colorSilver),weight:.1}],i=t.reduce((s,n,a)=>(s.push((s[a-1]??0)+n.weight),s),[]),o=new Float32Array(e*3);for(let s=0;s<e;s++){const n=Math.random();let a=0;for(let h=0;h<i.length;h++)if(n<(i[h]??1)){a=h;break}const r=(t[a]??t[0]).color;o[s*3]=r.r,o[s*3+1]=r.g,o[s*3+2]=r.b}return o}_buildAmbientParticles(){const e=this.params.logoAmbientCount,{width:t,height:i}=this.stage.stageSize,o=new Float32Array(e*3),s=new Float32Array(e);for(let r=0;r<e;r++){const h=r*3;o[h]=(Math.random()-.5)*t,o[h+1]=(Math.random()-.5)*i,o[h+2]=(Math.random()-.5)*80,s[r]=Math.random()}const n=this._buildDecoColors(e),a=new ee;a.setAttribute("position",new B(o,3)),a.setAttribute("aSeed",new B(s,1)),a.setAttribute("aColor",new B(n,3)),this.ambientMat=new P({vertexShader:pt,fragmentShader:dt,uniforms:{uTime:{value:this.time},uSize:{value:this.params.logoAmbientSize},uSpeed:{value:this.params.logoAmbientSpeed},uDrift:{value:this.params.logoAmbientDrift},uOpacity:{value:this.params.logoAmbientOpacity},uVSpread:{value:i},uPosScale:{value:new S(1,1)},uResolution:{value:new S(t,i)},uEmissive:{value:this.params.emissive},uTwinkleSpeed:{value:this.params.twinkleSpeed},uTwinkleIntensity:{value:this.params.twinkleIntensity},uDimAmount:{value:this.params.dimAmount},uDimSpeed:{value:this.params.dimSpeed},uDimDuty:{value:this.params.dimDuty},uFlareStrength:{value:this.params.flareStrength},uFlareSharpness:{value:this.params.flareSharpness},uFlareMinSize:{value:this.params.flareMinSize},uColorWaveMix:{value:this.params.colorWaveMix},uCurrentGroup:{value:this.waveGroupIndex},uWaveProgress:{value:this._waveAnim.progress},uWaveBlendWidth:{value:this.params.waveBlendWidth},uWaveColors:{value:G(this.params)}},transparent:!0,blending:Q,depthWrite:!1}),this.ambientPoints=new ne(a,this.ambientMat),this.ambientPoints.visible=this.params.logoAmbientOn,this.logoDecoGroup?.add(this.ambientPoints)}_destroyParticles(){this.points&&this.group&&this.group.remove(this.points),this.geometry?.dispose(),this.material?.dispose(),this.points=null,this.geometry=null,this.material=null,this.u=null,this.deu=null}_buildComposer(){const{renderer:e,scene:t,camera:i}=this.stage;if(!e||!t||!i)return;const o=ut({renderer:e,scene:t,camera:i,stageSize:this.stage.stageSize},this.params,(s,n)=>{this.bgTexture=s,n.uBgTexture.value=s,n.uHasTexture.value=1;const a=s.image;n.uImageAspect.value=a.naturalWidth/a.naturalHeight});if(this.bgRT=o.bgRT,this.bgScene=o.bgScene,this.bgCamera=o.bgCamera,this.bgMesh=o.bgMesh,this.bgU=o.bgU,this.composer=o.composer,this.lumCapPass=o.lumCapPass,this.bloomPass=o.bloomPass,this.afterimagePass=o.afterimagePass,this.finalCompositePass=o.finalCompositePass,this.ou=o.ou,this.cau=o.cau,this.originalSceneBackground=o.originalSceneBackground,this.savedToneMapping=o.savedToneMapping,this.savedToneMappingExposure=o.savedToneMappingExposure,_.isMobileLayout){o.afterimagePass.enabled=!1;const{width:s,height:n}=this.stage.stageSize;o.bloomPass.resolution.set(Math.floor(s*.5),Math.floor(n*.5))}}_destroyComposer(){ct({renderer:this.stage.renderer,scene:this.stage.scene},this.originalSceneBackground,this.savedToneMapping,this.savedToneMappingExposure),this.originalSceneBackground=null,ht(this.bgTexture,this.bgMesh,this.bgRT,this.composer),this.bgTexture=null,this.bgMesh=null,this.bgRT=null,this.bgScene=null,this.bgCamera=null,this.bgU=null,this.composer=null,this.lumCapPass=null,this.bloomPass=null,this.afterimagePass=null,this.finalCompositePass=null,this.cau=null,this.ou=null}_overrideRender(){this.originalOnRender=this.stage.onRender.bind(this.stage),this.stage.onRender=()=>{const{renderer:e,scene:t}=this.stage;e&&this.bgScene&&this.bgCamera&&this.bgRT&&(e.setRenderTarget(this.bgRT),e.render(this.bgScene,this.bgCamera),e.setRenderTarget(null)),t&&(t.background=this.params.bgBypassEffects?null:this.bgRT?.texture??null),this.composer?.render();const i=this.stage.camera;if(e&&i&&this._logoOverlayScene&&this._logoPlane&&this.group){this.group.matrixWorld.decompose(this._planeMatrixPos,this._planeMatrixRot,this._planeMatrixSca);const o=this._logoTargetScaleCache;this._planeMatrixSca.set(o,o,o),this._logoPlane.matrix.compose(this._planeMatrixPos,this._planeMatrixRot,this._planeMatrixSca),this._logoPlane.matrixWorldNeedsUpdate=!0,e.autoClear=!1,e.render(this._logoOverlayScene,i.instance),e.autoClear=!0}}}_restoreRender(){this.originalOnRender&&(this.stage.onRender=this.originalOnRender,this.originalOnRender=null)}async _setupGUI(){if(!_.debug)return;const{setupHomeWebglGui:e}=await Fe(async()=>{const{setupHomeWebglGui:t}=await import("./HomeWebglGui.BDPE8aNV.js");return{setupHomeWebglGui:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));this.gui=e({params:this.params,scenes:b.SCENES,getScene:()=>this.stage.scene,getRenderer:()=>this.stage.renderer,getBgRT:()=>this.bgRT,getBgU:()=>this.bgU,getOu:()=>this.ou,getU:()=>this.u,getDeu:()=>this.deu,getCau:()=>this.cau,getBloomPass:()=>this.bloomPass,getAfterimagePass:()=>this.afterimagePass,getLumCapPass:()=>this.lumCapPass,getFinalCompositePass:()=>this.finalCompositePass,getAmbientMat:()=>this.ambientMat,getAmbientPoints:()=>this.ambientPoints,onApplyScene:t=>this._applyScene(t),onMorphToPattern:t=>this._morphToPattern(t),onRebuild:()=>this._rebuild(),onBuildLogoDecorations:()=>this._buildLogoDecorations(),onTweenDriftAmp:t=>this._tweenDriftAmp(t),onSetLogoBlend:(t,i)=>this.setLogoBlend(t,i),onRunSweep:()=>this._runSweep(),onResetRotation:()=>this._onResetRotation(),onLogoBreathAmpChange:()=>this._onLogoBreathAmpChange(),onDebugModeChange:t=>this.setDebugMode(t)})}_destroyGUI(){this.gui?.destroy(),this.gui=null}_onResetRotation(){this.params.rotXDeg=0,this.params.rotYDeg=0,this.autoRotY=0,this.currentRotX=0,this.currentRotY=0}_onLogoBreathAmpChange(){this.params.pattern==="logo"&&(this._breathTween?.kill(),this._breathTween=null,this._breathAnim.offset=0,this.params.logoBreathAmp>0&&(this._breathTween=T.fromTo(this._breathAnim,{offset:-this.params.logoBreathAmp},{offset:this.params.logoBreathAmp,duration:1/Math.max(this.params.logoBreathSpeed,.01),ease:"sine.inOut",yoyo:!0,repeat:-1})))}_syncAllUniforms(){const e=this.params;if(this.u&&(this.u.uSpeed.value=e.speed,this.u.uEmissive.value=e.emissive,this.u.uColorWaveMix.value=e.colorWaveMix,this.u.uWaveBlendWidth.value=e.waveBlendWidth,this.u.uWaveEdgeBloom.value=e.waveEdgeBloom,this.u.uParticleWaveWidth.value=e.particleWaveWidth,this.u.uParticleWaveAmp.value=e.particleWaveAmp,this.u.uParticleWaveBounce.value=e.particleWaveBounce,this.u.uWaveNoiseScale.value=e.waveNoiseScale,this.u.uWaveNoiseSpeed.value=e.waveNoiseSpeed,this.u.uWaveNoiseAmp.value=e.waveNoiseAmp,this.u.uWaveColors.value=G(e),this.u.uTwinkleSpeed.value=e.twinkleSpeed,this.u.uTwinkleIntensity.value=e.twinkleIntensity,this.u.uDimAmount.value=e.dimAmount,this.u.uDimSpeed.value=e.dimSpeed,this.u.uDimDuty.value=e.dimDuty,this.u.uFlareStrength.value=e.flareStrength,this.u.uFlareSharpness.value=e.flareSharpness,this.u.uFlareMinSize.value=e.flareMinSize,this.u.uScrollStrength.value=e.scrollStrength,this.u.uScrollWarpAmp.value=e.scrollWarpAmp,this.u.uMotionWaveSpeed.value=e.motionWaveSpeed,this.u.uMotionWaveFreq.value=e.motionWaveFreq,this.u.uMotionWaveAmp.value=e.motionWaveAmp,this.u.uFlowNoiseScale.value=e.flowNoiseScale,this.u.uFlowNoiseSpeed.value=e.flowNoiseSpeed,this.u.uFlowNoiseAmp.value=e.flowNoiseAmp,this.u.uBeadStyle.value=e.beadStyle,this.u.uParticleOpacity.value=e.particleOpacity),this.bloomPass&&(this.bloomPass.strength=e.bloomStrength,this.bloomPass.radius=e.bloomRadius,this.bloomPass.threshold=e.bloomThreshold),this.lumCapPass){const o=this.lumCapPass.uniforms.uLumCap;o&&(o.value=e.lumCap)}if(this.afterimagePass){const o=this.afterimagePass.uniforms;o.damp.value=e.motionBlurDamp}if(this.deu&&(this.deu.uDiscStyle.value=e.discStyle,this.deu.uDiscScale.value=e.discScale,this.deu.uDiscTilt.value=e.discTilt,this.deu.uDiscRotSpeed.value=e.discRotSpeed,this.deu.uDiscAmbient.value=e.discAmbient,this.deu.uDiscSpecular.value=e.discSpecular),this.ambientMat){const o=this.ambientMat.uniforms;o.uColorWaveMix.value=e.colorWaveMix,o.uWaveColors.value=G(e),o.uEmissive.value=e.emissive,o.uTwinkleSpeed.value=e.twinkleSpeed,o.uTwinkleIntensity.value=e.twinkleIntensity,o.uDimAmount.value=e.dimAmount,o.uDimSpeed.value=e.dimSpeed,o.uDimDuty.value=e.dimDuty,o.uFlareStrength.value=e.flareStrength,o.uFlareSharpness.value=e.flareSharpness,o.uFlareMinSize.value=e.flareMinSize}if(this.ou&&(this.ou.uCoverOpacity.value=e.coverOpacity),this.bgU&&(this.bgU.uVisible.value=e.bgImageOpacity),this.finalCompositePass){this.finalCompositePass.uniforms.uBgAdd.value=e.bgBypassEffects?1:0,this.finalCompositePass.uniforms.uBgImageOpacity.value=e.bgImageOpacity;const o=this._colorA.set(e.sceneBgColor);this.finalCompositePass.uniforms.uSceneBgColor.value.set(o.r,o.g,o.b);const s=this._colorA.set(e.bgColor);this.finalCompositePass.uniforms.uFallbackColor.value.set(s.r,s.g,s.b)}this.stage.renderer&&(this.stage.renderer.toneMappingExposure=e.exposure),this.u?.uBlendT&&(this.u.uBlendT.value=e.logoBlend);const t=this.material?.uniforms.uCrossFade;t&&(t.value=1-e.logoBlend);const i=this._logoPlane?.material;i&&(i.opacity=e.logoBlend*e.logoPlaneOpacity)}_applySceneImmediate(e){this._sceneTween?.kill(),this._sceneTween=null;const{pattern:t,...i}=e;t&&t!==this.params.pattern&&(this.params.pattern=t);const o=this.params;for(const[s,n]of Object.entries(i))o[s]=n;this._syncAllUniforms(),i.colorWaveMix===0&&(this._killWaveTweens(),this._waveAnim.progress=-99999,this.u&&(this.u.uWaveProgress.value=-99999),this._breathTween?.kill(),this._breathTween=null,this._breathAnim.offset=0,this._floatTween?.kill(),this._floatTween=null,this._floatAmpAnim.amp=0)}_applyScene(e,t=1){let i=null;for(const n of Object.keys(b.SCENES))if(b.SCENES[n]===e){i=n;break}if(i){const n=i==="introIn"||i==="introOut1"?{kind:"progressive"}:{kind:"waypoint",scene:i};this._setMode(n,t);return}const{pattern:o,...s}=e;o&&o!==this.params.pattern&&(this.params.pattern=o,this._morphToPattern(o)),Object.assign(this.params,s),this._syncAllUniforms()}_rebuild(){this._destroyParticles(),this._buildParticles(),this._buildLogoPlane(),this._updateDecoColors()}_updateDecoColors(){if(this.ambientPoints){const e=this._buildDecoColors(this.params.logoAmbientCount),t=this.ambientPoints.geometry.attributes.aColor;t.set(e),t.needsUpdate=!0}}}const bt=Object.freeze(Object.defineProperty({__proto__:null,HomeWebgl:b},Symbol.toStringTag,{value:"Module"}));export{bt as H,G as b};
