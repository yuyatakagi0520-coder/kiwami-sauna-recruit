const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeWebgl.QOKi0UKI.js","assets/BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js","assets/Common.B66LcCm3.js","assets/index.Z_5btCb6.css","assets/BasePageWebgl.4pZlS9W1.js","assets/GradationWebgl.DaZDu3z5.js"])))=>i.map(i=>d[i]);
import{U as xt,c as ar,N as Mt,S as rr,C as Qe,F as xa,M as Qt,V as Be,R as or,e as Ze,w as Ye,a as ut,l as fi,b as Ma,W as di,d as Tt,f as it,L as $t,H as Ft,D as bt,B as _t,g as ln,h as An,p as sr,i as Rn,j as ui,k as cr,m as Lt,O as Ta,n as $e,E as lr,o as pt,P as cn,A as fr,q as Un,r as Ct,s as Zt,t as Jt,u as fn,v as kt,x as Mn,y as dr,z as ur,G as dn,I as mt,J as qn,K as Kt,Q as pi,T as pr,X as hr,Y as tn,Z as mr,_ as _r,$ as gr,a0 as vr,a1 as Sr,a2 as Er,a3 as xr,a4 as Mr,a5 as Tr,a6 as Ar,a7 as Rr,a8 as br,a9 as Cr,aa as Pr,ab as Lr,ac as Dr,ad as Ur,ae as wn,af as mn,ag as wr,ah as Wt,ai as Ir,aj as Nr,ak as Jn,al as yr,am as jn,an as Fr,ao as Or,ap as Br,aq as Gr,ar as Oe,as as Hr,at as Vr,au as Dt,av as vn,aw as Sn,ax as Wr,ay as Pt,az as on,aA as Nt,aB as zr,aC as Aa,aD as Ra,aE as ba,aF as Tn,aG as Ca,aH as Pa,aI as La,aJ as Da,aK as kr,aL as Xr,aM as Yr,aN as qr,aO as Ua,aP as Kr,aQ as $r,aR as Zr,aS as In,aT as Nn,aU as yn,aV as Fn,aW as hi,aX as mi,aY as _i,aZ as gi,a_ as vi,a$ as Si,b0 as Ei,b1 as xi,b2 as Mi,b3 as Ti,b4 as Ai,b5 as Ri,b6 as bi,b7 as Ci,b8 as Pi,b9 as Li,ba as Di,bb as Ui,bc as wi,bd as Ii,be as Ni,bf as yi,bg as Fi,bh as Oi,bi as Bi,bj as Gi,bk as Hi,bl as Vi,bm as Wi,bn as zi,bo as ki,bp as Xi,bq as Qr,br as Jr,bs as jr,bt as eo,bu as to,bv as no,bw as io,bx as ao,by as Yi,bz as ro,bA as En,bB as oo,bC as qi,bD as Ki,bE as $i,bF as wa,bG as so,bH as bn,bI as co,bJ as lo,bK as Ia,bL as ei,bM as Kn,bN as Na,bO as ya,bP as fo,bQ as Fa,bR as Oa,bS as Ba,bT as Ga,bU as Ha,bV as Va,bW as Wa,bX as Zi,bY as za,bZ as On,b_ as Bn,b$ as uo,c0 as po,c1 as Qi,c2 as dt,c3 as ho,c4 as un,c5 as jt,c6 as mo,c7 as _o,c8 as go,c9 as vo,ca as So,cb as Eo,cc as xo,cd as Mo,ce as To,cf as Ao,cg as Ro,ch as Gn}from"./BaseLayout.astro_astro_type_script_index_0_lang.B7sbnMRP.js";import{M as $n,c as zt,U as bo}from"./Common.B66LcCm3.js";/* empty css                       *//**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ka(){let e=null,n=!1,t=null,i=null;function l(r,d){t(r,d),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Co(e){const n=new WeakMap;function t(m,P){const T=m.array,O=m.usage,L=T.byteLength,p=e.createBuffer();e.bindBuffer(P,p),e.bufferData(P,T,O),m.onUploadCallback();let v;if(T instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&T instanceof Float16Array)v=e.HALF_FLOAT;else if(T instanceof Uint16Array)m.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(T instanceof Int16Array)v=e.SHORT;else if(T instanceof Uint32Array)v=e.UNSIGNED_INT;else if(T instanceof Int32Array)v=e.INT;else if(T instanceof Int8Array)v=e.BYTE;else if(T instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(T instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+T);return{buffer:p,type:v,bytesPerElement:T.BYTES_PER_ELEMENT,version:m.version,size:L}}function i(m,P,T){const O=P.array,L=P.updateRanges;if(e.bindBuffer(T,m),L.length===0)e.bufferSubData(T,0,O);else{L.sort((v,E)=>v.start-E.start);let p=0;for(let v=1;v<L.length;v++){const E=L[p],w=L[v];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++p,L[p]=w)}L.length=p+1;for(let v=0,E=L.length;v<E;v++){const w=L[v];e.bufferSubData(T,w.start*O.BYTES_PER_ELEMENT,O,w.start,w.count)}P.clearUpdateRanges()}P.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),n.get(m)}function r(m){m.isInterleavedBufferAttribute&&(m=m.data);const P=n.get(m);P&&(e.deleteBuffer(P.buffer),n.delete(m))}function d(m,P){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const O=n.get(m);(!O||O.version<m.version)&&n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const T=n.get(m);if(T===void 0)n.set(m,t(m,P));else if(T.version<m.version){if(T.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(T.buffer,m,P),T.version=m.version}}return{get:l,remove:r,update:d}}var Po=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Do=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Io=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,No=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Oo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Go=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ho=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ko=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ko=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$o=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,es=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ts=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ns=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,is=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,as="gl_FragColor = linearToOutputTexel( gl_FragColor );",rs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,os=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ss=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cs=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ls=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ds=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,us=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ps=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ms=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_s=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vs=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ss=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Es=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ms=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ts=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,As=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bs=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ls=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ds=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Us=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ws=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Is=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ns=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ys=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Os=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ws=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ks=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ys=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ks=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$s=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Js=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,js=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ec=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ic=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ac=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_c=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ec=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ac=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ic=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Oc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$c=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,el=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,il=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,al=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ol=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Po,alphahash_pars_fragment:Lo,alphamap_fragment:Do,alphamap_pars_fragment:Uo,alphatest_fragment:wo,alphatest_pars_fragment:Io,aomap_fragment:No,aomap_pars_fragment:yo,batching_pars_vertex:Fo,batching_vertex:Oo,begin_vertex:Bo,beginnormal_vertex:Go,bsdfs:Ho,iridescence_fragment:Vo,bumpmap_pars_fragment:Wo,clipping_planes_fragment:zo,clipping_planes_pars_fragment:ko,clipping_planes_pars_vertex:Xo,clipping_planes_vertex:Yo,color_fragment:qo,color_pars_fragment:Ko,color_pars_vertex:$o,color_vertex:Zo,common:Qo,cube_uv_reflection_fragment:Jo,defaultnormal_vertex:jo,displacementmap_pars_vertex:es,displacementmap_vertex:ts,emissivemap_fragment:ns,emissivemap_pars_fragment:is,colorspace_fragment:as,colorspace_pars_fragment:rs,envmap_fragment:os,envmap_common_pars_fragment:ss,envmap_pars_fragment:cs,envmap_pars_vertex:ls,envmap_physical_pars_fragment:Es,envmap_vertex:fs,fog_vertex:ds,fog_pars_vertex:us,fog_fragment:ps,fog_pars_fragment:hs,gradientmap_pars_fragment:ms,lightmap_pars_fragment:_s,lights_lambert_fragment:gs,lights_lambert_pars_fragment:vs,lights_pars_begin:Ss,lights_toon_fragment:xs,lights_toon_pars_fragment:Ms,lights_phong_fragment:Ts,lights_phong_pars_fragment:As,lights_physical_fragment:Rs,lights_physical_pars_fragment:bs,lights_fragment_begin:Cs,lights_fragment_maps:Ps,lights_fragment_end:Ls,logdepthbuf_fragment:Ds,logdepthbuf_pars_fragment:Us,logdepthbuf_pars_vertex:ws,logdepthbuf_vertex:Is,map_fragment:Ns,map_pars_fragment:ys,map_particle_fragment:Fs,map_particle_pars_fragment:Os,metalnessmap_fragment:Bs,metalnessmap_pars_fragment:Gs,morphinstance_vertex:Hs,morphcolor_vertex:Vs,morphnormal_vertex:Ws,morphtarget_pars_vertex:zs,morphtarget_vertex:ks,normal_fragment_begin:Xs,normal_fragment_maps:Ys,normal_pars_fragment:qs,normal_pars_vertex:Ks,normal_vertex:$s,normalmap_pars_fragment:Zs,clearcoat_normal_fragment_begin:Qs,clearcoat_normal_fragment_maps:Js,clearcoat_pars_fragment:js,iridescence_pars_fragment:ec,opaque_fragment:tc,packing:nc,premultiplied_alpha_fragment:ic,project_vertex:ac,dithering_fragment:rc,dithering_pars_fragment:oc,roughnessmap_fragment:sc,roughnessmap_pars_fragment:cc,shadowmap_pars_fragment:lc,shadowmap_pars_vertex:fc,shadowmap_vertex:dc,shadowmask_pars_fragment:uc,skinbase_vertex:pc,skinning_pars_vertex:hc,skinning_vertex:mc,skinnormal_vertex:_c,specularmap_fragment:gc,specularmap_pars_fragment:vc,tonemapping_fragment:Sc,tonemapping_pars_fragment:Ec,transmission_fragment:xc,transmission_pars_fragment:Mc,uv_pars_fragment:Tc,uv_pars_vertex:Ac,uv_vertex:Rc,worldpos_vertex:bc,background_vert:Cc,background_frag:Pc,backgroundCube_vert:Lc,backgroundCube_frag:Dc,cube_vert:Uc,cube_frag:wc,depth_vert:Ic,depth_frag:Nc,distance_vert:yc,distance_frag:Fc,equirect_vert:Oc,equirect_frag:Bc,linedashed_vert:Gc,linedashed_frag:Hc,meshbasic_vert:Vc,meshbasic_frag:Wc,meshlambert_vert:zc,meshlambert_frag:kc,meshmatcap_vert:Xc,meshmatcap_frag:Yc,meshnormal_vert:qc,meshnormal_frag:Kc,meshphong_vert:$c,meshphong_frag:Zc,meshphysical_vert:Qc,meshphysical_frag:Jc,meshtoon_vert:jc,meshtoon_frag:el,points_vert:tl,points_frag:nl,shadow_vert:il,shadow_frag:al,sprite_vert:rl,sprite_frag:ol},re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Et={basic:{uniforms:dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:dt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:dt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:dt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:dt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:dt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:dt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:dt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:dt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:dt([re.common,re.displacementmap,{referencePosition:{value:new Be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:dt([re.lights,re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Et.physical={uniforms:dt([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const _n={r:0,b:0,g:0},Gt=new Na,sl=new Qt;function cl(e,n,t,i,l,r){const d=new Qe(0);let m=l===!0?0:1,P,T,O=null,L=0,p=null;function v(g){let A=g.isScene===!0?g.background:null;if(A&&A.isTexture){const x=g.backgroundBlurriness>0;A=n.get(A,x)}return A}function E(g){let A=!1;const x=v(g);x===null?c(d,m):x&&x.isColor&&(c(x,1),A=!0);const y=e.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function w(g,A){const x=v(A);x&&(x.isCubeTexture||x.mapping===bn)?(T===void 0&&(T=new Lt(new ei(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Kn(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(y,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(T)),Gt.copy(A.backgroundRotation),Gt.x*=-1,Gt.y*=-1,Gt.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gt.y*=-1,Gt.z*=-1),T.material.uniforms.envMap.value=x,T.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,T.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,T.material.uniforms.backgroundRotation.value.setFromMatrix4(sl.makeRotationFromEuler(Gt)),T.material.toneMapped=it.getTransfer(x.colorSpace)!==$e,(O!==x||L!==x.version||p!==e.toneMapping)&&(T.material.needsUpdate=!0,O=x,L=x.version,p=e.toneMapping),T.layers.enableAll(),g.unshift(T,T.geometry,T.material,0,0,null)):x&&x.isTexture&&(P===void 0&&(P=new Lt(new Da(2,2),new Dt({name:"BackgroundMaterial",uniforms:Kn(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),P.geometry.deleteAttribute("normal"),Object.defineProperty(P.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(P)),P.material.uniforms.t2D.value=x,P.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,P.material.toneMapped=it.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),P.material.uniforms.uvTransform.value.copy(x.matrix),(O!==x||L!==x.version||p!==e.toneMapping)&&(P.material.needsUpdate=!0,O=x,L=x.version,p=e.toneMapping),P.layers.enableAll(),g.unshift(P,P.geometry,P.material,0,0,null))}function c(g,A){g.getRGB(_n,Ia(e)),t.buffers.color.setClear(_n.r,_n.g,_n.b,A,r)}function o(){T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0),P!==void 0&&(P.geometry.dispose(),P.material.dispose(),P=void 0)}return{getClearColor:function(){return d},setClearColor:function(g,A=1){d.set(g),m=A,c(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(g){m=g,c(d,m)},render:E,addToRenderList:w,dispose:o}}function ll(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=p(null);let r=l,d=!1;function m(b,V,k,z,Y){let B=!1;const F=L(b,z,k,V);r!==F&&(r=F,T(r.object)),B=v(b,z,k,Y),B&&E(b,z,k,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,x(b,V,k,z),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function P(){return e.createVertexArray()}function T(b){return e.bindVertexArray(b)}function O(b){return e.deleteVertexArray(b)}function L(b,V,k,z){const Y=z.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const F=b.isInstancedMesh===!0?b.id:0;let ie=B[F];ie===void 0&&(ie={},B[F]=ie);let ae=ie[k.id];ae===void 0&&(ae={},ie[k.id]=ae);let Me=ae[Y];return Me===void 0&&(Me=p(P()),ae[Y]=Me),Me}function p(b){const V=[],k=[],z=[];for(let Y=0;Y<t;Y++)V[Y]=0,k[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:z,object:b,attributes:{},index:null}}function v(b,V,k,z){const Y=r.attributes,B=V.attributes;let F=0;const ie=k.getAttributes();for(const ae in ie)if(ie[ae].location>=0){const Ae=Y[ae];let he=B[ae];if(he===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),Ae===void 0||Ae.attribute!==he||he&&Ae.data!==he.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function E(b,V,k,z){const Y={},B=V.attributes;let F=0;const ie=k.getAttributes();for(const ae in ie)if(ie[ae].location>=0){let Ae=B[ae];Ae===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor));const he={};he.attribute=Ae,Ae&&Ae.data&&(he.data=Ae.data),Y[ae]=he,F++}r.attributes=Y,r.attributesNum=F,r.index=z}function w(){const b=r.newAttributes;for(let V=0,k=b.length;V<k;V++)b[V]=0}function c(b){o(b,0)}function o(b,V){const k=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;k[b]=1,z[b]===0&&(e.enableVertexAttribArray(b),z[b]=1),Y[b]!==V&&(e.vertexAttribDivisor(b,V),Y[b]=V)}function g(){const b=r.newAttributes,V=r.enabledAttributes;for(let k=0,z=V.length;k<z;k++)V[k]!==b[k]&&(e.disableVertexAttribArray(k),V[k]=0)}function A(b,V,k,z,Y,B,F){F===!0?e.vertexAttribIPointer(b,V,k,Y,B):e.vertexAttribPointer(b,V,k,z,Y,B)}function x(b,V,k,z){w();const Y=z.attributes,B=k.getAttributes(),F=V.defaultAttributeValues;for(const ie in B){const ae=B[ie];if(ae.location>=0){let Me=Y[ie];if(Me===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),Me!==void 0){const Ae=Me.normalized,he=Me.itemSize,Ne=n.get(Me);if(Ne===void 0)continue;const Je=Ne.buffer,je=Ne.type,X=Ne.bytesPerElement,j=je===e.INT||je===e.UNSIGNED_INT||Me.gpuType===Ua;if(Me.isInterleavedBufferAttribute){const ne=Me.data,Le=ne.stride,Te=Me.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<ae.locationSize;be++)o(ae.location+be,ne.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<ae.locationSize;be++)c(ae.location+be);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let be=0;be<ae.locationSize;be++)A(ae.location+be,he/ae.locationSize,je,Ae,Le*X,(Te+he/ae.locationSize*be)*X,j)}else{if(Me.isInstancedBufferAttribute){for(let ne=0;ne<ae.locationSize;ne++)o(ae.location+ne,Me.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ne=0;ne<ae.locationSize;ne++)c(ae.location+ne);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let ne=0;ne<ae.locationSize;ne++)A(ae.location+ne,he/ae.locationSize,je,Ae,he*X,he/ae.locationSize*ne*X,j)}}else if(F!==void 0){const Ae=F[ie];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(ae.location,Ae);break;case 3:e.vertexAttrib3fv(ae.location,Ae);break;case 4:e.vertexAttrib4fv(ae.location,Ae);break;default:e.vertexAttrib1fv(ae.location,Ae)}}}}g()}function y(){h();for(const b in i){const V=i[b];for(const k in V){const z=V[k];for(const Y in z){const B=z[Y];for(const F in B)O(B[F].object),delete B[F];delete z[Y]}}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const V=i[b.id];for(const k in V){const z=V[k];for(const Y in z){const B=z[Y];for(const F in B)O(B[F].object),delete B[F];delete z[Y]}}delete i[b.id]}function I(b){for(const V in i){const k=i[V];for(const z in k){const Y=k[z];if(Y[b.id]===void 0)continue;const B=Y[b.id];for(const F in B)O(B[F].object),delete B[F];delete Y[b.id]}}}function f(b){for(const V in i){const k=i[V],z=b.isInstancedMesh===!0?b.id:0,Y=k[z];if(Y!==void 0){for(const B in Y){const F=Y[B];for(const ie in F)O(F[ie].object),delete F[ie];delete Y[B]}delete k[z],Object.keys(k).length===0&&delete i[V]}}}function h(){$(),d=!0,r!==l&&(r=l,T(r.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:h,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:C,releaseStatesOfObject:f,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:c,disableUnusedAttributes:g}}function fl(e,n,t){let i;function l(T){i=T}function r(T,O){e.drawArrays(i,T,O),t.update(O,i,1)}function d(T,O,L){L!==0&&(e.drawArraysInstanced(i,T,O,L),t.update(O,i,L))}function m(T,O,L){if(L===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,T,0,O,0,L);let v=0;for(let E=0;E<L;E++)v+=O[E];t.update(v,i,1)}function P(T,O,L,p){if(L===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<T.length;E++)d(T[E],O[E],p[E]);else{v.multiDrawArraysInstancedWEBGL(i,T,0,O,0,p,0,L);let E=0;for(let w=0;w<L;w++)E+=O[w]*p[w];t.update(E,i,1)}}this.setMode=l,this.render=r,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=P}function dl(e,n,t,i){let l;function r(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ct&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(I){const f=I===Ft&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==xt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Nt&&!f)}function P(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let T=t.precision!==void 0?t.precision:"highp";const O=P(T);O!==T&&(Ye("WebGLRenderer:",T,"not supported, using",O,"instead."),T=O);const L=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:P,textureFormatReadable:d,textureTypeReadable:m,precision:T,logarithmicDepthBuffer:L,reversedDepthBuffer:p,maxTextures:v,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:c,maxAttributes:o,maxVertexUniforms:g,maxVaryings:A,maxFragmentUniforms:x,maxSamples:y,samples:C}}function ul(e){const n=this;let t=null,i=0,l=!1,r=!1;const d=new Gr,m=new Oe,P={value:null,needsUpdate:!1};this.uniform=P,this.numPlanes=0,this.numIntersection=0,this.init=function(L,p){const v=L.length!==0||p||i!==0||l;return l=p,i=L.length,v},this.beginShadows=function(){r=!0,O(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(L,p){t=O(L,p,0)},this.setState=function(L,p,v){const E=L.clippingPlanes,w=L.clipIntersection,c=L.clipShadows,o=e.get(L);if(!l||E===null||E.length===0||r&&!c)r?O(null):T();else{const g=r?0:i,A=g*4;let x=o.clippingState||null;P.value=x,x=O(E,p,A,v);for(let y=0;y!==A;++y)x[y]=t[y];o.clippingState=x,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=g}};function T(){P.value!==t&&(P.value=t,P.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function O(L,p,v,E){const w=L!==null?L.length:0;let c=null;if(w!==0){if(c=P.value,E!==!0||c===null){const o=v+w*4,g=p.matrixWorldInverse;m.getNormalMatrix(g),(c===null||c.length<o)&&(c=new Float32Array(o));for(let A=0,x=v;A!==w;++A,x+=4)d.copy(L[A]).applyMatrix4(g,m),d.normal.toArray(c,x),c[x+3]=d.constant}P.value=c,P.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,c}}const yt=4,Ji=[.125,.215,.35,.446,.526,.582],Vt=20,pl=256,nn=new Ta,ji=new Qe;let Hn=null,Vn=0,Wn=0,zn=!1;const hl=new Be;class ea{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,r={}){const{size:d=256,position:m=hl}=r;Hn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),Wn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const P=this._allocateTargets();return P.depthBuffer=!0,this._sceneToCubeUV(n,i,l,P,m),t>0&&this._blur(P,0,0,t),this._applyPMREM(P),this._cleanup(P),P}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Hn,Vn,Wn),this._renderer.xr.enabled=zn,n.scissorTest=!1,qt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===un||n.mapping===jt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Hn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),Wn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Ft,format:Ct,colorSpace:An,depthBuffer:!1},l=ta(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ta(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ml(r)),this._blurMaterial=gl(r,n,t),this._ggxMaterial=_l(r,n,t)}return l}_compileMaterial(n){const t=new Lt(new Rn,n);this._renderer.compile(t,nn)}_sceneToCubeUV(n,t,i,l,r){const P=new cn(90,1,t,i),T=[1,-1,1,1,1,1],O=[1,1,1,-1,-1,-1],L=this._renderer,p=L.autoClear,v=L.toneMapping;L.getClearColor(ji),L.toneMapping=Mt,L.autoClear=!1,L.state.buffers.depth.getReversed()&&(L.setRenderTarget(l),L.clearDepth(),L.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new ei,new mo({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,c=w.material;let o=!1;const g=n.background;g?g.isColor&&(c.color.copy(g),n.background=null,o=!0):(c.color.copy(ji),o=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(P.up.set(0,T[A],0),P.position.set(r.x,r.y,r.z),P.lookAt(r.x+O[A],r.y,r.z)):x===1?(P.up.set(0,0,T[A]),P.position.set(r.x,r.y,r.z),P.lookAt(r.x,r.y+O[A],r.z)):(P.up.set(0,T[A],0),P.position.set(r.x,r.y,r.z),P.lookAt(r.x,r.y,r.z+O[A]));const y=this._cubeSize;qt(l,x*y,A>2?y:0,y,y),L.setRenderTarget(l),o&&L.render(w,P),L.render(n,P)}L.toneMapping=v,L.autoClear=p,n.background=g}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===un||n.mapping===jt;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=na());const r=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=r;const m=r.uniforms;m.envMap.value=n;const P=this._cubeSize;qt(t,0,0,3*P,2*P),i.setRenderTarget(t),i.render(d,nn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let r=1;r<l;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,r=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[i];m.material=d;const P=d.uniforms,T=i/(this._lodMeshes.length-1),O=t/(this._lodMeshes.length-1),L=Math.sqrt(T*T-O*O),p=0+T*1.25,v=L*p,{_lodMax:E}=this,w=this._sizeLods[i],c=3*w*(i>E-yt?i-E+yt:0),o=4*(this._cubeSize-w);P.envMap.value=n.texture,P.roughness.value=v,P.mipInt.value=E-t,qt(r,c,o,3*w,2*w),l.setRenderTarget(r),l.render(m,nn),P.envMap.value=r.texture,P.roughness.value=0,P.mipInt.value=E-i,qt(n,c,o,3*w,2*w),l.setRenderTarget(n),l.render(m,nn)}_blur(n,t,i,l,r){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,l,"latitudinal",r),this._halfBlur(d,n,i,i,l,"longitudinal",r)}_halfBlur(n,t,i,l,r,d,m){const P=this._renderer,T=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const O=3,L=this._lodMeshes[l];L.material=T;const p=T.uniforms,v=this._sizeLods[i]-1,E=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*Vt-1),w=r/E,c=isFinite(r)?1+Math.floor(O*w):Vt;c>Vt&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Vt}`);const o=[];let g=0;for(let I=0;I<Vt;++I){const f=I/w,h=Math.exp(-f*f/2);o.push(h),I===0?g+=h:I<c&&(g+=2*h)}for(let I=0;I<o.length;I++)o[I]=o[I]/g;p.envMap.value=n.texture,p.samples.value=c,p.weights.value=o,p.latitudinal.value=d==="latitudinal",m&&(p.poleAxis.value=m);const{_lodMax:A}=this;p.dTheta.value=E,p.mipInt.value=A-i;const x=this._sizeLods[l],y=3*x*(l>A-yt?l-A+yt:0),C=4*(this._cubeSize-x);qt(t,y,C,3*x,2*x),P.setRenderTarget(t),P.render(L,nn)}}function ml(e){const n=[],t=[],i=[];let l=e;const r=e-yt+1+Ji.length;for(let d=0;d<r;d++){const m=Math.pow(2,l);n.push(m);let P=1/m;d>e-yt?P=Ji[d-e+yt-1]:d===0&&(P=0),t.push(P);const T=1/(m-2),O=-T,L=1+T,p=[O,O,L,O,L,L,O,O,L,L,O,L],v=6,E=6,w=3,c=2,o=1,g=new Float32Array(w*E*v),A=new Float32Array(c*E*v),x=new Float32Array(o*E*v);for(let C=0;C<v;C++){const I=C%3*2/3-1,f=C>2?0:-1,h=[I,f,0,I+2/3,f,0,I+2/3,f+1,0,I,f,0,I+2/3,f+1,0,I,f+1,0];g.set(h,w*E*C),A.set(p,c*E*C);const $=[C,C,C,C,C,C];x.set($,o*E*C)}const y=new Rn;y.setAttribute("position",new vn(g,w)),y.setAttribute("uv",new vn(A,c)),y.setAttribute("faceIndex",new vn(x,o)),i.push(new Lt(y,null)),l>yt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function ta(e,n,t){const i=new Tt(e,n,t);return i.texture.mapping=bn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qt(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function _l(e,n,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pl,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function gl(e,n,t){const i=new Float32Array(Vt),l=new Be(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Vt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function na(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function ia(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Cn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xa extends Tt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new ya(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ei(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:Pt});r.uniforms.tEquirect.value=t;const d=new Lt(l,r),m=t.minFilter;return t.minFilter===$t&&(t.minFilter=mt),new fo(1,10,this).update(n,d),t.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const r=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(t,i,l);n.setRenderTarget(r)}}function vl(e){let n=new WeakMap,t=new WeakMap,i=null;function l(p,v=!1){return p==null?null:v?d(p):r(p)}function r(p){if(p&&p.isTexture){const v=p.mapping;if(v===On||v===Bn)if(n.has(p)){const E=n.get(p).texture;return m(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const w=new Xa(E.height);return w.fromEquirectangularTexture(e,p),n.set(p,w),p.addEventListener("dispose",T),m(w.texture,p.mapping)}else return null}}return p}function d(p){if(p&&p.isTexture){const v=p.mapping,E=v===On||v===Bn,w=v===un||v===jt;if(E||w){let c=t.get(p);const o=c!==void 0?c.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==o)return i===null&&(i=new ea(e)),c=E?i.fromEquirectangular(p,c):i.fromCubemap(p,c),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),c.texture;if(c!==void 0)return c.texture;{const g=p.image;return E&&g&&g.height>0||w&&g&&P(g)?(i===null&&(i=new ea(e)),c=E?i.fromEquirectangular(p):i.fromCubemap(p),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),p.addEventListener("dispose",O),c.texture):null}}}return p}function m(p,v){return v===On?p.mapping=un:v===Bn&&(p.mapping=jt),p}function P(p){let v=0;const E=6;for(let w=0;w<E;w++)p[w]!==void 0&&v++;return v===E}function T(p){const v=p.target;v.removeEventListener("dispose",T);const E=n.get(v);E!==void 0&&(n.delete(v),E.dispose())}function O(p){const v=p.target;v.removeEventListener("dispose",O);const E=t.get(v);E!==void 0&&(t.delete(v),E.dispose())}function L(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:L}}function Sl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&Ma("WebGLRenderer: "+i+" extension not supported."),l}}}function El(e,n,t,i){const l={},r=new WeakMap;function d(L){const p=L.target;p.index!==null&&n.remove(p.index);for(const E in p.attributes)n.remove(p.attributes[E]);p.removeEventListener("dispose",d),delete l[p.id];const v=r.get(p);v&&(n.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function m(L,p){return l[p.id]===!0||(p.addEventListener("dispose",d),l[p.id]=!0,t.memory.geometries++),p}function P(L){const p=L.attributes;for(const v in p)n.update(p[v],e.ARRAY_BUFFER)}function T(L){const p=[],v=L.index,E=L.attributes.position;let w=0;if(E===void 0)return;if(v!==null){const g=v.array;w=v.version;for(let A=0,x=g.length;A<x;A+=3){const y=g[A+0],C=g[A+1],I=g[A+2];p.push(y,C,C,I,I,y)}}else{const g=E.array;w=E.version;for(let A=0,x=g.length/3-1;A<x;A+=3){const y=A+0,C=A+1,I=A+2;p.push(y,C,C,I,I,y)}}const c=new(E.count>=65535?uo:po)(p,1);c.version=w;const o=r.get(L);o&&n.remove(o),r.set(L,c)}function O(L){const p=r.get(L);if(p){const v=L.index;v!==null&&p.version<v.version&&T(L)}else T(L);return r.get(L)}return{get:m,update:P,getWireframeAttribute:O}}function xl(e,n,t){let i;function l(p){i=p}let r,d;function m(p){r=p.type,d=p.bytesPerElement}function P(p,v){e.drawElements(i,v,r,p*d),t.update(v,i,1)}function T(p,v,E){E!==0&&(e.drawElementsInstanced(i,v,r,p*d,E),t.update(v,i,E))}function O(p,v,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,r,p,0,E);let c=0;for(let o=0;o<E;o++)c+=v[o];t.update(c,i,1)}function L(p,v,E,w){if(E===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let o=0;o<p.length;o++)T(p[o]/d,v[o],w[o]);else{c.multiDrawElementsInstancedWEBGL(i,v,0,r,p,0,w,0,E);let o=0;for(let g=0;g<E;g++)o+=v[g]*w[g];t.update(o,i,1)}}this.setMode=l,this.setIndex=m,this.render=P,this.renderInstances=T,this.renderMultiDraw=O,this.renderMultiDrawInstances=L}function Ml(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,d,m){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=m*(r/3);break;case e.LINES:t.lines+=m*(r/2);break;case e.LINE_STRIP:t.lines+=m*(r-1);break;case e.LINE_LOOP:t.lines+=m*r;break;case e.POINTS:t.points+=m*r;break;default:Ze("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function Tl(e,n,t){const i=new WeakMap,l=new ut;function r(d,m,P){const T=d.morphTargetInfluences,O=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,L=O!==void 0?O.length:0;let p=i.get(m);if(p===void 0||p.count!==L){let h=function(){I.dispose(),i.delete(m),m.removeEventListener("dispose",h)};p!==void 0&&p.texture.dispose();const v=m.morphAttributes.position!==void 0,E=m.morphAttributes.normal!==void 0,w=m.morphAttributes.color!==void 0,c=m.morphAttributes.position||[],o=m.morphAttributes.normal||[],g=m.morphAttributes.color||[];let A=0;v===!0&&(A=1),E===!0&&(A=2),w===!0&&(A=3);let x=m.attributes.position.count*A,y=1;x>n.maxTextureSize&&(y=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const C=new Float32Array(x*y*4*L),I=new wa(C,x,y,L);I.type=Nt,I.needsUpdate=!0;const f=A*4;for(let $=0;$<L;$++){const b=c[$],V=o[$],k=g[$],z=x*y*4*$;for(let Y=0;Y<b.count;Y++){const B=Y*f;v===!0&&(l.fromBufferAttribute(b,Y),C[z+B+0]=l.x,C[z+B+1]=l.y,C[z+B+2]=l.z,C[z+B+3]=0),E===!0&&(l.fromBufferAttribute(V,Y),C[z+B+4]=l.x,C[z+B+5]=l.y,C[z+B+6]=l.z,C[z+B+7]=0),w===!0&&(l.fromBufferAttribute(k,Y),C[z+B+8]=l.x,C[z+B+9]=l.y,C[z+B+10]=l.z,C[z+B+11]=k.itemSize===4?l.w:1)}}p={count:L,texture:I,size:new pt(x,y)},i.set(m,p),m.addEventListener("dispose",h)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)P.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let v=0;for(let w=0;w<T.length;w++)v+=T[w];const E=m.morphTargetsRelative?1:1-v;P.getUniforms().setValue(e,"morphTargetBaseInfluence",E),P.getUniforms().setValue(e,"morphTargetInfluences",T)}P.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),P.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function Al(e,n,t,i,l){let r=new WeakMap;function d(T){const O=l.render.frame,L=T.geometry,p=n.get(T,L);if(r.get(p)!==O&&(n.update(p),r.set(p,O)),T.isInstancedMesh&&(T.hasEventListener("dispose",P)===!1&&T.addEventListener("dispose",P),r.get(T)!==O&&(t.update(T.instanceMatrix,e.ARRAY_BUFFER),T.instanceColor!==null&&t.update(T.instanceColor,e.ARRAY_BUFFER),r.set(T,O))),T.isSkinnedMesh){const v=T.skeleton;r.get(v)!==O&&(v.update(),r.set(v,O))}return p}function m(){r=new WeakMap}function P(T){const O=T.target;O.removeEventListener("dispose",P),i.releaseStatesOfObject(O),t.remove(O.instanceMatrix),O.instanceColor!==null&&t.remove(O.instanceColor)}return{update:d,dispose:m}}const Rl={[Wa]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Ha]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Ba]:"AGX_TONE_MAPPING",[Oa]:"NEUTRAL_TONE_MAPPING",[Fa]:"CUSTOM_TONE_MAPPING"};function bl(e,n,t,i,l){const r=new Tt(n,t,{type:e,depthBuffer:i,stencilBuffer:l}),d=new Tt(n,t,{type:Ft,depthBuffer:!1,stencilBuffer:!1}),m=new Rn;m.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ui([0,2,0,0,2,0],2));const P=new cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),T=new Lt(m,P),O=new Ta(-1,1,1,-1,0,1);let L=null,p=null,v=!1,E,w=null,c=[],o=!1;this.setSize=function(g,A){r.setSize(g,A),d.setSize(g,A);for(let x=0;x<c.length;x++){const y=c[x];y.setSize&&y.setSize(g,A)}},this.setEffects=function(g){c=g,o=c.length>0&&c[0].isRenderPass===!0;const A=r.width,x=r.height;for(let y=0;y<c.length;y++){const C=c[y];C.setSize&&C.setSize(A,x)}},this.begin=function(g,A){if(v||g.toneMapping===Mt&&c.length===0)return!1;if(w=A,A!==null){const x=A.width,y=A.height;(r.width!==x||r.height!==y)&&this.setSize(x,y)}return o===!1&&g.setRenderTarget(r),E=g.toneMapping,g.toneMapping=Mt,!0},this.hasRenderPass=function(){return o},this.end=function(g,A){g.toneMapping=E,v=!0;let x=r,y=d;for(let C=0;C<c.length;C++){const I=c[C];if(I.enabled!==!1&&(I.render(g,y,x,A),I.needsSwap!==!1)){const f=x;x=y,y=f}}if(L!==g.outputColorSpace||p!==g.toneMapping){L=g.outputColorSpace,p=g.toneMapping,P.defines={},it.getTransfer(L)===$e&&(P.defines.SRGB_TRANSFER="");const C=Rl[p];C&&(P.defines[C]=""),P.needsUpdate=!0}P.uniforms.tDiffuse.value=x.texture,g.setRenderTarget(w),g.render(T,O),w=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),d.dispose(),m.dispose(),P.dispose()}}const Ya=new xo,Zn=new Mn(1,1),qa=new wa,Ka=new _o,$a=new ya,aa=[],ra=[],oa=new Float32Array(16),sa=new Float32Array(9),ca=new Float32Array(4);function en(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let r=aa[l];if(r===void 0&&(r=new Float32Array(l),aa[l]=r),n!==0){i.toArray(r,0);for(let d=1,m=0;d!==n;++d)m+=t,e[d].toArray(r,m)}return r}function rt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ot(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Pn(e,n){let t=ra[n];t===void 0&&(t=new Int32Array(n),ra[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Cl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2fv(this.addr,n),ot(t,n)}}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(rt(t,n))return;e.uniform3fv(this.addr,n),ot(t,n)}}function Dl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4fv(this.addr,n),ot(t,n)}}function Ul(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;ca.set(i),e.uniformMatrix2fv(this.addr,!1,ca),ot(t,i)}}function wl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;sa.set(i),e.uniformMatrix3fv(this.addr,!1,sa),ot(t,i)}}function Il(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;oa.set(i),e.uniformMatrix4fv(this.addr,!1,oa),ot(t,i)}}function Nl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function yl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2iv(this.addr,n),ot(t,n)}}function Fl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3iv(this.addr,n),ot(t,n)}}function Ol(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4iv(this.addr,n),ot(t,n)}}function Bl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Gl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2uiv(this.addr,n),ot(t,n)}}function Hl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3uiv(this.addr,n),ot(t,n)}}function Vl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4uiv(this.addr,n),ot(t,n)}}function Wl(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let r;this.type===e.SAMPLER_2D_SHADOW?(Zn.compareFunction=t.isReversedDepthBuffer()?Jn:jn,r=Zn):r=Ya,t.setTexture2D(n||r,l)}function zl(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||Ka,l)}function kl(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||$a,l)}function Xl(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||qa,l)}function Yl(e){switch(e){case 5126:return Cl;case 35664:return Pl;case 35665:return Ll;case 35666:return Dl;case 35674:return Ul;case 35675:return wl;case 35676:return Il;case 5124:case 35670:return Nl;case 35667:case 35671:return yl;case 35668:case 35672:return Fl;case 35669:case 35673:return Ol;case 5125:return Bl;case 36294:return Gl;case 36295:return Hl;case 36296:return Vl;case 35678:case 36198:case 36298:case 36306:case 35682:return Wl;case 35679:case 36299:case 36307:return zl;case 35680:case 36300:case 36308:case 36293:return kl;case 36289:case 36303:case 36311:case 36292:return Xl}}function ql(e,n){e.uniform1fv(this.addr,n)}function Kl(e,n){const t=en(n,this.size,2);e.uniform2fv(this.addr,t)}function $l(e,n){const t=en(n,this.size,3);e.uniform3fv(this.addr,t)}function Zl(e,n){const t=en(n,this.size,4);e.uniform4fv(this.addr,t)}function Ql(e,n){const t=en(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Jl(e,n){const t=en(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function jl(e,n){const t=en(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ef(e,n){e.uniform1iv(this.addr,n)}function tf(e,n){e.uniform2iv(this.addr,n)}function nf(e,n){e.uniform3iv(this.addr,n)}function af(e,n){e.uniform4iv(this.addr,n)}function rf(e,n){e.uniform1uiv(this.addr,n)}function of(e,n){e.uniform2uiv(this.addr,n)}function sf(e,n){e.uniform3uiv(this.addr,n)}function cf(e,n){e.uniform4uiv(this.addr,n)}function lf(e,n,t){const i=this.cache,l=n.length,r=Pn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));let d;this.type===e.SAMPLER_2D_SHADOW?d=Zn:d=Ya;for(let m=0;m!==l;++m)t.setTexture2D(n[m]||d,r[m])}function ff(e,n,t){const i=this.cache,l=n.length,r=Pn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let d=0;d!==l;++d)t.setTexture3D(n[d]||Ka,r[d])}function df(e,n,t){const i=this.cache,l=n.length,r=Pn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let d=0;d!==l;++d)t.setTextureCube(n[d]||$a,r[d])}function uf(e,n,t){const i=this.cache,l=n.length,r=Pn(t,l);rt(i,r)||(e.uniform1iv(this.addr,r),ot(i,r));for(let d=0;d!==l;++d)t.setTexture2DArray(n[d]||qa,r[d])}function pf(e){switch(e){case 5126:return ql;case 35664:return Kl;case 35665:return $l;case 35666:return Zl;case 35674:return Ql;case 35675:return Jl;case 35676:return jl;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return af;case 5125:return rf;case 36294:return of;case 36295:return sf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return uf}}class hf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yl(t.type)}}class mf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pf(t.type)}}class _f{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let r=0,d=l.length;r!==d;++r){const m=l[r];m.setValue(n,t[m.id],i)}}}const kn=/(\w+)(\])?(\[|\.)?/g;function la(e,n){e.seq.push(n),e.map[n.id]=n}function gf(e,n,t){const i=e.name,l=i.length;for(kn.lastIndex=0;;){const r=kn.exec(i),d=kn.lastIndex;let m=r[1];const P=r[2]==="]",T=r[3];if(P&&(m=m|0),T===void 0||T==="["&&d+2===l){la(t,T===void 0?new hf(m,e,n):new mf(m,e,n));break}else{let L=t.map[m];L===void 0&&(L=new _f(m),la(t,L)),t=L}}}class xn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let d=0;d<i;++d){const m=n.getActiveUniform(t,d),P=n.getUniformLocation(t,m.name);gf(m,P,this)}const l=[],r=[];for(const d of this.seq)d.type===n.SAMPLER_2D_SHADOW||d.type===n.SAMPLER_CUBE_SHADOW||d.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(d):r.push(d);l.length>0&&(this.seq=l.concat(r))}setValue(n,t,i,l){const r=this.map[t];r!==void 0&&r.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let r=0,d=t.length;r!==d;++r){const m=t[r],P=i[m.id];P.needsUpdate!==!1&&m.setValue(n,P.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,r=n.length;l!==r;++l){const d=n[l];d.id in t&&i.push(d)}return i}}function fa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const vf=37297;let Sf=0;function Ef(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let d=l;d<r;d++){const m=d+1;i.push(`${m===n?">":" "} ${m}: ${t[d]}`)}return i.join(`
`)}const da=new Oe;function xf(e){it._getMatrix(da,it.workingColorSpace,e);const n=`mat3( ${da.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case za:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ua(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const d=/ERROR: 0:(\d+)/.exec(r);if(d){const m=parseInt(d[1]);return t.toUpperCase()+`

`+r+`

`+Ef(e.getShaderSource(n),m)}else return r}function Mf(e,n){const t=xf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tf={[Wa]:"Linear",[Va]:"Reinhard",[Ha]:"Cineon",[Ga]:"ACESFilmic",[Ba]:"AgX",[Oa]:"Neutral",[Fa]:"Custom"};function Af(e,n){const t=Tf[n];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gn=new Be;function Rf(){it.getLuminanceCoefficients(gn);const e=gn.x.toFixed(4),n=gn.y.toFixed(4),t=gn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sn).join(`
`)}function Cf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Pf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const r=e.getActiveAttrib(n,l),d=r.name;let m=1;r.type===e.FLOAT_MAT2&&(m=2),r.type===e.FLOAT_MAT3&&(m=3),r.type===e.FLOAT_MAT4&&(m=4),t[d]={type:r.type,location:e.getAttribLocation(n,d),locationSize:m}}return t}function sn(e){return e!==""}function pa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ha(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qn(e){return e.replace(Lf,Uf)}const Df=new Map;function Uf(e,n){let t=De[n];if(t===void 0){const i=Df.get(n);if(i!==void 0)t=De[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Qn(t)}const wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(e){return e.replace(wf,If)}function If(e,n,t,i){let l="";for(let r=parseInt(n);r<parseInt(t);r++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function _a(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Nf={[Sn]:"SHADOWMAP_TYPE_PCF",[on]:"SHADOWMAP_TYPE_VSM"};function yf(e){return Nf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ff={[un]:"ENVMAP_TYPE_CUBE",[jt]:"ENVMAP_TYPE_CUBE",[bn]:"ENVMAP_TYPE_CUBE_UV"};function Of(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Ff[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bf={[jt]:"ENVMAP_MODE_REFRACTION"};function Gf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Bf[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hf={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[So]:"ENVMAP_BLENDING_MIX",[vo]:"ENVMAP_BLENDING_ADD"};function Vf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Hf[e.combine]||"ENVMAP_BLENDING_NONE"}function Wf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zf(e,n,t,i){const l=e.getContext(),r=t.defines;let d=t.vertexShader,m=t.fragmentShader;const P=yf(t),T=Of(t),O=Gf(t),L=Vf(t),p=Wf(t),v=bf(t),E=Cf(r),w=l.createProgram();let c,o,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sn).join(`
`),c.length>0&&(c+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sn).join(`
`),o.length>0&&(o+=`
`)):(c=[_a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+O:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),o=[_a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+T:"",t.envMap?"#define "+O:"",t.envMap?"#define "+L:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mt?"#define TONE_MAPPING":"",t.toneMapping!==Mt?De.tonemapping_pars_fragment:"",t.toneMapping!==Mt?Af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),Rf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sn).join(`
`)),d=Qn(d),d=pa(d,t),d=ha(d,t),m=Qn(m),m=pa(m,t),m=ha(m,t),d=ma(d),m=ma(m),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,o=["#define varying in",t.glslVersion===Qi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const A=g+c+d,x=g+o+m,y=fa(l,l.VERTEX_SHADER,A),C=fa(l,l.FRAGMENT_SHADER,x);l.attachShader(w,y),l.attachShader(w,C),t.index0AttributeName!==void 0?l.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(b){if(e.debug.checkShaderErrors){const V=l.getProgramInfoLog(w)||"",k=l.getShaderInfoLog(y)||"",z=l.getShaderInfoLog(C)||"",Y=V.trim(),B=k.trim(),F=z.trim();let ie=!0,ae=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,w,y,C);else{const Me=ua(l,y,"vertex"),Ae=ua(l,C,"fragment");Ze("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+Y+`
`+Me+`
`+Ae)}else Y!==""?Ye("WebGLProgram: Program Info Log:",Y):(B===""||F==="")&&(ae=!1);ae&&(b.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:B,prefix:c},fragmentShader:{log:F,prefix:o}})}l.deleteShader(y),l.deleteShader(C),f=new xn(l,w),h=Pf(l,w)}let f;this.getUniforms=function(){return f===void 0&&I(this),f};let h;this.getAttributes=function(){return h===void 0&&I(this),h};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=l.getProgramParameter(w,vf)),$},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sf++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=y,this.fragmentShader=C,this}let kf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),r=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(r)===!1&&(d.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Yf(n),t.set(n,i)),i}}class Yf{constructor(n){this.id=kf++,this.code=n,this.usedTimes=0}}function qf(e,n,t,i,l,r){const d=new ho,m=new Xf,P=new Set,T=[],O=new Map,L=i.logarithmicDepthBuffer;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(f){return P.add(f),f===0?"uv":`uv${f}`}function w(f,h,$,b,V){const k=b.fog,z=V.geometry,Y=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?b.environment:null,B=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,F=n.get(f.envMap||Y,B),ie=F&&F.mapping===bn?F.image.height:null,ae=v[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&Ye("WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));const Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=Me!==void 0?Me.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let Ne,Je,je,X;if(ae){const Ve=Et[ae];Ne=Ve.vertexShader,Je=Ve.fragmentShader}else Ne=f.vertexShader,Je=f.fragmentShader,m.update(f),je=m.getVertexShaderID(f),X=m.getFragmentShaderID(f);const j=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,be=!!f.map,st=!!f.matcap,ye=!!F,He=!!f.aoMap,ke=!!f.lightMap,Ue=!!f.bumpMap,tt=!!f.normalMap,_=!!f.displacementMap,at=!!f.emissiveMap,Ge=!!f.metalnessMap,qe=!!f.roughnessMap,ge=f.anisotropy>0,u=f.clearcoat>0,a=f.dispersion>0,M=f.iridescence>0,W=f.sheen>0,q=f.transmission>0,H=ge&&!!f.anisotropyMap,de=u&&!!f.clearcoatMap,ee=u&&!!f.clearcoatNormalMap,xe=u&&!!f.clearcoatRoughnessMap,Re=M&&!!f.iridescenceMap,K=M&&!!f.iridescenceThicknessMap,Q=W&&!!f.sheenColorMap,ue=W&&!!f.sheenRoughnessMap,me=!!f.specularMap,ce=!!f.specularColorMap,we=!!f.specularIntensityMap,S=q&&!!f.transmissionMap,te=q&&!!f.thicknessMap,J=!!f.gradientMap,fe=!!f.alphaMap,Z=f.alphaTest>0,G=!!f.alphaHash,pe=!!f.extensions;let Ce=Mt;f.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);const Ke={shaderID:ae,shaderType:f.type,shaderName:f.name,vertexShader:Ne,fragmentShader:Je,defines:f.defines,customVertexShaderID:je,customFragmentShaderID:X,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:An,alphaToCoverage:!!f.alphaToCoverage,map:be,matcap:st,envMap:ye,envMapMode:ye&&F.mapping,envMapCubeUVHeight:ie,aoMap:He,lightMap:ke,bumpMap:Ue,normalMap:tt,displacementMap:_,emissiveMap:at,normalMapObjectSpace:tt&&f.normalMapType===lo,normalMapTangentSpace:tt&&f.normalMapType===co,metalnessMap:Ge,roughnessMap:qe,anisotropy:ge,anisotropyMap:H,clearcoat:u,clearcoatMap:de,clearcoatNormalMap:ee,clearcoatRoughnessMap:xe,dispersion:a,iridescence:M,iridescenceMap:Re,iridescenceThicknessMap:K,sheen:W,sheenColorMap:Q,sheenRoughnessMap:ue,specularMap:me,specularColorMap:ce,specularIntensityMap:we,transmission:q,transmissionMap:S,thicknessMap:te,gradientMap:J,opaque:f.transparent===!1&&f.blending===En&&f.alphaToCoverage===!1,alphaMap:fe,alphaTest:Z,alphaHash:G,combine:f.combine,mapUv:be&&E(f.map.channel),aoMapUv:He&&E(f.aoMap.channel),lightMapUv:ke&&E(f.lightMap.channel),bumpMapUv:Ue&&E(f.bumpMap.channel),normalMapUv:tt&&E(f.normalMap.channel),displacementMapUv:_&&E(f.displacementMap.channel),emissiveMapUv:at&&E(f.emissiveMap.channel),metalnessMapUv:Ge&&E(f.metalnessMap.channel),roughnessMapUv:qe&&E(f.roughnessMap.channel),anisotropyMapUv:H&&E(f.anisotropyMap.channel),clearcoatMapUv:de&&E(f.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&E(f.iridescenceMap.channel),iridescenceThicknessMapUv:K&&E(f.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&E(f.sheenColorMap.channel),sheenRoughnessMapUv:ue&&E(f.sheenRoughnessMap.channel),specularMapUv:me&&E(f.specularMap.channel),specularColorMapUv:ce&&E(f.specularColorMap.channel),specularIntensityMapUv:we&&E(f.specularIntensityMap.channel),transmissionMapUv:S&&E(f.transmissionMap.channel),thicknessMapUv:te&&E(f.thicknessMap.channel),alphaMapUv:fe&&E(f.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(tt||ge),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(be||fe),fog:!!k,useFog:f.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||z.attributes.normal===void 0&&tt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:L,reversedDepthBuffer:ne,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&$.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:be&&f.map.isVideoTexture===!0&&it.getTransfer(f.map.colorSpace)===$e,decodeVideoTextureEmissive:at&&f.emissiveMap.isVideoTexture===!0&&it.getTransfer(f.emissiveMap.colorSpace)===$e,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===bt,flipSided:f.side===_t,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:pe&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&f.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ke.vertexUv1s=P.has(1),Ke.vertexUv2s=P.has(2),Ke.vertexUv3s=P.has(3),P.clear(),Ke}function c(f){const h=[];if(f.shaderID?h.push(f.shaderID):(h.push(f.customVertexShaderID),h.push(f.customFragmentShaderID)),f.defines!==void 0)for(const $ in f.defines)h.push($),h.push(f.defines[$]);return f.isRawShaderMaterial===!1&&(o(h,f),g(h,f),h.push(e.outputColorSpace)),h.push(f.customProgramCacheKey),h.join()}function o(f,h){f.push(h.precision),f.push(h.outputColorSpace),f.push(h.envMapMode),f.push(h.envMapCubeUVHeight),f.push(h.mapUv),f.push(h.alphaMapUv),f.push(h.lightMapUv),f.push(h.aoMapUv),f.push(h.bumpMapUv),f.push(h.normalMapUv),f.push(h.displacementMapUv),f.push(h.emissiveMapUv),f.push(h.metalnessMapUv),f.push(h.roughnessMapUv),f.push(h.anisotropyMapUv),f.push(h.clearcoatMapUv),f.push(h.clearcoatNormalMapUv),f.push(h.clearcoatRoughnessMapUv),f.push(h.iridescenceMapUv),f.push(h.iridescenceThicknessMapUv),f.push(h.sheenColorMapUv),f.push(h.sheenRoughnessMapUv),f.push(h.specularMapUv),f.push(h.specularColorMapUv),f.push(h.specularIntensityMapUv),f.push(h.transmissionMapUv),f.push(h.thicknessMapUv),f.push(h.combine),f.push(h.fogExp2),f.push(h.sizeAttenuation),f.push(h.morphTargetsCount),f.push(h.morphAttributeCount),f.push(h.numDirLights),f.push(h.numPointLights),f.push(h.numSpotLights),f.push(h.numSpotLightMaps),f.push(h.numHemiLights),f.push(h.numRectAreaLights),f.push(h.numDirLightShadows),f.push(h.numPointLightShadows),f.push(h.numSpotLightShadows),f.push(h.numSpotLightShadowsWithMaps),f.push(h.numLightProbes),f.push(h.shadowMapType),f.push(h.toneMapping),f.push(h.numClippingPlanes),f.push(h.numClipIntersection),f.push(h.depthPacking)}function g(f,h){d.disableAll(),h.instancing&&d.enable(0),h.instancingColor&&d.enable(1),h.instancingMorph&&d.enable(2),h.matcap&&d.enable(3),h.envMap&&d.enable(4),h.normalMapObjectSpace&&d.enable(5),h.normalMapTangentSpace&&d.enable(6),h.clearcoat&&d.enable(7),h.iridescence&&d.enable(8),h.alphaTest&&d.enable(9),h.vertexColors&&d.enable(10),h.vertexAlphas&&d.enable(11),h.vertexUv1s&&d.enable(12),h.vertexUv2s&&d.enable(13),h.vertexUv3s&&d.enable(14),h.vertexTangents&&d.enable(15),h.anisotropy&&d.enable(16),h.alphaHash&&d.enable(17),h.batching&&d.enable(18),h.dispersion&&d.enable(19),h.batchingColor&&d.enable(20),h.gradientMap&&d.enable(21),f.push(d.mask),d.disableAll(),h.fog&&d.enable(0),h.useFog&&d.enable(1),h.flatShading&&d.enable(2),h.logarithmicDepthBuffer&&d.enable(3),h.reversedDepthBuffer&&d.enable(4),h.skinning&&d.enable(5),h.morphTargets&&d.enable(6),h.morphNormals&&d.enable(7),h.morphColors&&d.enable(8),h.premultipliedAlpha&&d.enable(9),h.shadowMapEnabled&&d.enable(10),h.doubleSided&&d.enable(11),h.flipSided&&d.enable(12),h.useDepthPacking&&d.enable(13),h.dithering&&d.enable(14),h.transmission&&d.enable(15),h.sheen&&d.enable(16),h.opaque&&d.enable(17),h.pointsUvs&&d.enable(18),h.decodeVideoTexture&&d.enable(19),h.decodeVideoTextureEmissive&&d.enable(20),h.alphaToCoverage&&d.enable(21),f.push(d.mask)}function A(f){const h=v[f.type];let $;if(h){const b=Et[h];$=so.clone(b.uniforms)}else $=f.uniforms;return $}function x(f,h){let $=O.get(h);return $!==void 0?++$.usedTimes:($=new zf(e,h,f,l),T.push($),O.set(h,$)),$}function y(f){if(--f.usedTimes===0){const h=T.indexOf(f);T[h]=T[T.length-1],T.pop(),O.delete(f.cacheKey),f.destroy()}}function C(f){m.remove(f)}function I(){m.dispose()}return{getParameters:w,getProgramCacheKey:c,getUniforms:A,acquireProgram:x,releaseProgram:y,releaseShaderCache:C,programs:T,dispose:I}}function Kf(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let m=e.get(d);return m===void 0&&(m={},e.set(d,m)),m}function i(d){e.delete(d)}function l(d,m,P){e.get(d)[m]=P}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:r}}function $f(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function ga(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function va(){const e=[];let n=0;const t=[],i=[],l=[];function r(){n=0,t.length=0,i.length=0,l.length=0}function d(p){let v=0;return p.isInstancedMesh&&(v+=2),p.isSkinnedMesh&&(v+=1),v}function m(p,v,E,w,c,o){let g=e[n];return g===void 0?(g={id:p.id,object:p,geometry:v,material:E,materialVariant:d(p),groupOrder:w,renderOrder:p.renderOrder,z:c,group:o},e[n]=g):(g.id=p.id,g.object=p,g.geometry=v,g.material=E,g.materialVariant=d(p),g.groupOrder=w,g.renderOrder=p.renderOrder,g.z=c,g.group=o),n++,g}function P(p,v,E,w,c,o){const g=m(p,v,E,w,c,o);E.transmission>0?i.push(g):E.transparent===!0?l.push(g):t.push(g)}function T(p,v,E,w,c,o){const g=m(p,v,E,w,c,o);E.transmission>0?i.unshift(g):E.transparent===!0?l.unshift(g):t.unshift(g)}function O(p,v){t.length>1&&t.sort(p||$f),i.length>1&&i.sort(v||ga),l.length>1&&l.sort(v||ga)}function L(){for(let p=n,v=e.length;p<v;p++){const E=e[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:l,init:r,push:P,unshift:T,finish:L,sort:O}}function Zf(){let e=new WeakMap;function n(i,l){const r=e.get(i);let d;return r===void 0?(d=new va,e.set(i,[d])):l>=r.length?(d=new va,r.push(d)):d=r[l],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function Qf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Be,color:new Qe};break;case"SpotLight":t={position:new Be,direction:new Be,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Be,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Be,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Be,halfWidth:new Be,halfHeight:new Be};break}return e[n.id]=t,t}}}function Jf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let jf=0;function ed(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function td(e){const n=new Qf,t=Jf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let T=0;T<9;T++)i.probe.push(new Be);const l=new Be,r=new Qt,d=new Qt;function m(T){let O=0,L=0,p=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let v=0,E=0,w=0,c=0,o=0,g=0,A=0,x=0,y=0,C=0,I=0;T.sort(ed);for(let h=0,$=T.length;h<$;h++){const b=T[h],V=b.color,k=b.intensity,z=b.distance;let Y=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===dn?Y=b.shadow.map.texture:Y=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)O+=V.r*k,L+=V.g*k,p+=V.b*k;else if(b.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(b.sh.coefficients[B],k);I++}else if(b.isDirectionalLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,ie=t.get(b);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,i.directionalShadow[v]=ie,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=b.shadow.matrix,g++}i.directional[v]=B,v++}else if(b.isSpotLight){const B=n.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(V).multiplyScalar(k),B.distance=z,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,i.spot[w]=B;const F=b.shadow;if(b.map&&(i.spotLightMap[y]=b.map,y++,F.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[w]=F.matrix,b.castShadow){const ie=t.get(b);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,i.spotShadow[w]=ie,i.spotShadowMap[w]=Y,x++}w++}else if(b.isRectAreaLight){const B=n.get(b);B.color.copy(V).multiplyScalar(k),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),i.rectArea[c]=B,c++}else if(b.isPointLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const F=b.shadow,ie=t.get(b);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,ie.shadowCameraNear=F.camera.near,ie.shadowCameraFar=F.camera.far,i.pointShadow[E]=ie,i.pointShadowMap[E]=Y,i.pointShadowMatrix[E]=b.shadow.matrix,A++}i.point[E]=B,E++}else if(b.isHemisphereLight){const B=n.get(b);B.skyColor.copy(b.color).multiplyScalar(k),B.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[o]=B,o++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=O,i.ambient[1]=L,i.ambient[2]=p;const f=i.hash;(f.directionalLength!==v||f.pointLength!==E||f.spotLength!==w||f.rectAreaLength!==c||f.hemiLength!==o||f.numDirectionalShadows!==g||f.numPointShadows!==A||f.numSpotShadows!==x||f.numSpotMaps!==y||f.numLightProbes!==I)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=c,i.point.length=E,i.hemi.length=o,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,f.directionalLength=v,f.pointLength=E,f.spotLength=w,f.rectAreaLength=c,f.hemiLength=o,f.numDirectionalShadows=g,f.numPointShadows=A,f.numSpotShadows=x,f.numSpotMaps=y,f.numLightProbes=I,i.version=jf++)}function P(T,O){let L=0,p=0,v=0,E=0,w=0;const c=O.matrixWorldInverse;for(let o=0,g=T.length;o<g;o++){const A=T[o];if(A.isDirectionalLight){const x=i.directional[L];x.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(l),x.direction.transformDirection(c),L++}else if(A.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(c),x.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(l),x.direction.transformDirection(c),v++}else if(A.isRectAreaLight){const x=i.rectArea[E];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(c),d.identity(),r.copy(A.matrixWorld),r.premultiply(c),d.extractRotation(r),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(d),x.halfHeight.applyMatrix4(d),E++}else if(A.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(c),p++}else if(A.isHemisphereLight){const x=i.hemi[w];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(c),w++}}}return{setup:m,setupView:P,state:i}}function Sa(e){const n=new td(e),t=[],i=[];function l(O){T.camera=O,t.length=0,i.length=0}function r(O){t.push(O)}function d(O){i.push(O)}function m(){n.setup(t)}function P(O){n.setupView(t,O)}const T={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:T,setupLights:m,setupLightsView:P,pushLight:r,pushShadow:d}}function nd(e){let n=new WeakMap;function t(l,r=0){const d=n.get(l);let m;return d===void 0?(m=new Sa(e),n.set(l,[m])):r>=d.length?(m=new Sa(e),d.push(m)):m=d[r],m}function i(){n=new WeakMap}return{get:t,dispose:i}}const id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ad=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rd=[new Be(1,0,0),new Be(-1,0,0),new Be(0,1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1)],od=[new Be(0,-1,0),new Be(0,-1,0),new Be(0,0,1),new Be(0,0,-1),new Be(0,-1,0),new Be(0,-1,0)],Ea=new Qt,an=new Be,Xn=new Be;function sd(e,n,t){let i=new xa;const l=new pt,r=new pt,d=new ut,m=new Hr,P=new Vr,T={},O=t.maxTextureSize,L={[ln]:_t,[_t]:ln,[bt]:bt},p=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:id,fragmentShader:ad}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const E=new Rn;E.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Lt(E,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sn;let o=this.type;this.render=function(C,I,f){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||C.length===0)return;this.type===Wr&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sn);const h=e.getRenderTarget(),$=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Pt),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=o!==this.type;k&&I.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Y=>Y.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Y=C.length;z<Y;z++){const B=C[z],F=B.shadow;if(F===void 0){Ye("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ie=F.getFrameExtents();l.multiply(ie),r.copy(F.mapSize),(l.x>O||l.y>O)&&(l.x>O&&(r.x=Math.floor(O/ie.x),l.x=r.x*ie.x,F.mapSize.x=r.x),l.y>O&&(r.y=Math.floor(O/ie.y),l.y=r.y*ie.y,F.mapSize.y=r.y));const ae=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ae,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===on){if(B.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Tt(l.x,l.y,{format:dn,type:Ft,minFilter:mt,magFilter:mt,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new Mn(l.x,l.y,Nt),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Jt,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt}else B.isPointLight?(F.map=new Xa(l.x),F.map.depthTexture=new zr(l.x,kt)):(F.map=new Tt(l.x,l.y),F.map.depthTexture=new Mn(l.x,l.y,kt)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Jt,this.type===Sn?(F.map.depthTexture.compareFunction=ae?Jn:jn,F.map.depthTexture.minFilter=mt,F.map.depthTexture.magFilter=mt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt);F.camera.updateProjectionMatrix()}const Me=F.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<Me;Ae++){if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Ae),e.clear();else{Ae===0&&(e.setRenderTarget(F.map),e.clear());const he=F.getViewport(Ae);d.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),V.viewport(d)}if(B.isPointLight){const he=F.camera,Ne=F.matrix,Je=B.distance||he.far;Je!==he.far&&(he.far=Je,he.updateProjectionMatrix()),an.setFromMatrixPosition(B.matrixWorld),he.position.copy(an),Xn.copy(he.position),Xn.add(rd[Ae]),he.up.copy(od[Ae]),he.lookAt(Xn),he.updateMatrixWorld(),Ne.makeTranslation(-an.x,-an.y,-an.z),Ea.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ea,he.coordinateSystem,he.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),x(I,f,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===on&&g(F,f),F.needsUpdate=!1}o=this.type,c.needsUpdate=!1,e.setRenderTarget(h,$,b)};function g(C,I){const f=n.update(w);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tt(l.x,l.y,{format:dn,type:Ft})),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(I,null,f,p,w,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(I,null,f,v,w,null)}function A(C,I,f,h){let $=null;const b=f.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)$=b;else if($=f.isPointLight===!0?P:m,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=$.uuid,k=I.uuid;let z=T[V];z===void 0&&(z={},T[V]=z);let Y=z[k];Y===void 0&&(Y=$.clone(),z[k]=Y,I.addEventListener("dispose",y)),$=Y}if($.visible=I.visible,$.wireframe=I.wireframe,h===on?$.side=I.shadowSide!==null?I.shadowSide:I.side:$.side=I.shadowSide!==null?I.shadowSide:L[I.side],$.alphaMap=I.alphaMap,$.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,$.map=I.map,$.clipShadows=I.clipShadows,$.clippingPlanes=I.clippingPlanes,$.clipIntersection=I.clipIntersection,$.displacementMap=I.displacementMap,$.displacementScale=I.displacementScale,$.displacementBias=I.displacementBias,$.wireframeLinewidth=I.wireframeLinewidth,$.linewidth=I.linewidth,f.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const V=e.properties.get($);V.light=f}return $}function x(C,I,f,h,$){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&$===on)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,C.matrixWorld);const k=n.update(C),z=C.material;if(Array.isArray(z)){const Y=k.groups;for(let B=0,F=Y.length;B<F;B++){const ie=Y[B],ae=z[ie.materialIndex];if(ae&&ae.visible){const Me=A(C,ae,h,$);C.onBeforeShadow(e,C,I,f,k,Me,ie),e.renderBufferDirect(f,null,k,Me,C,ie),C.onAfterShadow(e,C,I,f,k,Me,ie)}}}else if(z.visible){const Y=A(C,z,h,$);C.onBeforeShadow(e,C,I,f,k,Y,null),e.renderBufferDirect(f,null,k,Y,C,null),C.onAfterShadow(e,C,I,f,k,Y,null)}}const V=C.children;for(let k=0,z=V.length;k<z;k++)x(V[k],I,f,h,$)}function y(C){C.target.removeEventListener("dispose",y);for(const f in T){const h=T[f],$=C.target.uuid;$ in h&&(h[$].dispose(),delete h[$])}}}function cd(e,n){function t(){let S=!1;const te=new ut;let J=null;const fe=new ut(0,0,0,0);return{setMask:function(Z){J!==Z&&!S&&(e.colorMask(Z,Z,Z,Z),J=Z)},setLocked:function(Z){S=Z},setClear:function(Z,G,pe,Ce,Ke){Ke===!0&&(Z*=Ce,G*=Ce,pe*=Ce),te.set(Z,G,pe,Ce),fe.equals(te)===!1&&(e.clearColor(Z,G,pe,Ce),fe.copy(te))},reset:function(){S=!1,J=null,fe.set(-1,0,0,0)}}}function i(){let S=!1,te=!1,J=null,fe=null,Z=null;return{setReversed:function(G){if(te!==G){const pe=n.get("EXT_clip_control");G?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=G;const Ce=Z;Z=null,this.setClear(Ce)}},getReversed:function(){return te},setTest:function(G){G?j(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(G){J!==G&&!S&&(e.depthMask(G),J=G)},setFunc:function(G){if(te&&(G=Mo[G]),fe!==G){switch(G){case io:e.depthFunc(e.NEVER);break;case no:e.depthFunc(e.ALWAYS);break;case to:e.depthFunc(e.LESS);break;case pi:e.depthFunc(e.LEQUAL);break;case eo:e.depthFunc(e.EQUAL);break;case jr:e.depthFunc(e.GEQUAL);break;case Jr:e.depthFunc(e.GREATER);break;case Qr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=G}},setLocked:function(G){S=G},setClear:function(G){Z!==G&&(Z=G,te&&(G=1-G),e.clearDepth(G))},reset:function(){S=!1,J=null,fe=null,Z=null,te=!1}}}function l(){let S=!1,te=null,J=null,fe=null,Z=null,G=null,pe=null,Ce=null,Ke=null;return{setTest:function(Ve){S||(Ve?j(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(Ve){te!==Ve&&!S&&(e.stencilMask(Ve),te=Ve)},setFunc:function(Ve,At,Rt){(J!==Ve||fe!==At||Z!==Rt)&&(e.stencilFunc(Ve,At,Rt),J=Ve,fe=At,Z=Rt)},setOp:function(Ve,At,Rt){(G!==Ve||pe!==At||Ce!==Rt)&&(e.stencilOp(Ve,At,Rt),G=Ve,pe=At,Ce=Rt)},setLocked:function(Ve){S=Ve},setClear:function(Ve){Ke!==Ve&&(e.clearStencil(Ve),Ke=Ve)},reset:function(){S=!1,te=null,J=null,fe=null,Z=null,G=null,pe=null,Ce=null,Ke=null}}}const r=new t,d=new i,m=new l,P=new WeakMap,T=new WeakMap;let O={},L={},p=new WeakMap,v=[],E=null,w=!1,c=null,o=null,g=null,A=null,x=null,y=null,C=null,I=new Qe(0,0,0),f=0,h=!1,$=null,b=null,V=null,k=null,z=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=F>=1):ie.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=F>=2);let ae=null,Me={};const Ae=e.getParameter(e.SCISSOR_BOX),he=e.getParameter(e.VIEWPORT),Ne=new ut().fromArray(Ae),Je=new ut().fromArray(he);function je(S,te,J,fe){const Z=new Uint8Array(4),G=e.createTexture();e.bindTexture(S,G),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<J;pe++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(te+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return G}const X={};X[e.TEXTURE_2D]=je(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=je(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=je(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=je(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),d.setClear(1),m.setClear(0),j(e.DEPTH_TEST),d.setFunc(pi),Ue(!1),tt(Yi),j(e.CULL_FACE),He(Pt);function j(S){O[S]!==!0&&(e.enable(S),O[S]=!0)}function ne(S){O[S]!==!1&&(e.disable(S),O[S]=!1)}function Le(S,te){return L[S]!==te?(e.bindFramebuffer(S,te),L[S]=te,S===e.DRAW_FRAMEBUFFER&&(L[e.FRAMEBUFFER]=te),S===e.FRAMEBUFFER&&(L[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(S,te){let J=v,fe=!1;if(S){J=p.get(te),J===void 0&&(J=[],p.set(te,J));const Z=S.textures;if(J.length!==Z.length||J[0]!==e.COLOR_ATTACHMENT0){for(let G=0,pe=Z.length;G<pe;G++)J[G]=e.COLOR_ATTACHMENT0+G;J.length=Z.length,fe=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,fe=!0);fe&&e.drawBuffers(J)}function be(S){return E!==S?(e.useProgram(S),E=S,!0):!1}const st={[tn]:e.FUNC_ADD,[hr]:e.FUNC_SUBTRACT,[pr]:e.FUNC_REVERSE_SUBTRACT};st[To]=e.MIN,st[Ao]=e.MAX;const ye={[Lr]:e.ZERO,[Pr]:e.ONE,[Cr]:e.SRC_COLOR,[br]:e.SRC_ALPHA,[Rr]:e.SRC_ALPHA_SATURATE,[Ar]:e.DST_COLOR,[Tr]:e.DST_ALPHA,[Mr]:e.ONE_MINUS_SRC_COLOR,[xr]:e.ONE_MINUS_SRC_ALPHA,[Er]:e.ONE_MINUS_DST_COLOR,[Sr]:e.ONE_MINUS_DST_ALPHA,[vr]:e.CONSTANT_COLOR,[gr]:e.ONE_MINUS_CONSTANT_COLOR,[_r]:e.CONSTANT_ALPHA,[mr]:e.ONE_MINUS_CONSTANT_ALPHA};function He(S,te,J,fe,Z,G,pe,Ce,Ke,Ve){if(S===Pt){w===!0&&(ne(e.BLEND),w=!1);return}if(w===!1&&(j(e.BLEND),w=!0),S!==oo){if(S!==c||Ve!==h){if((o!==tn||x!==tn)&&(e.blendEquation(e.FUNC_ADD),o=tn,x=tn),Ve)switch(S){case En:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $i:e.blendFunc(e.ONE,e.ONE);break;case Ki:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case qi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ze("WebGLState: Invalid blending: ",S);break}else switch(S){case En:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $i:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ki:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qi:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",S);break}g=null,A=null,y=null,C=null,I.set(0,0,0),f=0,c=S,h=Ve}return}Z=Z||te,G=G||J,pe=pe||fe,(te!==o||Z!==x)&&(e.blendEquationSeparate(st[te],st[Z]),o=te,x=Z),(J!==g||fe!==A||G!==y||pe!==C)&&(e.blendFuncSeparate(ye[J],ye[fe],ye[G],ye[pe]),g=J,A=fe,y=G,C=pe),(Ce.equals(I)===!1||Ke!==f)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Ke),I.copy(Ce),f=Ke),c=S,h=!1}function ke(S,te){S.side===bt?ne(e.CULL_FACE):j(e.CULL_FACE);let J=S.side===_t;te&&(J=!J),Ue(J),S.blending===En&&S.transparent===!1?He(Pt):He(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),d.setFunc(S.depthFunc),d.setTest(S.depthTest),d.setMask(S.depthWrite),r.setMask(S.colorWrite);const fe=S.stencilWrite;m.setTest(fe),fe&&(m.setMask(S.stencilWriteMask),m.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),m.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),at(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(S){$!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),$=S)}function tt(S){S!==ao?(j(e.CULL_FACE),S!==b&&(S===Yi?e.cullFace(e.BACK):S===ro?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ne(e.CULL_FACE),b=S}function _(S){S!==V&&(B&&e.lineWidth(S),V=S)}function at(S,te,J){S?(j(e.POLYGON_OFFSET_FILL),(k!==te||z!==J)&&(k=te,z=J,d.getReversed()&&(te=-te),e.polygonOffset(te,J))):ne(e.POLYGON_OFFSET_FILL)}function Ge(S){S?j(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function qe(S){S===void 0&&(S=e.TEXTURE0+Y-1),ae!==S&&(e.activeTexture(S),ae=S)}function ge(S,te,J){J===void 0&&(ae===null?J=e.TEXTURE0+Y-1:J=ae);let fe=Me[J];fe===void 0&&(fe={type:void 0,texture:void 0},Me[J]=fe),(fe.type!==S||fe.texture!==te)&&(ae!==J&&(e.activeTexture(J),ae=J),e.bindTexture(S,te||X[S]),fe.type=S,fe.texture=te)}function u(){const S=Me[ae];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(S){Ze("WebGLState:",S)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(S){Ze("WebGLState:",S)}}function W(){try{e.texSubImage2D(...arguments)}catch(S){Ze("WebGLState:",S)}}function q(){try{e.texSubImage3D(...arguments)}catch(S){Ze("WebGLState:",S)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(S){Ze("WebGLState:",S)}}function de(){try{e.compressedTexSubImage3D(...arguments)}catch(S){Ze("WebGLState:",S)}}function ee(){try{e.texStorage2D(...arguments)}catch(S){Ze("WebGLState:",S)}}function xe(){try{e.texStorage3D(...arguments)}catch(S){Ze("WebGLState:",S)}}function Re(){try{e.texImage2D(...arguments)}catch(S){Ze("WebGLState:",S)}}function K(){try{e.texImage3D(...arguments)}catch(S){Ze("WebGLState:",S)}}function Q(S){Ne.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),Ne.copy(S))}function ue(S){Je.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),Je.copy(S))}function me(S,te){let J=T.get(te);J===void 0&&(J=new WeakMap,T.set(te,J));let fe=J.get(S);fe===void 0&&(fe=e.getUniformBlockIndex(te,S.name),J.set(S,fe))}function ce(S,te){const fe=T.get(te).get(S);P.get(te)!==fe&&(e.uniformBlockBinding(te,fe,S.__bindingPointIndex),P.set(te,fe))}function we(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),O={},ae=null,Me={},L={},p=new WeakMap,v=[],E=null,w=!1,c=null,o=null,g=null,A=null,x=null,y=null,C=null,I=new Qe(0,0,0),f=0,h=!1,$=null,b=null,V=null,k=null,z=null,Ne.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),r.reset(),d.reset(),m.reset()}return{buffers:{color:r,depth:d,stencil:m},enable:j,disable:ne,bindFramebuffer:Le,drawBuffers:Te,useProgram:be,setBlending:He,setMaterial:ke,setFlipSided:Ue,setCullFace:tt,setLineWidth:_,setPolygonOffset:at,setScissorTest:Ge,activeTexture:qe,bindTexture:ge,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:M,texImage2D:Re,texImage3D:K,updateUBOMapping:me,uniformBlockBinding:ce,texStorage2D:ee,texStorage3D:xe,texSubImage2D:W,texSubImage3D:q,compressedTexSubImage2D:H,compressedTexSubImage3D:de,scissor:Q,viewport:ue,reset:we}}function ld(e,n,t,i,l,r,d){const m=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,P=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new pt,O=new WeakMap;let L;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(u,a){return v?new OffscreenCanvas(u,a):go("canvas")}function w(u,a,M){let W=1;const q=ge(u);if((q.width>M||q.height>M)&&(W=M/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const H=Math.floor(W*q.width),de=Math.floor(W*q.height);L===void 0&&(L=E(H,de));const ee=a?E(H,de):L;return ee.width=H,ee.height=de,ee.getContext("2d").drawImage(u,0,0,H,de),Ye("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+H+"x"+de+")."),ee}else return"data"in u&&Ye("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),u;return u}function c(u){return u.generateMipmaps}function o(u){e.generateMipmap(u)}function g(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(u,a,M,W,q=!1){if(u!==null){if(e[u]!==void 0)return e[u];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let H=a;if(a===e.RED&&(M===e.FLOAT&&(H=e.R32F),M===e.HALF_FLOAT&&(H=e.R16F),M===e.UNSIGNED_BYTE&&(H=e.R8)),a===e.RED_INTEGER&&(M===e.UNSIGNED_BYTE&&(H=e.R8UI),M===e.UNSIGNED_SHORT&&(H=e.R16UI),M===e.UNSIGNED_INT&&(H=e.R32UI),M===e.BYTE&&(H=e.R8I),M===e.SHORT&&(H=e.R16I),M===e.INT&&(H=e.R32I)),a===e.RG&&(M===e.FLOAT&&(H=e.RG32F),M===e.HALF_FLOAT&&(H=e.RG16F),M===e.UNSIGNED_BYTE&&(H=e.RG8)),a===e.RG_INTEGER&&(M===e.UNSIGNED_BYTE&&(H=e.RG8UI),M===e.UNSIGNED_SHORT&&(H=e.RG16UI),M===e.UNSIGNED_INT&&(H=e.RG32UI),M===e.BYTE&&(H=e.RG8I),M===e.SHORT&&(H=e.RG16I),M===e.INT&&(H=e.RG32I)),a===e.RGB_INTEGER&&(M===e.UNSIGNED_BYTE&&(H=e.RGB8UI),M===e.UNSIGNED_SHORT&&(H=e.RGB16UI),M===e.UNSIGNED_INT&&(H=e.RGB32UI),M===e.BYTE&&(H=e.RGB8I),M===e.SHORT&&(H=e.RGB16I),M===e.INT&&(H=e.RGB32I)),a===e.RGBA_INTEGER&&(M===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),M===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),M===e.UNSIGNED_INT&&(H=e.RGBA32UI),M===e.BYTE&&(H=e.RGBA8I),M===e.SHORT&&(H=e.RGBA16I),M===e.INT&&(H=e.RGBA32I)),a===e.RGB&&(M===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),M===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),a===e.RGBA){const de=q?za:it.getTransfer(W);M===e.FLOAT&&(H=e.RGBA32F),M===e.HALF_FLOAT&&(H=e.RGBA16F),M===e.UNSIGNED_BYTE&&(H=de===$e?e.SRGB8_ALPHA8:e.RGBA8),M===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),M===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function x(u,a){let M;return u?a===null||a===kt||a===fn?M=e.DEPTH24_STENCIL8:a===Nt?M=e.DEPTH32F_STENCIL8:a===Tn&&(M=e.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===kt||a===fn?M=e.DEPTH_COMPONENT24:a===Nt?M=e.DEPTH_COMPONENT32F:a===Tn&&(M=e.DEPTH_COMPONENT16),M}function y(u,a){return c(u)===!0||u.isFramebufferTexture&&u.minFilter!==Wt&&u.minFilter!==mt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function C(u){const a=u.target;a.removeEventListener("dispose",C),f(a),a.isVideoTexture&&O.delete(a)}function I(u){const a=u.target;a.removeEventListener("dispose",I),$(a)}function f(u){const a=i.get(u);if(a.__webglInit===void 0)return;const M=u.source,W=p.get(M);if(W){const q=W[a.__cacheKey];q.usedTimes--,q.usedTimes===0&&h(u),Object.keys(W).length===0&&p.delete(M)}i.remove(u)}function h(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const M=u.source,W=p.get(M);delete W[a.__cacheKey],d.memory.textures--}function $(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(a.__webglFramebuffer[W]))for(let q=0;q<a.__webglFramebuffer[W].length;q++)e.deleteFramebuffer(a.__webglFramebuffer[W][q]);else e.deleteFramebuffer(a.__webglFramebuffer[W]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[W])}else{if(Array.isArray(a.__webglFramebuffer))for(let W=0;W<a.__webglFramebuffer.length;W++)e.deleteFramebuffer(a.__webglFramebuffer[W]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let W=0;W<a.__webglColorRenderbuffer.length;W++)a.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[W]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const M=u.textures;for(let W=0,q=M.length;W<q;W++){const H=i.get(M[W]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),d.memory.textures--),i.remove(M[W])}i.remove(u)}let b=0;function V(){b=0}function k(){const u=b;return u>=l.maxTextures&&Ye("WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+l.maxTextures),b+=1,u}function z(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function Y(u,a){const M=i.get(u);if(u.isVideoTexture&&Ge(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&M.__version!==u.version){const W=u.image;if(W===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{X(M,u,a);return}}else u.isExternalTexture&&(M.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,M.__webglTexture,e.TEXTURE0+a)}function B(u,a){const M=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&M.__version!==u.version){X(M,u,a);return}else u.isExternalTexture&&(M.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,M.__webglTexture,e.TEXTURE0+a)}function F(u,a){const M=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&M.__version!==u.version){X(M,u,a);return}t.bindTexture(e.TEXTURE_3D,M.__webglTexture,e.TEXTURE0+a)}function ie(u,a){const M=i.get(u);if(u.isCubeDepthTexture!==!0&&u.version>0&&M.__version!==u.version){j(M,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+a)}const ae={[Ur]:e.REPEAT,[qn]:e.CLAMP_TO_EDGE,[Dr]:e.MIRRORED_REPEAT},Me={[Wt]:e.NEAREST,[wr]:e.NEAREST_MIPMAP_NEAREST,[mn]:e.NEAREST_MIPMAP_LINEAR,[mt]:e.LINEAR,[wn]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},Ae={[Br]:e.NEVER,[Or]:e.ALWAYS,[Fr]:e.LESS,[jn]:e.LEQUAL,[yr]:e.EQUAL,[Jn]:e.GEQUAL,[Nr]:e.GREATER,[Ir]:e.NOTEQUAL};function he(u,a){if(a.type===Nt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===mt||a.magFilter===wn||a.magFilter===mn||a.magFilter===$t||a.minFilter===mt||a.minFilter===wn||a.minFilter===mn||a.minFilter===$t)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ae[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Me[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Me[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Ae[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Wt||a.minFilter!==mn&&a.minFilter!==$t||a.type===Nt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const M=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,l.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ne(u,a){let M=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",C));const W=a.source;let q=p.get(W);q===void 0&&(q={},p.set(W,q));const H=z(a);if(H!==u.__cacheKey){q[H]===void 0&&(q[H]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,M=!0),q[H].usedTimes++;const de=q[u.__cacheKey];de!==void 0&&(q[u.__cacheKey].usedTimes--,de.usedTimes===0&&h(a)),u.__cacheKey=H,u.__webglTexture=q[H].texture}return M}function Je(u,a,M){return Math.floor(Math.floor(u/M)/a)}function je(u,a,M,W){const H=u.updateRanges;if(H.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,M,W,a.data);else{H.sort((K,Q)=>K.start-Q.start);let de=0;for(let K=1;K<H.length;K++){const Q=H[de],ue=H[K],me=Q.start+Q.count,ce=Je(ue.start,a.width,4),we=Je(Q.start,a.width,4);ue.start<=me+1&&ce===we&&Je(ue.start+ue.count-1,a.width,4)===ce?Q.count=Math.max(Q.count,ue.start+ue.count-Q.start):(++de,H[de]=ue)}H.length=de+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),xe=e.getParameter(e.UNPACK_SKIP_PIXELS),Re=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let K=0,Q=H.length;K<Q;K++){const ue=H[K],me=Math.floor(ue.start/4),ce=Math.ceil(ue.count/4),we=me%a.width,S=Math.floor(me/a.width),te=ce,J=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,we),e.pixelStorei(e.UNPACK_SKIP_ROWS,S),t.texSubImage2D(e.TEXTURE_2D,0,we,S,te,J,M,W,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Re)}}function X(u,a,M){let W=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(W=e.TEXTURE_3D);const q=Ne(u,a),H=a.source;t.bindTexture(W,u.__webglTexture,e.TEXTURE0+M);const de=i.get(H);if(H.version!==de.__version||q===!0){t.activeTexture(e.TEXTURE0+M);const ee=it.getPrimaries(it.workingColorSpace),xe=a.colorSpace===Kt?null:it.getPrimaries(a.colorSpace),Re=a.colorSpace===Kt||ee===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let K=w(a.image,!1,l.maxTextureSize);K=qe(a,K);const Q=r.convert(a.format,a.colorSpace),ue=r.convert(a.type);let me=A(a.internalFormat,Q,ue,a.colorSpace,a.isVideoTexture);he(W,a);let ce;const we=a.mipmaps,S=a.isVideoTexture!==!0,te=de.__version===void 0||q===!0,J=H.dataReady,fe=y(a,K);if(a.isDepthTexture)me=x(a.format===Zt,a.type),te&&(S?t.texStorage2D(e.TEXTURE_2D,1,me,K.width,K.height):t.texImage2D(e.TEXTURE_2D,0,me,K.width,K.height,0,Q,ue,null));else if(a.isDataTexture)if(we.length>0){S&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,we[0].width,we[0].height);for(let Z=0,G=we.length;Z<G;Z++)ce=we[Z],S?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ce.width,ce.height,Q,ue,ce.data):t.texImage2D(e.TEXTURE_2D,Z,me,ce.width,ce.height,0,Q,ue,ce.data);a.generateMipmaps=!1}else S?(te&&t.texStorage2D(e.TEXTURE_2D,fe,me,K.width,K.height),J&&je(a,K,Q,ue)):t.texImage2D(e.TEXTURE_2D,0,me,K.width,K.height,0,Q,ue,K.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){S&&te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,we[0].width,we[0].height,K.depth);for(let Z=0,G=we.length;Z<G;Z++)if(ce=we[Z],a.format!==Ct)if(Q!==null)if(S){if(J)if(a.layerUpdates.size>0){const pe=Zi(ce.width,ce.height,a.format,a.type);for(const Ce of a.layerUpdates){const Ke=ce.data.subarray(Ce*pe/ce.data.BYTES_PER_ELEMENT,(Ce+1)*pe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ce,ce.width,ce.height,1,Q,Ke)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,K.depth,Q,ce.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,me,ce.width,ce.height,K.depth,0,ce.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?J&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,K.depth,Q,ue,ce.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,me,ce.width,ce.height,K.depth,0,Q,ue,ce.data)}else{S&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,we[0].width,we[0].height);for(let Z=0,G=we.length;Z<G;Z++)ce=we[Z],a.format!==Ct?Q!==null?S?J&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ce.width,ce.height,Q,ce.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,me,ce.width,ce.height,0,ce.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ce.width,ce.height,Q,ue,ce.data):t.texImage2D(e.TEXTURE_2D,Z,me,ce.width,ce.height,0,Q,ue,ce.data)}else if(a.isDataArrayTexture)if(S){if(te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,K.width,K.height,K.depth),J)if(a.layerUpdates.size>0){const Z=Zi(K.width,K.height,a.format,a.type);for(const G of a.layerUpdates){const pe=K.data.subarray(G*Z/K.data.BYTES_PER_ELEMENT,(G+1)*Z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,G,K.width,K.height,1,Q,ue,pe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Q,ue,K.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,me,K.width,K.height,K.depth,0,Q,ue,K.data);else if(a.isData3DTexture)S?(te&&t.texStorage3D(e.TEXTURE_3D,fe,me,K.width,K.height,K.depth),J&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Q,ue,K.data)):t.texImage3D(e.TEXTURE_3D,0,me,K.width,K.height,K.depth,0,Q,ue,K.data);else if(a.isFramebufferTexture){if(te)if(S)t.texStorage2D(e.TEXTURE_2D,fe,me,K.width,K.height);else{let Z=K.width,G=K.height;for(let pe=0;pe<fe;pe++)t.texImage2D(e.TEXTURE_2D,pe,me,Z,G,0,Q,ue,null),Z>>=1,G>>=1}}else if(we.length>0){if(S&&te){const Z=ge(we[0]);t.texStorage2D(e.TEXTURE_2D,fe,me,Z.width,Z.height)}for(let Z=0,G=we.length;Z<G;Z++)ce=we[Z],S?J&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,Q,ue,ce):t.texImage2D(e.TEXTURE_2D,Z,me,Q,ue,ce);a.generateMipmaps=!1}else if(S){if(te){const Z=ge(K);t.texStorage2D(e.TEXTURE_2D,fe,me,Z.width,Z.height)}J&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Q,ue,K)}else t.texImage2D(e.TEXTURE_2D,0,me,Q,ue,K);c(a)&&o(W),de.__version=H.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function j(u,a,M){if(a.image.length!==6)return;const W=Ne(u,a),q=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+M);const H=i.get(q);if(q.version!==H.__version||W===!0){t.activeTexture(e.TEXTURE0+M);const de=it.getPrimaries(it.workingColorSpace),ee=a.colorSpace===Kt?null:it.getPrimaries(a.colorSpace),xe=a.colorSpace===Kt||de===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=a.isCompressedTexture||a.image[0].isCompressedTexture,K=a.image[0]&&a.image[0].isDataTexture,Q=[];for(let G=0;G<6;G++)!Re&&!K?Q[G]=w(a.image[G],!0,l.maxCubemapSize):Q[G]=K?a.image[G].image:a.image[G],Q[G]=qe(a,Q[G]);const ue=Q[0],me=r.convert(a.format,a.colorSpace),ce=r.convert(a.type),we=A(a.internalFormat,me,ce,a.colorSpace),S=a.isVideoTexture!==!0,te=H.__version===void 0||W===!0,J=q.dataReady;let fe=y(a,ue);he(e.TEXTURE_CUBE_MAP,a);let Z;if(Re){S&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,we,ue.width,ue.height);for(let G=0;G<6;G++){Z=Q[G].mipmaps;for(let pe=0;pe<Z.length;pe++){const Ce=Z[pe];a.format!==Ct?me!==null?S?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,we,Ce.width,Ce.height,0,Ce.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,ce,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,we,Ce.width,Ce.height,0,me,ce,Ce.data)}}}else{if(Z=a.mipmaps,S&&te){Z.length>0&&fe++;const G=ge(Q[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,we,G.width,G.height)}for(let G=0;G<6;G++)if(K){S?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Q[G].width,Q[G].height,me,ce,Q[G].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,Q[G].width,Q[G].height,0,me,ce,Q[G].data);for(let pe=0;pe<Z.length;pe++){const Ke=Z[pe].image[G].image;S?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,Ke.width,Ke.height,me,ce,Ke.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,we,Ke.width,Ke.height,0,me,ce,Ke.data)}}else{S?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,me,ce,Q[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,me,ce,Q[G]);for(let pe=0;pe<Z.length;pe++){const Ce=Z[pe];S?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,me,ce,Ce.image[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,we,me,ce,Ce.image[G])}}}c(a)&&o(e.TEXTURE_CUBE_MAP),H.__version=q.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function ne(u,a,M,W,q,H){const de=r.convert(M.format,M.colorSpace),ee=r.convert(M.type),xe=A(M.internalFormat,de,ee,M.colorSpace),Re=i.get(a),K=i.get(M);if(K.__renderTarget=a,!Re.__hasExternalTextures){const Q=Math.max(1,a.width>>H),ue=Math.max(1,a.height>>H);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,H,xe,Q,ue,a.depth,0,de,ee,null):t.texImage2D(q,H,xe,Q,ue,0,de,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,q,K.__webglTexture,0,_(a)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,q,K.__webglTexture,H),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(u,a,M){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const W=a.depthTexture,q=W&&W.isDepthTexture?W.type:null,H=x(a.stencilBuffer,q),de=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;at(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_(a),H,a.width,a.height):M?e.renderbufferStorageMultisample(e.RENDERBUFFER,_(a),H,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,H,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,u)}else{const W=a.textures;for(let q=0;q<W.length;q++){const H=W[q],de=r.convert(H.format,H.colorSpace),ee=r.convert(H.type),xe=A(H.internalFormat,de,ee,H.colorSpace);at(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_(a),xe,a.width,a.height):M?e.renderbufferStorageMultisample(e.RENDERBUFFER,_(a),xe,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,xe,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(u,a,M){const W=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(a.depthTexture);if(q.__renderTarget=a,(!q.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,a.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),he(e.TEXTURE_CUBE_MAP,a.depthTexture);const Re=r.convert(a.depthTexture.format),K=r.convert(a.depthTexture.type);let Q;a.depthTexture.format===Jt?Q=e.DEPTH_COMPONENT24:a.depthTexture.format===Zt&&(Q=e.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Q,a.width,a.height,0,Re,K,null)}}else Y(a.depthTexture,0);const H=q.__webglTexture,de=_(a),ee=W?e.TEXTURE_CUBE_MAP_POSITIVE_X+M:e.TEXTURE_2D,xe=a.depthTexture.format===Zt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===Jt)at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else if(a.depthTexture.format===Zt)at(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else throw new Error("Unknown depthTexture format")}function be(u){const a=i.get(u),M=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const W=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),W){const q=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),a.__depthDisposeCallback=q}a.__boundDepthTexture=W}if(u.depthTexture&&!a.__autoAllocateDepthBuffer)if(M)for(let W=0;W<6;W++)Te(a.__webglFramebuffer[W],u,W);else{const W=u.texture.mipmaps;W&&W.length>0?Te(a.__webglFramebuffer[0],u,0):Te(a.__webglFramebuffer,u,0)}else if(M){a.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[W]),a.__webglDepthbuffer[W]===void 0)a.__webglDepthbuffer[W]=e.createRenderbuffer(),Le(a.__webglDepthbuffer[W],u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,H)}}else{const W=u.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),Le(a.__webglDepthbuffer,u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,H)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function st(u,a,M){const W=i.get(u);a!==void 0&&ne(W.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),M!==void 0&&be(u)}function ye(u){const a=u.texture,M=i.get(u),W=i.get(a);u.addEventListener("dispose",I);const q=u.textures,H=u.isWebGLCubeRenderTarget===!0,de=q.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=a.version,d.memory.textures++),H){M.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){M.__webglFramebuffer[ee]=[];for(let xe=0;xe<a.mipmaps.length;xe++)M.__webglFramebuffer[ee][xe]=e.createFramebuffer()}else M.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){M.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)M.__webglFramebuffer[ee]=e.createFramebuffer()}else M.__webglFramebuffer=e.createFramebuffer();if(de)for(let ee=0,xe=q.length;ee<xe;ee++){const Re=i.get(q[ee]);Re.__webglTexture===void 0&&(Re.__webglTexture=e.createTexture(),d.memory.textures++)}if(u.samples>0&&at(u)===!1){M.__webglMultisampledFramebuffer=e.createFramebuffer(),M.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const xe=q[ee];M.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,M.__webglColorRenderbuffer[ee]);const Re=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),Q=A(xe.internalFormat,Re,K,xe.colorSpace,u.isXRRenderTarget===!0),ue=_(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,ue,Q,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,M.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(M.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(M.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){t.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),he(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(M.__webglFramebuffer[ee][xe],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe);else ne(M.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);c(a)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,xe=q.length;ee<xe;ee++){const Re=q[ee],K=i.get(Re);let Q=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(Q=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Q,K.__webglTexture),he(Q,Re),ne(M.__webglFramebuffer,u,Re,e.COLOR_ATTACHMENT0+ee,Q,0),c(Re)&&o(Q)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,W.__webglTexture),he(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(M.__webglFramebuffer[xe],u,a,e.COLOR_ATTACHMENT0,ee,xe);else ne(M.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);c(a)&&o(ee),t.unbindTexture()}u.depthBuffer&&be(u)}function He(u){const a=u.textures;for(let M=0,W=a.length;M<W;M++){const q=a[M];if(c(q)){const H=g(u),de=i.get(q).__webglTexture;t.bindTexture(H,de),o(H),t.unbindTexture()}}}const ke=[],Ue=[];function tt(u){if(u.samples>0){if(at(u)===!1){const a=u.textures,M=u.width,W=u.height;let q=e.COLOR_BUFFER_BIT;const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=i.get(u),ee=a.length>1;if(ee)for(let Re=0;Re<a.length;Re++)t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const xe=u.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<a.length;Re++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const K=i.get(a[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,K,0)}e.blitFramebuffer(0,0,M,W,0,0,M,W,q,e.NEAREST),P===!0&&(ke.length=0,Ue.length=0,ke.push(e.COLOR_ATTACHMENT0+Re),u.depthBuffer&&u.resolveDepthBuffer===!1&&(ke.push(H),Ue.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let Re=0;Re<a.length;Re++){t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const K=i.get(a[Re]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,K,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&P){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function _(u){return Math.min(l.maxSamples,u.samples)}function at(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function Ge(u){const a=d.render.frame;O.get(u)!==a&&(O.set(u,a),u.update())}function qe(u,a){const M=u.colorSpace,W=u.format,q=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||M!==An&&M!==Kt&&(it.getTransfer(M)===$e?(W!==Ct||q!==xt)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",M)),a}function ge(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(T.width=u.naturalWidth||u.width,T.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(T.width=u.displayWidth,T.height=u.displayHeight):(T.width=u.width,T.height=u.height),T}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=ie,this.rebindTextures=st,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fd(e,n){function t(i,l=Kt){let r;const d=it.getTransfer(l);if(i===xt)return e.UNSIGNED_BYTE;if(i===Ca)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===kr)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Xr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yr)return e.BYTE;if(i===qr)return e.SHORT;if(i===Tn)return e.UNSIGNED_SHORT;if(i===Ua)return e.INT;if(i===kt)return e.UNSIGNED_INT;if(i===Nt)return e.FLOAT;if(i===Ft)return e.HALF_FLOAT;if(i===Kr)return e.ALPHA;if(i===$r)return e.RGB;if(i===Ct)return e.RGBA;if(i===Jt)return e.DEPTH_COMPONENT;if(i===Zt)return e.DEPTH_STENCIL;if(i===Zr)return e.RED;if(i===ba)return e.RED_INTEGER;if(i===dn)return e.RG;if(i===Ra)return e.RG_INTEGER;if(i===Aa)return e.RGBA_INTEGER;if(i===In||i===Nn||i===yn||i===Fn)if(d===$e)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===In)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===In)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hi||i===mi||i===_i||i===gi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mi)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_i)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vi||i===Si||i===Ei||i===xi||i===Mi||i===Ti||i===Ai)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vi||i===Si)return d===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ei)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xi)return r.COMPRESSED_R11_EAC;if(i===Mi)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ti)return r.COMPRESSED_RG11_EAC;if(i===Ai)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ri||i===bi||i===Ci||i===Pi||i===Li||i===Di||i===Ui||i===wi||i===Ii||i===Ni||i===yi||i===Fi||i===Oi||i===Bi)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ri)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ci)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Li)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Di)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ui)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ii)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ni)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gi||i===Hi||i===Vi)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Gi)return d===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wi||i===zi||i===ki||i===Xi)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wi)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zi)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ki)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xi)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const dd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ud=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new La(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Dt({vertexShader:dd,fragmentShader:ud,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hd extends lr{constructor(n,t){super();const i=this;let l=null,r=1,d=null,m="local-floor",P=1,T=null,O=null,L=null,p=null,v=null,E=null;const w=typeof XRWebGLBinding<"u",c=new pd,o={},g=t.getContextAttributes();let A=null,x=null;const y=[],C=[],I=new pt;let f=null;const h=new cn;h.viewport=new ut;const $=new cn;$.viewport=new ut;const b=[h,$],V=new fr;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=y[X];return j===void 0&&(j=new Un,y[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=y[X];return j===void 0&&(j=new Un,y[X]=j),j.getGripSpace()},this.getHand=function(X){let j=y[X];return j===void 0&&(j=new Un,y[X]=j),j.getHandSpace()};function Y(X){const j=C.indexOf(X.inputSource);if(j===-1)return;const ne=y[j];ne!==void 0&&(ne.update(X.inputSource,X.frame,T||d),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",F);for(let X=0;X<y.length;X++){const j=C[X];j!==null&&(C[X]=null,y[X].disconnect(j))}k=null,z=null,c.reset();for(const X in o)delete o[X];n.setRenderTarget(A),v=null,p=null,L=null,l=null,x=null,je.stop(),i.isPresenting=!1,n.setPixelRatio(f),n.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){m=X,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return T||d},this.setReferenceSpace=function(X){T=X},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return L===null&&w&&(L=new XRWebGLBinding(l,t)),L},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(A=n.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",B),l.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),f=n.getPixelRatio(),n.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Le=null,Te=null;g.depth&&(Te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Zt:Jt,Le=g.stencil?fn:kt);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};L=this.getBinding(),p=L.createProjectionLayer(be),l.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),x=new Tt(p.textureWidth,p.textureHeight,{format:Ct,type:xt,depthTexture:new Mn(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:n.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(l,t,ne),l.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),x=new Tt(v.framebufferWidth,v.framebufferHeight,{format:Ct,type:xt,colorSpace:n.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(P),T=null,d=await l.requestReferenceSpace(m),je.setContext(l),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function F(X){for(let j=0;j<X.removed.length;j++){const ne=X.removed[j],Le=C.indexOf(ne);Le>=0&&(C[Le]=null,y[Le].disconnect(ne))}for(let j=0;j<X.added.length;j++){const ne=X.added[j];let Le=C.indexOf(ne);if(Le===-1){for(let be=0;be<y.length;be++)if(be>=C.length){C.push(ne),Le=be;break}else if(C[be]===null){C[be]=ne,Le=be;break}if(Le===-1)break}const Te=y[Le];Te&&Te.connect(ne)}}const ie=new Be,ae=new Be;function Me(X,j,ne){ie.setFromMatrixPosition(j.matrixWorld),ae.setFromMatrixPosition(ne.matrixWorld);const Le=ie.distanceTo(ae),Te=j.projectionMatrix.elements,be=ne.projectionMatrix.elements,st=Te[14]/(Te[10]-1),ye=Te[14]/(Te[10]+1),He=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],Ue=(Te[8]-1)/Te[0],tt=(be[8]+1)/be[0],_=st*Ue,at=st*tt,Ge=Le/(-Ue+tt),qe=Ge*-Ue;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qe),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ge=st+Ge,u=ye+Ge,a=_-qe,M=at+(Le-qe),W=He*ye/u*ge,q=ke*ye/u*ge;X.projectionMatrix.makePerspective(a,M,W,q,ge,u),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ae(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let j=X.near,ne=X.far;c.texture!==null&&(c.depthNear>0&&(j=c.depthNear),c.depthFar>0&&(ne=c.depthFar)),V.near=$.near=h.near=j,V.far=$.far=h.far=ne,(k!==V.near||z!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,z=V.far),V.layers.mask=X.layers.mask|6,h.layers.mask=V.layers.mask&-5,$.layers.mask=V.layers.mask&-3;const Le=X.parent,Te=V.cameras;Ae(V,Le);for(let be=0;be<Te.length;be++)Ae(Te[be],Le);Te.length===2?Me(V,h,$):V.projectionMatrix.copy(h.projectionMatrix),he(X,V,Le)};function he(X,j,ne){ne===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&v===null))return P},this.setFoveation=function(X){P=X,p!==null&&(p.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(V)},this.getCameraTexture=function(X){return o[X]};let Ne=null;function Je(X,j){if(O=j.getViewerPose(T||d),E=j,O!==null){const ne=O.views;v!==null&&(n.setRenderTargetFramebuffer(x,v.framebuffer),n.setRenderTarget(x));let Le=!1;ne.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let ye=0;ye<ne.length;ye++){const He=ne[ye];let ke=null;if(v!==null)ke=v.getViewport(He);else{const tt=L.getViewSubImage(p,He);ke=tt.viewport,ye===0&&(n.setRenderTargetTextures(x,tt.colorTexture,tt.depthStencilTexture),n.setRenderTarget(x))}let Ue=b[ye];Ue===void 0&&(Ue=new cn,Ue.layers.enable(ye),Ue.viewport=new ut,b[ye]=Ue),Ue.matrix.fromArray(He.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(He.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),ye===0&&(V.matrix.copy(Ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(Ue)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){L=i.getBinding();const ye=L.getDepthInformation(ne[0]);ye&&ye.isValid&&ye.texture&&c.init(ye,l.renderState)}if(Te&&Te.includes("camera-access")&&w){n.state.unbindTexture(),L=i.getBinding();for(let ye=0;ye<ne.length;ye++){const He=ne[ye].camera;if(He){let ke=o[He];ke||(ke=new La,o[He]=ke);const Ue=L.getCameraImage(He);ke.sourceTexture=Ue}}}}for(let ne=0;ne<y.length;ne++){const Le=C[ne],Te=y[ne];Le!==null&&Te!==void 0&&Te.update(Le,j,T||d)}Ne&&Ne(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),E=null}const je=new ka;je.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}}const Ht=new Na,md=new Qt;function _d(e,n){function t(c,o){c.matrixAutoUpdate===!0&&c.updateMatrix(),o.value.copy(c.matrix)}function i(c,o){o.color.getRGB(c.fogColor.value,Ia(e)),o.isFog?(c.fogNear.value=o.near,c.fogFar.value=o.far):o.isFogExp2&&(c.fogDensity.value=o.density)}function l(c,o,g,A,x){o.isMeshBasicMaterial?r(c,o):o.isMeshLambertMaterial?(r(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(r(c,o),L(c,o)):o.isMeshPhongMaterial?(r(c,o),O(c,o),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(r(c,o),p(c,o),o.isMeshPhysicalMaterial&&v(c,o,x)):o.isMeshMatcapMaterial?(r(c,o),E(c,o)):o.isMeshDepthMaterial?r(c,o):o.isMeshDistanceMaterial?(r(c,o),w(c,o)):o.isMeshNormalMaterial?r(c,o):o.isLineBasicMaterial?(d(c,o),o.isLineDashedMaterial&&m(c,o)):o.isPointsMaterial?P(c,o,g,A):o.isSpriteMaterial?T(c,o):o.isShadowMaterial?(c.color.value.copy(o.color),c.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(c,o){c.opacity.value=o.opacity,o.color&&c.diffuse.value.copy(o.color),o.emissive&&c.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.bumpMap&&(c.bumpMap.value=o.bumpMap,t(o.bumpMap,c.bumpMapTransform),c.bumpScale.value=o.bumpScale,o.side===_t&&(c.bumpScale.value*=-1)),o.normalMap&&(c.normalMap.value=o.normalMap,t(o.normalMap,c.normalMapTransform),c.normalScale.value.copy(o.normalScale),o.side===_t&&c.normalScale.value.negate()),o.displacementMap&&(c.displacementMap.value=o.displacementMap,t(o.displacementMap,c.displacementMapTransform),c.displacementScale.value=o.displacementScale,c.displacementBias.value=o.displacementBias),o.emissiveMap&&(c.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,c.emissiveMapTransform)),o.specularMap&&(c.specularMap.value=o.specularMap,t(o.specularMap,c.specularMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest);const g=n.get(o),A=g.envMap,x=g.envMapRotation;A&&(c.envMap.value=A,Ht.copy(x),Ht.x*=-1,Ht.y*=-1,Ht.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ht.y*=-1,Ht.z*=-1),c.envMapRotation.value.setFromMatrix4(md.makeRotationFromEuler(Ht)),c.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=o.reflectivity,c.ior.value=o.ior,c.refractionRatio.value=o.refractionRatio),o.lightMap&&(c.lightMap.value=o.lightMap,c.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,c.lightMapTransform)),o.aoMap&&(c.aoMap.value=o.aoMap,c.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,c.aoMapTransform))}function d(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform))}function m(c,o){c.dashSize.value=o.dashSize,c.totalSize.value=o.dashSize+o.gapSize,c.scale.value=o.scale}function P(c,o,g,A){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.size.value=o.size*g,c.scale.value=A*.5,o.map&&(c.map.value=o.map,t(o.map,c.uvTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function T(c,o){c.diffuse.value.copy(o.color),c.opacity.value=o.opacity,c.rotation.value=o.rotation,o.map&&(c.map.value=o.map,t(o.map,c.mapTransform)),o.alphaMap&&(c.alphaMap.value=o.alphaMap,t(o.alphaMap,c.alphaMapTransform)),o.alphaTest>0&&(c.alphaTest.value=o.alphaTest)}function O(c,o){c.specular.value.copy(o.specular),c.shininess.value=Math.max(o.shininess,1e-4)}function L(c,o){o.gradientMap&&(c.gradientMap.value=o.gradientMap)}function p(c,o){c.metalness.value=o.metalness,o.metalnessMap&&(c.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,c.metalnessMapTransform)),c.roughness.value=o.roughness,o.roughnessMap&&(c.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,c.roughnessMapTransform)),o.envMap&&(c.envMapIntensity.value=o.envMapIntensity)}function v(c,o,g){c.ior.value=o.ior,o.sheen>0&&(c.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),c.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(c.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,c.sheenColorMapTransform)),o.sheenRoughnessMap&&(c.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,c.sheenRoughnessMapTransform))),o.clearcoat>0&&(c.clearcoat.value=o.clearcoat,c.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(c.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,c.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(c.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===_t&&c.clearcoatNormalScale.value.negate())),o.dispersion>0&&(c.dispersion.value=o.dispersion),o.iridescence>0&&(c.iridescence.value=o.iridescence,c.iridescenceIOR.value=o.iridescenceIOR,c.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(c.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,c.iridescenceMapTransform)),o.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),o.transmission>0&&(c.transmission.value=o.transmission,c.transmissionSamplerMap.value=g.texture,c.transmissionSamplerSize.value.set(g.width,g.height),o.transmissionMap&&(c.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,c.transmissionMapTransform)),c.thickness.value=o.thickness,o.thicknessMap&&(c.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=o.attenuationDistance,c.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(c.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(c.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=o.specularIntensity,c.specularColor.value.copy(o.specularColor),o.specularColorMap&&(c.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,c.specularColorMapTransform)),o.specularIntensityMap&&(c.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,c.specularIntensityMapTransform))}function E(c,o){o.matcap&&(c.matcap.value=o.matcap)}function w(c,o){const g=n.get(o).light;c.referencePosition.value.setFromMatrixPosition(g.matrixWorld),c.nearDistance.value=g.shadow.camera.near,c.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function gd(e,n,t,i){let l={},r={},d=[];const m=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function P(g,A){const x=A.program;i.uniformBlockBinding(g,x)}function T(g,A){let x=l[g.id];x===void 0&&(E(g),x=O(g),l[g.id]=x,g.addEventListener("dispose",c));const y=A.program;i.updateUBOMapping(g,y);const C=n.render.frame;r[g.id]!==C&&(p(g),r[g.id]=C)}function O(g){const A=L();g.__bindingPointIndex=A;const x=e.createBuffer(),y=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,x),x}function L(){for(let g=0;g<m;g++)if(d.indexOf(g)===-1)return d.push(g),g;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const A=l[g.id],x=g.uniforms,y=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let C=0,I=x.length;C<I;C++){const f=Array.isArray(x[C])?x[C]:[x[C]];for(let h=0,$=f.length;h<$;h++){const b=f[h];if(v(b,C,h,y)===!0){const V=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let z=0;for(let Y=0;Y<k.length;Y++){const B=k[Y],F=w(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,V+z,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(g,A,x,y){const C=g.value,I=A+"_"+x;if(y[I]===void 0)return typeof C=="number"||typeof C=="boolean"?y[I]=C:y[I]=C.clone(),!0;{const f=y[I];if(typeof C=="number"||typeof C=="boolean"){if(f!==C)return y[I]=C,!0}else if(f.equals(C)===!1)return f.copy(C),!0}return!1}function E(g){const A=g.uniforms;let x=0;const y=16;for(let I=0,f=A.length;I<f;I++){const h=Array.isArray(A[I])?A[I]:[A[I]];for(let $=0,b=h.length;$<b;$++){const V=h[$],k=Array.isArray(V.value)?V.value:[V.value];for(let z=0,Y=k.length;z<Y;z++){const B=k[z],F=w(B),ie=x%y,ae=ie%F.boundary,Me=ie+ae;x+=ae,Me!==0&&y-Me<F.storage&&(x+=y-Me),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=F.storage}}}const C=x%y;return C>0&&(x+=y-C),g.__size=x,g.__cache={},this}function w(g){const A={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(A.boundary=4,A.storage=4):g.isVector2?(A.boundary=8,A.storage=8):g.isVector3||g.isColor?(A.boundary=16,A.storage=12):g.isVector4?(A.boundary=16,A.storage=16):g.isMatrix3?(A.boundary=48,A.storage=48):g.isMatrix4?(A.boundary=64,A.storage=64):g.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",g),A}function c(g){const A=g.target;A.removeEventListener("dispose",c);const x=d.indexOf(A.__bindingPointIndex);d.splice(x,1),e.deleteBuffer(l[A.id]),delete l[A.id],delete r[A.id]}function o(){for(const g in l)e.deleteBuffer(l[g]);d=[],l={},r={}}return{bind:P,update:T,dispose:o}}const vd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let St=null;function Sd(){return St===null&&(St=new ur(vd,16,16,dn,Ft),St.name="DFG_LUT",St.minFilter=mt,St.magFilter=mt,St.wrapS=qn,St.wrapT=qn,St.generateMipmaps=!1,St.needsUpdate=!0),St}class Ed{constructor(n={}){const{canvas:t=ar(),context:i=null,depth:l=!0,stencil:r=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:P=!0,preserveDrawingBuffer:T=!1,powerPreference:O="default",failIfMajorPerformanceCaveat:L=!1,reversedDepthBuffer:p=!1,outputBufferType:v=xt}=n;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=d;const w=v,c=new Set([Aa,Ra,ba]),o=new Set([xt,kt,Tn,fn,Ca,Pa]),g=new Uint32Array(4),A=new Int32Array(4);let x=null,y=null;const C=[],I=[];let f=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const h=this;let $=!1;this._outputColorSpace=rr;let b=0,V=0,k=null,z=-1,Y=null;const B=new ut,F=new ut;let ie=null;const ae=new Qe(0);let Me=0,Ae=t.width,he=t.height,Ne=1,Je=null,je=null;const X=new ut(0,0,Ae,he),j=new ut(0,0,Ae,he);let ne=!1;const Le=new xa;let Te=!1,be=!1;const st=new Qt,ye=new Be,He=new ut,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function tt(){return k===null?Ne:1}let _=i;function at(s,R){return t.getContext(s,R)}try{const s={alpha:!0,depth:l,stencil:r,antialias:m,premultipliedAlpha:P,preserveDrawingBuffer:T,powerPreference:O,failIfMajorPerformanceCaveat:L};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${or}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),_===null){const R="webgl2";if(_=at(R,s),_===null)throw at(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw Ze("WebGLRenderer: "+s.message),s}let Ge,qe,ge,u,a,M,W,q,H,de,ee,xe,Re,K,Q,ue,me,ce,we,S,te,J,fe;function Z(){Ge=new Sl(_),Ge.init(),te=new fd(_,Ge),qe=new dl(_,Ge,n,te),ge=new cd(_,Ge),qe.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),u=new Ml(_),a=new Kf,M=new ld(_,Ge,ge,a,qe,te,u),W=new vl(h),q=new Co(_),J=new ll(_,q),H=new El(_,q,u,J),de=new Al(_,H,q,J,u),ce=new Tl(_,qe,M),Q=new ul(a),ee=new qf(h,W,Ge,qe,J,Q),xe=new _d(h,a),Re=new Zf,K=new nd(Ge),me=new cl(h,W,ge,de,E,P),ue=new sd(h,de,qe),fe=new gd(_,u,qe,ge),we=new fl(_,Ge,u),S=new xl(_,Ge,u),u.programs=ee.programs,h.capabilities=qe,h.extensions=Ge,h.properties=a,h.renderLists=Re,h.shadowMap=ue,h.state=ge,h.info=u}Z(),w!==xt&&(f=new bl(w,t.width,t.height,l,r));const G=new hd(h,_);this.xr=G,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const s=Ge.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ge.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(s){s!==void 0&&(Ne=s,this.setSize(Ae,he,!1))},this.getSize=function(s){return s.set(Ae,he)},this.setSize=function(s,R,N=!0){if(G.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=s,he=R,t.width=Math.floor(s*Ne),t.height=Math.floor(R*Ne),N===!0&&(t.style.width=s+"px",t.style.height=R+"px"),f!==null&&f.setSize(t.width,t.height),this.setViewport(0,0,s,R)},this.getDrawingBufferSize=function(s){return s.set(Ae*Ne,he*Ne).floor()},this.setDrawingBufferSize=function(s,R,N){Ae=s,he=R,Ne=N,t.width=Math.floor(s*N),t.height=Math.floor(R*N),this.setViewport(0,0,s,R)},this.setEffects=function(s){if(w===xt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(s){for(let R=0;R<s.length;R++)if(s[R].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}f.setEffects(s||[])},this.getCurrentViewport=function(s){return s.copy(B)},this.getViewport=function(s){return s.copy(X)},this.setViewport=function(s,R,N,U){s.isVector4?X.set(s.x,s.y,s.z,s.w):X.set(s,R,N,U),ge.viewport(B.copy(X).multiplyScalar(Ne).round())},this.getScissor=function(s){return s.copy(j)},this.setScissor=function(s,R,N,U){s.isVector4?j.set(s.x,s.y,s.z,s.w):j.set(s,R,N,U),ge.scissor(F.copy(j).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(s){ge.setScissorTest(ne=s)},this.setOpaqueSort=function(s){Je=s},this.setTransparentSort=function(s){je=s},this.getClearColor=function(s){return s.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(s=!0,R=!0,N=!0){let U=0;if(s){let D=!1;if(k!==null){const oe=k.texture.format;D=c.has(oe)}if(D){const oe=k.texture.type,le=o.has(oe),se=me.getClearColor(),_e=me.getClearAlpha(),Se=se.r,Pe=se.g,Ie=se.b;le?(g[0]=Se,g[1]=Pe,g[2]=Ie,g[3]=_e,_.clearBufferuiv(_.COLOR,0,g)):(A[0]=Se,A[1]=Pe,A[2]=Ie,A[3]=_e,_.clearBufferiv(_.COLOR,0,A))}else U|=_.COLOR_BUFFER_BIT}R&&(U|=_.DEPTH_BUFFER_BIT),N&&(U|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&_.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),me.dispose(),Re.dispose(),K.dispose(),a.dispose(),W.dispose(),de.dispose(),J.dispose(),fe.dispose(),ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",ni),G.removeEventListener("sessionend",ii),Ot.stop()};function pe(s){s.preventDefault(),fi("WebGLRenderer: Context Lost."),$=!0}function Ce(){fi("WebGLRenderer: Context Restored."),$=!1;const s=u.autoReset,R=ue.enabled,N=ue.autoUpdate,U=ue.needsUpdate,D=ue.type;Z(),u.autoReset=s,ue.enabled=R,ue.autoUpdate=N,ue.needsUpdate=U,ue.type=D}function Ke(s){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ve(s){const R=s.target;R.removeEventListener("dispose",Ve),At(R)}function At(s){Rt(s),a.remove(s)}function Rt(s){const R=a.get(s).programs;R!==void 0&&(R.forEach(function(N){ee.releaseProgram(N)}),s.isShaderMaterial&&ee.releaseShaderCache(s))}this.renderBufferDirect=function(s,R,N,U,D,oe){R===null&&(R=ke);const le=D.isMesh&&D.matrixWorld.determinant()<0,se=Ja(s,R,N,U,D);ge.setMaterial(U,le);let _e=N.index,Se=1;if(U.wireframe===!0){if(_e=H.getWireframeAttribute(N),_e===void 0)return;Se=2}const Pe=N.drawRange,Ie=N.attributes.position;let Ee=Pe.start*Se,We=(Pe.start+Pe.count)*Se;oe!==null&&(Ee=Math.max(Ee,oe.start*Se),We=Math.min(We,(oe.start+oe.count)*Se)),_e!==null?(Ee=Math.max(Ee,0),We=Math.min(We,_e.count)):Ie!=null&&(Ee=Math.max(Ee,0),We=Math.min(We,Ie.count));const nt=We-Ee;if(nt<0||nt===1/0)return;J.setup(D,U,se,N,_e);let et,ze=we;if(_e!==null&&(et=q.get(_e),ze=S,ze.setIndex(et)),D.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*tt()),ze.setMode(_.LINES)):ze.setMode(_.TRIANGLES);else if(D.isLine){let ft=U.linewidth;ft===void 0&&(ft=1),ge.setLineWidth(ft*tt()),D.isLineSegments?ze.setMode(_.LINES):D.isLineLoop?ze.setMode(_.LINE_LOOP):ze.setMode(_.LINE_STRIP)}else D.isPoints?ze.setMode(_.POINTS):D.isSprite&&ze.setMode(_.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ma("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ze.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ft=D._multiDrawStarts,ve=D._multiDrawCounts,ht=D._multiDrawCount,Fe=_e?q.get(_e).bytesPerElement:1,gt=a.get(U).currentProgram.getUniforms();for(let vt=0;vt<ht;vt++)gt.setValue(_,"_gl_DrawID",vt),ze.render(ft[vt]/Fe,ve[vt])}else if(D.isInstancedMesh)ze.renderInstances(Ee,nt,D.count);else if(N.isInstancedBufferGeometry){const ft=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,ve=Math.min(N.instanceCount,ft);ze.renderInstances(Ee,nt,ve)}else ze.render(Ee,nt)};function ti(s,R,N){s.transparent===!0&&s.side===bt&&s.forceSinglePass===!1?(s.side=_t,s.needsUpdate=!0,hn(s,R,N),s.side=ln,s.needsUpdate=!0,hn(s,R,N),s.side=bt):hn(s,R,N)}this.compile=function(s,R,N=null){N===null&&(N=s),y=K.get(N),y.init(R),I.push(y),N.traverseVisible(function(D){D.isLight&&D.layers.test(R.layers)&&(y.pushLight(D),D.castShadow&&y.pushShadow(D))}),s!==N&&s.traverseVisible(function(D){D.isLight&&D.layers.test(R.layers)&&(y.pushLight(D),D.castShadow&&y.pushShadow(D))}),y.setupLights();const U=new Set;return s.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const oe=D.material;if(oe)if(Array.isArray(oe))for(let le=0;le<oe.length;le++){const se=oe[le];ti(se,N,D),U.add(se)}else ti(oe,N,D),U.add(oe)}),y=I.pop(),U},this.compileAsync=function(s,R,N=null){const U=this.compile(s,R,N);return new Promise(D=>{function oe(){if(U.forEach(function(le){a.get(le).currentProgram.isReady()&&U.delete(le)}),U.size===0){D(s);return}setTimeout(oe,10)}Ge.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ln=null;function Qa(s){Ln&&Ln(s)}function ni(){Ot.stop()}function ii(){Ot.start()}const Ot=new ka;Ot.setAnimationLoop(Qa),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(s){Ln=s,G.setAnimationLoop(s),s===null?Ot.stop():Ot.start()},G.addEventListener("sessionstart",ni),G.addEventListener("sessionend",ii),this.render=function(s,R){if(R!==void 0&&R.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const N=G.enabled===!0&&G.isPresenting===!0,U=f!==null&&(k===null||N)&&f.begin(h,k);if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(f===null||f.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(R),R=G.getCamera()),s.isScene===!0&&s.onBeforeRender(h,s,R,k),y=K.get(s,I.length),y.init(R),I.push(y),st.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Le.setFromProjectionMatrix(st,di,R.reversedDepth),be=this.localClippingEnabled,Te=Q.init(this.clippingPlanes,be),x=Re.get(s,C.length),x.init(),C.push(x),G.enabled===!0&&G.isPresenting===!0){const le=h.xr.getDepthSensingMesh();le!==null&&Dn(le,R,-1/0,h.sortObjects)}Dn(s,R,0,h.sortObjects),x.finish(),h.sortObjects===!0&&x.sort(Je,je),Ue=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ue&&me.addToRenderList(x,s),this.info.render.frame++,Te===!0&&Q.beginShadows();const D=y.state.shadowsArray;if(ue.render(D,s,R),Te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&f.hasRenderPass())===!1){const le=x.opaque,se=x.transmissive;if(y.setupLights(),R.isArrayCamera){const _e=R.cameras;if(se.length>0)for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se];ri(le,se,s,Ie)}Ue&&me.render(s);for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se];ai(x,s,Ie,Ie.viewport)}}else se.length>0&&ri(le,se,s,R),Ue&&me.render(s),ai(x,s,R)}k!==null&&V===0&&(M.updateMultisampleRenderTarget(k),M.updateRenderTargetMipmap(k)),U&&f.end(h),s.isScene===!0&&s.onAfterRender(h,s,R),J.resetDefaultState(),z=-1,Y=null,I.pop(),I.length>0?(y=I[I.length-1],Te===!0&&Q.setGlobalState(h.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Dn(s,R,N,U){if(s.visible===!1)return;if(s.layers.test(R.layers)){if(s.isGroup)N=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(R);else if(s.isLight)y.pushLight(s),s.castShadow&&y.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||Le.intersectsSprite(s)){U&&He.setFromMatrixPosition(s.matrixWorld).applyMatrix4(st);const le=de.update(s),se=s.material;se.visible&&x.push(s,le,se,N,He.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||Le.intersectsObject(s))){const le=de.update(s),se=s.material;if(U&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),He.copy(s.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),He.copy(le.boundingSphere.center)),He.applyMatrix4(s.matrixWorld).applyMatrix4(st)),Array.isArray(se)){const _e=le.groups;for(let Se=0,Pe=_e.length;Se<Pe;Se++){const Ie=_e[Se],Ee=se[Ie.materialIndex];Ee&&Ee.visible&&x.push(s,le,Ee,N,He.z,Ie)}}else se.visible&&x.push(s,le,se,N,He.z,null)}}const oe=s.children;for(let le=0,se=oe.length;le<se;le++)Dn(oe[le],R,N,U)}function ai(s,R,N,U){const{opaque:D,transmissive:oe,transparent:le}=s;y.setupLightsView(N),Te===!0&&Q.setGlobalState(h.clippingPlanes,N),U&&ge.viewport(B.copy(U)),D.length>0&&pn(D,R,N),oe.length>0&&pn(oe,R,N),le.length>0&&pn(le,R,N),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ri(s,R,N,U){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[U.id]===void 0){const Ee=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[U.id]=new Tt(1,1,{generateMipmaps:!0,type:Ee?Ft:xt,minFilter:$t,samples:qe.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const oe=y.state.transmissionRenderTarget[U.id],le=U.viewport||B;oe.setSize(le.z*h.transmissionResolutionScale,le.w*h.transmissionResolutionScale);const se=h.getRenderTarget(),_e=h.getActiveCubeFace(),Se=h.getActiveMipmapLevel();h.setRenderTarget(oe),h.getClearColor(ae),Me=h.getClearAlpha(),Me<1&&h.setClearColor(16777215,.5),h.clear(),Ue&&me.render(N);const Pe=h.toneMapping;h.toneMapping=Mt;const Ie=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),y.setupLightsView(U),Te===!0&&Q.setGlobalState(h.clippingPlanes,U),pn(s,N,U),M.updateMultisampleRenderTarget(oe),M.updateRenderTargetMipmap(oe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let We=0,nt=R.length;We<nt;We++){const et=R[We],{object:ze,geometry:ft,material:ve,group:ht}=et;if(ve.side===bt&&ze.layers.test(U.layers)){const Fe=ve.side;ve.side=_t,ve.needsUpdate=!0,oi(ze,N,U,ft,ve,ht),ve.side=Fe,ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(M.updateMultisampleRenderTarget(oe),M.updateRenderTargetMipmap(oe))}h.setRenderTarget(se,_e,Se),h.setClearColor(ae,Me),Ie!==void 0&&(U.viewport=Ie),h.toneMapping=Pe}function pn(s,R,N){const U=R.isScene===!0?R.overrideMaterial:null;for(let D=0,oe=s.length;D<oe;D++){const le=s[D],{object:se,geometry:_e,group:Se}=le;let Pe=le.material;Pe.allowOverride===!0&&U!==null&&(Pe=U),se.layers.test(N.layers)&&oi(se,R,N,_e,Pe,Se)}}function oi(s,R,N,U,D,oe){s.onBeforeRender(h,R,N,U,D,oe),s.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),D.onBeforeRender(h,R,N,U,s,oe),D.transparent===!0&&D.side===bt&&D.forceSinglePass===!1?(D.side=_t,D.needsUpdate=!0,h.renderBufferDirect(N,R,U,D,s,oe),D.side=ln,D.needsUpdate=!0,h.renderBufferDirect(N,R,U,D,s,oe),D.side=bt):h.renderBufferDirect(N,R,U,D,s,oe),s.onAfterRender(h,R,N,U,D,oe)}function hn(s,R,N){R.isScene!==!0&&(R=ke);const U=a.get(s),D=y.state.lights,oe=y.state.shadowsArray,le=D.state.version,se=ee.getParameters(s,D.state,oe,R,N),_e=ee.getProgramCacheKey(se);let Se=U.programs;U.environment=s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial?R.environment:null,U.fog=R.fog;const Pe=s.isMeshStandardMaterial||s.isMeshLambertMaterial&&!s.envMap||s.isMeshPhongMaterial&&!s.envMap;U.envMap=W.get(s.envMap||U.environment,Pe),U.envMapRotation=U.environment!==null&&s.envMap===null?R.environmentRotation:s.envMapRotation,Se===void 0&&(s.addEventListener("dispose",Ve),Se=new Map,U.programs=Se);let Ie=Se.get(_e);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===le)return ci(s,se),Ie}else se.uniforms=ee.getUniforms(s),s.onBeforeCompile(se,h),Ie=ee.acquireProgram(se,_e),Se.set(_e,Ie),U.uniforms=se.uniforms;const Ee=U.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),ci(s,se),U.needsLights=er(s),U.lightsStateVersion=le,U.needsLights&&(Ee.ambientLightColor.value=D.state.ambient,Ee.lightProbe.value=D.state.probe,Ee.directionalLights.value=D.state.directional,Ee.directionalLightShadows.value=D.state.directionalShadow,Ee.spotLights.value=D.state.spot,Ee.spotLightShadows.value=D.state.spotShadow,Ee.rectAreaLights.value=D.state.rectArea,Ee.ltc_1.value=D.state.rectAreaLTC1,Ee.ltc_2.value=D.state.rectAreaLTC2,Ee.pointLights.value=D.state.point,Ee.pointLightShadows.value=D.state.pointShadow,Ee.hemisphereLights.value=D.state.hemi,Ee.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ee.spotLightMatrix.value=D.state.spotLightMatrix,Ee.spotLightMap.value=D.state.spotLightMap,Ee.pointShadowMatrix.value=D.state.pointShadowMatrix),U.currentProgram=Ie,U.uniformsList=null,Ie}function si(s){if(s.uniformsList===null){const R=s.currentProgram.getUniforms();s.uniformsList=xn.seqWithValue(R.seq,s.uniforms)}return s.uniformsList}function ci(s,R){const N=a.get(s);N.outputColorSpace=R.outputColorSpace,N.batching=R.batching,N.batchingColor=R.batchingColor,N.instancing=R.instancing,N.instancingColor=R.instancingColor,N.instancingMorph=R.instancingMorph,N.skinning=R.skinning,N.morphTargets=R.morphTargets,N.morphNormals=R.morphNormals,N.morphColors=R.morphColors,N.morphTargetsCount=R.morphTargetsCount,N.numClippingPlanes=R.numClippingPlanes,N.numIntersection=R.numClipIntersection,N.vertexAlphas=R.vertexAlphas,N.vertexTangents=R.vertexTangents,N.toneMapping=R.toneMapping}function Ja(s,R,N,U,D){R.isScene!==!0&&(R=ke),M.resetTextureUnits();const oe=R.fog,le=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?R.environment:null,se=k===null?h.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:An,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Se=W.get(U.envMap||le,_e),Pe=U.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ie=!!N.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ee=!!N.morphAttributes.position,We=!!N.morphAttributes.normal,nt=!!N.morphAttributes.color;let et=Mt;U.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(et=h.toneMapping);const ze=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ft=ze!==void 0?ze.length:0,ve=a.get(U),ht=y.state.lights;if(Te===!0&&(be===!0||s!==Y)){const ct=s===Y&&U.id===z;Q.setState(U,s,ct)}let Fe=!1;U.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ht.state.version||ve.outputColorSpace!==se||D.isBatchedMesh&&ve.batching===!1||!D.isBatchedMesh&&ve.batching===!0||D.isBatchedMesh&&ve.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ve.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ve.instancing===!1||!D.isInstancedMesh&&ve.instancing===!0||D.isSkinnedMesh&&ve.skinning===!1||!D.isSkinnedMesh&&ve.skinning===!0||D.isInstancedMesh&&ve.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ve.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ve.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ve.instancingMorph===!1&&D.morphTexture!==null||ve.envMap!==Se||U.fog===!0&&ve.fog!==oe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Pe||ve.vertexTangents!==Ie||ve.morphTargets!==Ee||ve.morphNormals!==We||ve.morphColors!==nt||ve.toneMapping!==et||ve.morphTargetsCount!==ft)&&(Fe=!0):(Fe=!0,ve.__version=U.version);let gt=ve.currentProgram;Fe===!0&&(gt=hn(U,R,D));let vt=!1,Bt=!1,Xt=!1;const Xe=gt.getUniforms(),lt=ve.uniforms;if(ge.useProgram(gt.program)&&(vt=!0,Bt=!0,Xt=!0),U.id!==z&&(z=U.id,Bt=!0),vt||Y!==s){ge.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),Xe.setValue(_,"projectionMatrix",s.projectionMatrix),Xe.setValue(_,"viewMatrix",s.matrixWorldInverse);const wt=Xe.map.cameraPosition;wt!==void 0&&wt.setValue(_,ye.setFromMatrixPosition(s.matrixWorld)),qe.logarithmicDepthBuffer&&Xe.setValue(_,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Xe.setValue(_,"isOrthographic",s.isOrthographicCamera===!0),Y!==s&&(Y=s,Bt=!0,Xt=!0)}if(ve.needsLights&&(ht.state.directionalShadowMap.length>0&&Xe.setValue(_,"directionalShadowMap",ht.state.directionalShadowMap,M),ht.state.spotShadowMap.length>0&&Xe.setValue(_,"spotShadowMap",ht.state.spotShadowMap,M),ht.state.pointShadowMap.length>0&&Xe.setValue(_,"pointShadowMap",ht.state.pointShadowMap,M)),D.isSkinnedMesh){Xe.setOptional(_,D,"bindMatrix"),Xe.setOptional(_,D,"bindMatrixInverse");const ct=D.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Xe.setValue(_,"boneTexture",ct.boneTexture,M))}D.isBatchedMesh&&(Xe.setOptional(_,D,"batchingTexture"),Xe.setValue(_,"batchingTexture",D._matricesTexture,M),Xe.setOptional(_,D,"batchingIdTexture"),Xe.setValue(_,"batchingIdTexture",D._indirectTexture,M),Xe.setOptional(_,D,"batchingColorTexture"),D._colorsTexture!==null&&Xe.setValue(_,"batchingColorTexture",D._colorsTexture,M));const Ut=N.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&ce.update(D,N,gt),(Bt||ve.receiveShadow!==D.receiveShadow)&&(ve.receiveShadow=D.receiveShadow,Xe.setValue(_,"receiveShadow",D.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&R.environment!==null&&(lt.envMapIntensity.value=R.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=Sd()),Bt&&(Xe.setValue(_,"toneMappingExposure",h.toneMappingExposure),ve.needsLights&&ja(lt,Xt),oe&&U.fog===!0&&xe.refreshFogUniforms(lt,oe),xe.refreshMaterialUniforms(lt,U,Ne,he,y.state.transmissionRenderTarget[s.id]),xn.upload(_,si(ve),lt,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(xn.upload(_,si(ve),lt,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Xe.setValue(_,"center",D.center),Xe.setValue(_,"modelViewMatrix",D.modelViewMatrix),Xe.setValue(_,"normalMatrix",D.normalMatrix),Xe.setValue(_,"modelMatrix",D.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ct=U.uniformsGroups;for(let wt=0,Yt=ct.length;wt<Yt;wt++){const li=ct[wt];fe.update(li,gt),fe.bind(li,gt)}}return gt}function ja(s,R){s.ambientLightColor.needsUpdate=R,s.lightProbe.needsUpdate=R,s.directionalLights.needsUpdate=R,s.directionalLightShadows.needsUpdate=R,s.pointLights.needsUpdate=R,s.pointLightShadows.needsUpdate=R,s.spotLights.needsUpdate=R,s.spotLightShadows.needsUpdate=R,s.rectAreaLights.needsUpdate=R,s.hemisphereLights.needsUpdate=R}function er(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(s,R,N){const U=a.get(s);U.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),a.get(s.texture).__webglTexture=R,a.get(s.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:N,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,R){const N=a.get(s);N.__webglFramebuffer=R,N.__useDefaultFramebuffer=R===void 0};const tr=_.createFramebuffer();this.setRenderTarget=function(s,R=0,N=0){k=s,b=R,V=N;let U=null,D=!1,oe=!1;if(s){const se=a.get(s);if(se.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(_.FRAMEBUFFER,se.__webglFramebuffer),B.copy(s.viewport),F.copy(s.scissor),ie=s.scissorTest,ge.viewport(B),ge.scissor(F),ge.setScissorTest(ie),z=-1;return}else if(se.__webglFramebuffer===void 0)M.setupRenderTarget(s);else if(se.__hasExternalTextures)M.rebindTextures(s,a.get(s.texture).__webglTexture,a.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const Pe=s.depthTexture;if(se.__boundDepthTexture!==Pe){if(Pe!==null&&a.has(Pe)&&(s.width!==Pe.image.width||s.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(s)}}const _e=s.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const Se=a.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Se[R])?U=Se[R][N]:U=Se[R],D=!0):s.samples>0&&M.useMultisampledRTT(s)===!1?U=a.get(s).__webglMultisampledFramebuffer:Array.isArray(Se)?U=Se[N]:U=Se,B.copy(s.viewport),F.copy(s.scissor),ie=s.scissorTest}else B.copy(X).multiplyScalar(Ne).floor(),F.copy(j).multiplyScalar(Ne).floor(),ie=ne;if(N!==0&&(U=tr),ge.bindFramebuffer(_.FRAMEBUFFER,U)&&ge.drawBuffers(s,U),ge.viewport(B),ge.scissor(F),ge.setScissorTest(ie),D){const se=a.get(s.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+R,se.__webglTexture,N)}else if(oe){const se=R;for(let _e=0;_e<s.textures.length;_e++){const Se=a.get(s.textures[_e]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+_e,Se.__webglTexture,N,se)}}else if(s!==null&&N!==0){const se=a.get(s.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,se.__webglTexture,N)}z=-1},this.readRenderTargetPixels=function(s,R,N,U,D,oe,le,se=0){if(!(s&&s.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){ge.bindFramebuffer(_.FRAMEBUFFER,_e);try{const Se=s.textures[se],Pe=Se.format,Ie=Se.type;if(s.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+se),!qe.textureFormatReadable(Pe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ie)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=s.width-U&&N>=0&&N<=s.height-D&&_.readPixels(R,N,U,D,te.convert(Pe),te.convert(Ie),oe)}finally{const Se=k!==null?a.get(k).__webglFramebuffer:null;ge.bindFramebuffer(_.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(s,R,N,U,D,oe,le,se=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e)if(R>=0&&R<=s.width-U&&N>=0&&N<=s.height-D){ge.bindFramebuffer(_.FRAMEBUFFER,_e);const Se=s.textures[se],Pe=Se.format,Ie=Se.type;if(s.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+se),!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Ee),_.bufferData(_.PIXEL_PACK_BUFFER,oe.byteLength,_.STREAM_READ),_.readPixels(R,N,U,D,te.convert(Pe),te.convert(Ie),0);const We=k!==null?a.get(k).__webglFramebuffer:null;ge.bindFramebuffer(_.FRAMEBUFFER,We);const nt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await sr(_,nt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Ee),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,oe),_.deleteBuffer(Ee),_.deleteSync(nt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,R=null,N=0){const U=Math.pow(2,-N),D=Math.floor(s.image.width*U),oe=Math.floor(s.image.height*U),le=R!==null?R.x:0,se=R!==null?R.y:0;M.setTexture2D(s,0),_.copyTexSubImage2D(_.TEXTURE_2D,N,0,0,le,se,D,oe),ge.unbindTexture()};const nr=_.createFramebuffer(),ir=_.createFramebuffer();this.copyTextureToTexture=function(s,R,N=null,U=null,D=0,oe=0){let le,se,_e,Se,Pe,Ie,Ee,We,nt;const et=s.isCompressedTexture?s.mipmaps[oe]:s.image;if(N!==null)le=N.max.x-N.min.x,se=N.max.y-N.min.y,_e=N.isBox3?N.max.z-N.min.z:1,Se=N.min.x,Pe=N.min.y,Ie=N.isBox3?N.min.z:0;else{const lt=Math.pow(2,-D);le=Math.floor(et.width*lt),se=Math.floor(et.height*lt),s.isDataArrayTexture?_e=et.depth:s.isData3DTexture?_e=Math.floor(et.depth*lt):_e=1,Se=0,Pe=0,Ie=0}U!==null?(Ee=U.x,We=U.y,nt=U.z):(Ee=0,We=0,nt=0);const ze=te.convert(R.format),ft=te.convert(R.type);let ve;R.isData3DTexture?(M.setTexture3D(R,0),ve=_.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),ve=_.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),ve=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,R.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,R.unpackAlignment);const ht=_.getParameter(_.UNPACK_ROW_LENGTH),Fe=_.getParameter(_.UNPACK_IMAGE_HEIGHT),gt=_.getParameter(_.UNPACK_SKIP_PIXELS),vt=_.getParameter(_.UNPACK_SKIP_ROWS),Bt=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,et.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,et.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Se),_.pixelStorei(_.UNPACK_SKIP_ROWS,Pe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ie);const Xt=s.isDataArrayTexture||s.isData3DTexture,Xe=R.isDataArrayTexture||R.isData3DTexture;if(s.isDepthTexture){const lt=a.get(s),Ut=a.get(R),ct=a.get(lt.__renderTarget),wt=a.get(Ut.__renderTarget);ge.bindFramebuffer(_.READ_FRAMEBUFFER,ct.__webglFramebuffer),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Yt=0;Yt<_e;Yt++)Xt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,a.get(s).__webglTexture,D,Ie+Yt),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,a.get(R).__webglTexture,oe,nt+Yt)),_.blitFramebuffer(Se,Pe,le,se,Ee,We,le,se,_.DEPTH_BUFFER_BIT,_.NEAREST);ge.bindFramebuffer(_.READ_FRAMEBUFFER,null),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(D!==0||s.isRenderTargetTexture||a.has(s)){const lt=a.get(s),Ut=a.get(R);ge.bindFramebuffer(_.READ_FRAMEBUFFER,nr),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,ir);for(let ct=0;ct<_e;ct++)Xt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,lt.__webglTexture,D,Ie+ct):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,lt.__webglTexture,D),Xe?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,nt+ct):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ut.__webglTexture,oe),D!==0?_.blitFramebuffer(Se,Pe,le,se,Ee,We,le,se,_.COLOR_BUFFER_BIT,_.NEAREST):Xe?_.copyTexSubImage3D(ve,oe,Ee,We,nt+ct,Se,Pe,le,se):_.copyTexSubImage2D(ve,oe,Ee,We,Se,Pe,le,se);ge.bindFramebuffer(_.READ_FRAMEBUFFER,null),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Xe?s.isDataTexture||s.isData3DTexture?_.texSubImage3D(ve,oe,Ee,We,nt,le,se,_e,ze,ft,et.data):R.isCompressedArrayTexture?_.compressedTexSubImage3D(ve,oe,Ee,We,nt,le,se,_e,ze,et.data):_.texSubImage3D(ve,oe,Ee,We,nt,le,se,_e,ze,ft,et):s.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,oe,Ee,We,le,se,ze,ft,et.data):s.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,oe,Ee,We,et.width,et.height,ze,et.data):_.texSubImage2D(_.TEXTURE_2D,oe,Ee,We,le,se,ze,ft,et);_.pixelStorei(_.UNPACK_ROW_LENGTH,ht),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Fe),_.pixelStorei(_.UNPACK_SKIP_PIXELS,gt),_.pixelStorei(_.UNPACK_SKIP_ROWS,vt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Bt),oe===0&&R.generateMipmaps&&_.generateMipmap(ve),ge.unbindTexture()},this.initRenderTarget=function(s){a.get(s).__webglFramebuffer===void 0&&M.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?M.setTextureCube(s,0):s.isData3DTexture?M.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?M.setTexture2DArray(s,0):M.setTexture2D(s,0),ge.unbindTexture()},this.resetState=function(){b=0,V=0,k=null,ge.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(n),t.unpackColorSpace=it._getUnpackColorSpace()}}const It={instanceName:"ExPerspectiveCamera",cameraProps:{near:.01,far:1e4},cameraPosition:{x:0,y:0,z:0},cameraAspect:null,cameraFov:45,fitFovToViewport:!0,time:0,lookCenter:!0};class xd{stage;renderer;instance;basePosition;instanceName;cameraProps;cameraPosition;cameraAspect;cameraFov;fitFovToViewport;time;lookCenter;constructor(n={}){this.stage=n.stage??null,this.renderer=n.renderer??null,this.basePosition={x:0,y:0,z:0},this.instanceName=n.instanceName??It.instanceName,this.cameraProps=n.cameraProps??It.cameraProps,this.cameraPosition=n.cameraPosition??It.cameraPosition,this.cameraAspect=n.cameraAspect??It.cameraAspect,this.cameraFov=n.cameraFov??It.cameraFov,this.fitFovToViewport=n.fitFovToViewport??It.fitFovToViewport,this.time=n.time??It.time,this.lookCenter=n.lookCenter??It.lookCenter}init(){this._setInstance(),this._setCamera(),this._setPosition()}destroy(){this.instance&&this.instance.clearViewOffset()}_setInstance(){this.instance=new cn,Object.assign(this.instance,this.cameraProps)}_setCamera(){this._setFov(),this._setBasePosition(),this.instance.updateProjectionMatrix(),this.renderer&&this.stage&&this.renderer.setSize(this.stage.stageSize.width,this.stage.stageSize.height)}_setFov(){this.stage&&(this.instance.aspect=this.cameraAspect?this.cameraAspect:this.stage.stageSize.aspect.xy||document.body.clientWidth/window.innerHeight,this.instance.fov=this.cameraFov)}_setBasePosition(){this.basePosition.x=this.cameraPosition.x,this.basePosition.y=this.cameraPosition.y,this.fitFovToViewport&&this.stage?this.basePosition.z=$n.calcViewportDistance(this.stage.stageSize.height,this.instance.fov):this.basePosition.z=this.cameraPosition.z}_setPosition(){this.instance.position.x=this.basePosition.x,this.instance.position.y=this.basePosition.y,this.instance.position.z=this.basePosition.z}onResize(n){this._setCamera()}onRaf(n){this._setPosition()}}const Md=1.5,Td=1.25,rn={instanceName:"BaseStage",dpr:Math.min(window.devicePixelRatio,Md),rendererColor:{color:0,alpha:1},webGLRendererParameters:{antialias:!1,alpha:!1},sceneParameters:{autoUpdate:!1}};class Za{webgl;detection;$canvas;$canvasContainer;renderer;scene;camera;stageSize;gui;instanceName;dpr;rendererColor;webGLRendererParameters;sceneParameters;constructor(n={}){this.webgl={},this.detection=null,this.$canvas=n.$canvas??null,this.$canvasContainer=n.$canvasContainer??null,this.renderer=null,this.scene=null,this.camera=null,this.stageSize={width:0,height:0,widthRatio:0,heightRatio:0,aspect:{xy:0,yx:0}},this.gui=null,this.instanceName=n.instanceName??rn.instanceName,this.dpr=n.dpr??rn.dpr,this.rendererColor=n.rendererColor??rn.rendererColor,this.webGLRendererParameters=n.webGLRendererParameters??rn.webGLRendererParameters,this.sceneParameters=n.sceneParameters??rn.sceneParameters,zt.isMobileLayout&&(this.dpr=Math.min(window.devicePixelRatio,Td))}init(){this.$canvas?this.webGLRendererParameters.canvas=this.$canvas:this.webGLRendererParameters.canvas=document.createElement("canvas"),this.renderer=new Ed(this.webGLRendererParameters),this.scene=new Ro,this._setStageSize(),this._setCameraInstance(),this._initRenderer()}destroy(){this.camera&&this.camera.destroy(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss()),this.camera=null,this.renderer=null,this.scene=null}_setCameraInstance(){this.camera=new xd({stage:this,webgl:this.webgl,sizes:this.stageSize,renderer:this.renderer,detection:this.detection,gui:this.gui}),this.camera.init()}_initRenderer(){this.renderer&&(this.renderer.setClearColor(this.rendererColor.color,this.rendererColor.alpha),this.setRenderer())}setRenderer(){this.renderer&&(this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.renderer.setPixelRatio(this.dpr))}hideRenderer(){this.renderer&&(this.renderer.setSize(0,0),this.renderer.setPixelRatio(.1))}_setStageSize(){if(this.$canvasContainer){const n=this.$canvasContainer.getBoundingClientRect();this.stageSize.width=n.width||document.body.clientWidth,this.stageSize.height=n.height||window.innerHeight}else this.stageSize.width=document.body.clientWidth,this.stageSize.height=window.innerHeight,(zt.isMobileDevice||zt.isTabletDevice)&&(this.stageSize.height=bo.get100Lvh());this.stageSize.widthRatio=1/this.stageSize.width,this.stageSize.heightRatio=1/this.stageSize.height,this.stageSize.aspect.xy=this.stageSize.width/this.stageSize.height,this.stageSize.aspect.yx=this.stageSize.height/this.stageSize.width,this.setRenderer(),this.onRender()}onRender(){this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera.instance)}onResize(){this._setStageSize(),this.camera&&this.camera.onResize(this.stageSize),requestAnimationFrame(()=>{this.setRenderer()})}onRaf(n){this.camera&&this.camera.onRaf(n),this.onRender()}}const Yn={instanceName:"BaseWebgl",$name:{canvas:"[data-gl]",canvasContainer:"[data-gl-container]"},adjuster:{timeDelta:{digit:1e4,max:.019,min:.015}}};class Ad{timeDelta;$wrapper;$canvas;$canvasContainer;instanceName;$name;adjuster;stage;canUpdate=!0;canUpdateMesh=!0;canResize=!0;constructor(n={}){this.timeDelta=0,this.$wrapper=document,this.$canvas=null,this.$canvasContainer=null,this.instanceName=n.instanceName??Yn.instanceName,this.$name=n.$name??Yn.$name,this.adjuster=n.adjuster??Yn.adjuster}init(){this._set$(),this._setStage(),this.addHandlers()}destroy(){this.removeHandlers(),this.stage&&this.stage.destroy()}_set$(){this.$canvasContainer=this.$wrapper.querySelector(this.$name.canvasContainer),this.$canvasContainer?this.$canvas=this.$canvasContainer.querySelector(this.$name.canvas):this.$canvas=this.$wrapper.querySelector(this.$name.canvas)}_setStage(){this.$canvas&&(this.stage=new Za({$canvasContainer:this.$canvasContainer,$canvas:this.$canvas}),this.stage.init())}addHandlers(){zt.raf.add(this.onRaf.bind(this),this.instanceName),zt.resize.add(this.onResize.bind(this),this.instanceName,"window")}removeHandlers(){zt.raf.removeById(this.instanceName),zt.resize.removeById(this.instanceName)}onResize(){[this.stage].forEach(t=>{t&&t.onResize()})}onRaf(n){this.calcTime(n),this.stage&&this.stage.onRaf(n)}calcTime(n){this.timeDelta=n/1e3,this.timeDelta=$n.floorEx(this.timeDelta,this.adjuster.timeDelta.digit),this.timeDelta=$n.clamp(this.timeDelta,this.adjuster.timeDelta.min,this.adjuster.timeDelta.max)}stop(){this.canUpdate=!1,this.canUpdateMesh=!1,this.canResize=!1}restart(){this.canUpdateMesh=!0,this.canUpdate=!0,this.canResize=!0}clear(){this.stop()}}class Rd extends Za{constructor(n={}){super(n)}init(){super.init()}destroy(){super.destroy()}onResize(){super.onResize()}onRaf(n){super.onRaf(n)}}const bd={instanceName:"webgl"};class Dd extends Ad{scroll=0;textureCache=new Map;logoPixelCache=null;currentPageWebgl=null;pageRegistry=new Map([["home",async()=>(await Gn(async()=>{const{HomeWebgl:n}=await import("./HomeWebgl.QOKi0UKI.js").then(t=>t.H);return{HomeWebgl:n}},__vite__mapDeps([0,1,2,3,4]))).HomeWebgl],["information",async()=>(await Gn(async()=>{const{GradationWebgl:n}=await import("./GradationWebgl.DaZDu3z5.js");return{GradationWebgl:n}},__vite__mapDeps([5,1,2,3,4]))).GradationWebgl],["interview",async()=>(await Gn(async()=>{const{GradationWebgl:n}=await import("./GradationWebgl.DaZDu3z5.js");return{GradationWebgl:n}},__vite__mapDeps([5,1,2,3,4]))).GradationWebgl]]);constructor(n={}){super(n),this.instanceName=n.instanceName??bd.instanceName}init(){super.init()}_setStage(){this.$canvas&&(this.stage=new Rd({$canvasContainer:this.$canvasContainer,$canvas:this.$canvas,rendererColor:{color:0,alpha:0},webGLRendererParameters:{antialias:!1,alpha:!0}}),this.stage&&this.stage.init())}addHandlers(){super.addHandlers()}removeHandlers(){super.removeHandlers()}onRaf(n){const t=Math.min(n/1e3,.016666666666666666);this.currentPageWebgl?.onRaf(t),super.onRaf(n)}onResize(){super.onResize(),this.currentPageWebgl?.onResize()}async enter(n){this.leave();const t=this.pageRegistry.get(n);if(!t)return;const i=await t();this.currentPageWebgl=new i({stage:this.stage}),this.currentPageWebgl.enter()}leave(){this.currentPageWebgl?.leave(),this.currentPageWebgl=null}preloadLogoPixels(){return new Promise(n=>{const t=new Image;t.onload=()=>{const l=t.naturalHeight/t.naturalWidth,r=Math.round(1024*l),d=document.createElement("canvas");d.width=1024,d.height=r;const m=d.getContext("2d");if(!m){n();return}m.drawImage(t,0,0,1024,r);const P=m.getImageData(0,0,1024,r),T=new Set;for(let v=0;v<r;v++)for(let E=0;E<1024;E++){const w=(v*1024+E)*4,c=P.data[w]??255,o=P.data[w+1]??255,g=P.data[w+2]??255,A=P.data[w+3]??0;(c+o+g)/3<80&&A>128&&T.add(v*1024+E)}const O=[],L=[];for(const v of T){const E=v%1024,w=Math.floor(v/1024),c={x:E/1024,y:w/r};O.push(c),(!T.has((w-1)*1024+E)||!T.has((w+1)*1024+E)||!T.has(w*1024+(E-1))||!T.has(w*1024+(E+1)))&&L.push(c)}const p=new Set(L);this.logoPixelCache={pixels:O.length>0?O:[],innerPixels:O.filter(v=>!p.has(v)),aspect:l},n()},t.onerror=()=>n(),t.src="/kiwami-sauna-recruit/kiwami/recruit/assets/svg/logo-b.png"})}}export{Dd as Webgl};
