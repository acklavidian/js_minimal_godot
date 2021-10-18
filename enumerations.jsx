// Tool generated file DO NOT modify mannually
// Add this script as first autoload to your project to bind enumerations for release build of godot engine

if (!godot.DEBUG_ENABLED) {
	function bind(cls, enumerations) {
		if (cls) Object.defineProperties(cls, enumerations);
	};

	bind(godot.ARVRAnchor, {});
	bind(godot.ARVRCamera, {});
	bind(godot.ARVRController, {});
	bind(godot.ARVRInterface, {
		Capabilities: { value: {ARVR_NONE: 0, ARVR_MONO: 1, ARVR_STEREO: 2, ARVR_AR: 4, ARVR_EXTERNAL: 8 } }, 
		Eyes: { value: {EYE_MONO: 0, EYE_LEFT: 1, EYE_RIGHT: 2 } }, 
		Tracking_status: { value: {ARVR_NORMAL_TRACKING: 0, ARVR_EXCESSIVE_MOTION: 1, ARVR_INSUFFICIENT_FEATURES: 2, ARVR_UNKNOWN_TRACKING: 3, ARVR_NOT_TRACKING: 4 } }
	});
	bind(godot.ARVRInterfaceGDNative, {});
	bind(godot.ARVROrigin, {});
	bind(godot.ARVRPositionalTracker, {
		TrackerHand: { value: {TRACKER_HAND_UNKNOWN: 0, TRACKER_LEFT_HAND: 1, TRACKER_RIGHT_HAND: 2 } }
	});
	bind(godot.ARVRServer, {
		RotationMode: { value: {RESET_FULL_ROTATION: 0, RESET_BUT_KEEP_TILT: 1, DONT_RESET_ROTATION: 2 } }, 
		TrackerType: { value: {TRACKER_CONTROLLER: 1, TRACKER_BASESTATION: 2, TRACKER_ANCHOR: 4, TRACKER_ANY_KNOWN: 127, TRACKER_UNKNOWN: 128, TRACKER_ANY: 255 } }
	});
	bind(godot.AStar, {});
	bind(godot.AStar2D, {});
	bind(godot.AcceptDialog, {});
	bind(godot.AnimatedSprite, {});
	bind(godot.AnimatedSprite3D, {});
	bind(godot.AnimatedTexture, {});
	bind(godot.Animation, {
		InterpolationType: { value: {INTERPOLATION_NEAREST: 0, INTERPOLATION_LINEAR: 1, INTERPOLATION_CUBIC: 2 } }, 
		TrackType: { value: {TYPE_VALUE: 0, TYPE_TRANSFORM: 1, TYPE_METHOD: 2, TYPE_BEZIER: 3, TYPE_AUDIO: 4, TYPE_ANIMATION: 5 } }, 
		UpdateMode: { value: {UPDATE_CONTINUOUS: 0, UPDATE_DISCRETE: 1, UPDATE_TRIGGER: 2, UPDATE_CAPTURE: 3 } }
	});
	bind(godot.AnimationNode, {
		FilterAction: { value: {FILTER_IGNORE: 0, FILTER_PASS: 1, FILTER_STOP: 2, FILTER_BLEND: 3 } }
	});
	bind(godot.AnimationNodeAdd2, {});
	bind(godot.AnimationNodeAdd3, {});
	bind(godot.AnimationNodeAnimation, {});
	bind(godot.AnimationNodeBlend2, {});
	bind(godot.AnimationNodeBlend3, {});
	bind(godot.AnimationNodeBlendSpace1D, {});
	bind(godot.AnimationNodeBlendSpace2D, {
		BlendMode: { value: {BLEND_MODE_INTERPOLATED: 0, BLEND_MODE_DISCRETE: 1, BLEND_MODE_DISCRETE_CARRY: 2 } }
	});
	bind(godot.AnimationNodeBlendTree, {});
	bind(godot.AnimationNodeOneShot, {
		MixMode: { value: {MIX_MODE_BLEND: 0, MIX_MODE_ADD: 1 } }
	});
	bind(godot.AnimationNodeOutput, {});
	bind(godot.AnimationNodeStateMachine, {});
	bind(godot.AnimationNodeStateMachinePlayback, {});
	bind(godot.AnimationNodeStateMachineTransition, {
		SwitchMode: { value: {SWITCH_MODE_IMMEDIATE: 0, SWITCH_MODE_SYNC: 1, SWITCH_MODE_AT_END: 2 } }
	});
	bind(godot.AnimationNodeTimeScale, {});
	bind(godot.AnimationNodeTimeSeek, {});
	bind(godot.AnimationNodeTransition, {});
	bind(godot.AnimationPlayer, {
		AnimationMethodCallMode: { value: {ANIMATION_METHOD_CALL_DEFERRED: 0, ANIMATION_METHOD_CALL_IMMEDIATE: 1 } }, 
		AnimationProcessMode: { value: {ANIMATION_PROCESS_PHYSICS: 0, ANIMATION_PROCESS_IDLE: 1, ANIMATION_PROCESS_MANUAL: 2 } }
	});
	bind(godot.AnimationRootNode, {});
	bind(godot.AnimationTrackEditPlugin, {});
	bind(godot.AnimationTree, {
		AnimationProcessMode: { value: {ANIMATION_PROCESS_PHYSICS: 0, ANIMATION_PROCESS_IDLE: 1, ANIMATION_PROCESS_MANUAL: 2 } }
	});
	bind(godot.AnimationTreePlayer, {
		AnimationProcessMode: { value: {ANIMATION_PROCESS_PHYSICS: 0, ANIMATION_PROCESS_IDLE: 1 } }, 
		NodeType: { value: {NODE_OUTPUT: 0, NODE_ANIMATION: 1, NODE_ONESHOT: 2, NODE_MIX: 3, NODE_BLEND2: 4, NODE_BLEND3: 5, NODE_BLEND4: 6, NODE_TIMESCALE: 7, NODE_TIMESEEK: 8, NODE_TRANSITION: 9 } }
	});
	bind(godot.Area, {
		SpaceOverride: { value: {SPACE_OVERRIDE_DISABLED: 0, SPACE_OVERRIDE_COMBINE: 1, SPACE_OVERRIDE_COMBINE_REPLACE: 2, SPACE_OVERRIDE_REPLACE: 3, SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }
	});
	bind(godot.Area2D, {
		SpaceOverride: { value: {SPACE_OVERRIDE_DISABLED: 0, SPACE_OVERRIDE_COMBINE: 1, SPACE_OVERRIDE_COMBINE_REPLACE: 2, SPACE_OVERRIDE_REPLACE: 3, SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }
	});
	bind(godot.ArrayMesh, {
		ArrayFormat: { value: {ARRAY_FORMAT_VERTEX: 1, ARRAY_FORMAT_NORMAL: 2, ARRAY_FORMAT_TANGENT: 4, ARRAY_FORMAT_COLOR: 8, ARRAY_FORMAT_TEX_UV: 16, ARRAY_FORMAT_TEX_UV2: 32, ARRAY_FORMAT_BONES: 64, ARRAY_FORMAT_WEIGHTS: 128, ARRAY_FORMAT_INDEX: 256 } }, 
		ArrayType: { value: {ARRAY_VERTEX: 0, ARRAY_NORMAL: 1, ARRAY_TANGENT: 2, ARRAY_COLOR: 3, ARRAY_TEX_UV: 4, ARRAY_TEX_UV2: 5, ARRAY_BONES: 6, ARRAY_WEIGHTS: 7, ARRAY_INDEX: 8, ARRAY_MAX: 9 } }
	});
	bind(godot.AtlasTexture, {});
	bind(godot.AudioBusLayout, {});
	bind(godot.AudioEffect, {});
	bind(godot.AudioEffectAmplify, {});
	bind(godot.AudioEffectBandLimitFilter, {});
	bind(godot.AudioEffectBandPassFilter, {});
	bind(godot.AudioEffectChorus, {});
	bind(godot.AudioEffectCompressor, {});
	bind(godot.AudioEffectDelay, {});
	bind(godot.AudioEffectDistortion, {
		Mode: { value: {MODE_CLIP: 0, MODE_ATAN: 1, MODE_LOFI: 2, MODE_OVERDRIVE: 3, MODE_WAVESHAPE: 4 } }
	});
	bind(godot.AudioEffectEQ, {});
	bind(godot.AudioEffectEQ10, {});
	bind(godot.AudioEffectEQ21, {});
	bind(godot.AudioEffectEQ6, {});
	bind(godot.AudioEffectFilter, {
		FilterDB: { value: {FILTER_6DB: 0, FILTER_12DB: 1, FILTER_18DB: 2, FILTER_24DB: 3 } }
	});
	bind(godot.AudioEffectHighPassFilter, {});
	bind(godot.AudioEffectHighShelfFilter, {});
	bind(godot.AudioEffectInstance, {});
	bind(godot.AudioEffectLimiter, {});
	bind(godot.AudioEffectLowPassFilter, {});
	bind(godot.AudioEffectLowShelfFilter, {});
	bind(godot.AudioEffectNotchFilter, {});
	bind(godot.AudioEffectPanner, {});
	bind(godot.AudioEffectPhaser, {});
	bind(godot.AudioEffectPitchShift, {
		FFT_Size: { value: {FFT_SIZE_256: 0, FFT_SIZE_512: 1, FFT_SIZE_1024: 2, FFT_SIZE_2048: 3, FFT_SIZE_4096: 4, FFT_SIZE_MAX: 5 } }
	});
	bind(godot.AudioEffectRecord, {});
	bind(godot.AudioEffectReverb, {});
	bind(godot.AudioEffectSpectrumAnalyzer, {
		FFT_Size: { value: {FFT_SIZE_256: 0, FFT_SIZE_512: 1, FFT_SIZE_1024: 2, FFT_SIZE_2048: 3, FFT_SIZE_4096: 4, FFT_SIZE_MAX: 5 } }
	});
	bind(godot.AudioEffectSpectrumAnalyzerInstance, {
		MagnitudeMode: { value: {MAGNITUDE_AVERAGE: 0, MAGNITUDE_MAX: 1 } }
	});
	bind(godot.AudioEffectStereoEnhance, {});
	bind(godot.AudioServer, {
		SpeakerMode: { value: {SPEAKER_MODE_STEREO: 0, SPEAKER_SURROUND_31: 1, SPEAKER_SURROUND_51: 2, SPEAKER_SURROUND_71: 3 } }
	});
	bind(godot.AudioStream, {});
	bind(godot.AudioStreamGenerator, {});
	bind(godot.AudioStreamGeneratorPlayback, {});
	bind(godot.AudioStreamMicrophone, {});
	bind(godot.AudioStreamOGGVorbis, {});
	bind(godot.AudioStreamPlayback, {});
	bind(godot.AudioStreamPlaybackResampled, {});
	bind(godot.AudioStreamPlayer, {
		MixTarget: { value: {MIX_TARGET_STEREO: 0, MIX_TARGET_SURROUND: 1, MIX_TARGET_CENTER: 2 } }
	});
	bind(godot.AudioStreamPlayer2D, {});
	bind(godot.AudioStreamPlayer3D, {
		AttenuationModel: { value: {ATTENUATION_INVERSE_DISTANCE: 0, ATTENUATION_INVERSE_SQUARE_DISTANCE: 1, ATTENUATION_LOGARITHMIC: 2, ATTENUATION_DISABLED: 3 } }, 
		DopplerTracking: { value: {DOPPLER_TRACKING_DISABLED: 0, DOPPLER_TRACKING_IDLE_STEP: 1, DOPPLER_TRACKING_PHYSICS_STEP: 2 } }, 
		OutOfRangeMode: { value: {OUT_OF_RANGE_MIX: 0, OUT_OF_RANGE_PAUSE: 1 } }
	});
	bind(godot.AudioStreamRandomPitch, {});
	bind(godot.AudioStreamSample, {
		Format: { value: {FORMAT_8_BITS: 0, FORMAT_16_BITS: 1, FORMAT_IMA_ADPCM: 2 } }, 
		LoopMode: { value: {LOOP_DISABLED: 0, LOOP_FORWARD: 1, LOOP_PING_PONG: 2, LOOP_BACKWARD: 3 } }
	});
	bind(godot.BackBufferCopy, {
		CopyMode: { value: {COPY_MODE_DISABLED: 0, COPY_MODE_RECT: 1, COPY_MODE_VIEWPORT: 2 } }
	});
	bind(godot.BakedLightmap, {
		BakeError: { value: {BAKE_ERROR_OK: 0, BAKE_ERROR_NO_SAVE_PATH: 1, BAKE_ERROR_NO_MESHES: 2, BAKE_ERROR_CANT_CREATE_IMAGE: 3, BAKE_ERROR_USER_ABORTED: 4 } }, 
		BakeMode: { value: {BAKE_MODE_CONE_TRACE: 0, BAKE_MODE_RAY_TRACE: 1 } }, 
		BakeQuality: { value: {BAKE_QUALITY_LOW: 0, BAKE_QUALITY_MEDIUM: 1, BAKE_QUALITY_HIGH: 2 } }
	});
	bind(godot.BakedLightmapData, {});
	bind(godot.BaseButton, {
		ActionMode: { value: {ACTION_MODE_BUTTON_PRESS: 0, ACTION_MODE_BUTTON_RELEASE: 1 } }, 
		DrawMode: { value: {DRAW_NORMAL: 0, DRAW_PRESSED: 1, DRAW_HOVER: 2, DRAW_DISABLED: 3, DRAW_HOVER_PRESSED: 4 } }
	});
	bind(godot.BitMap, {});
	bind(godot.BitmapFont, {});
	bind(godot.Bone2D, {});
	bind(godot.BoneAttachment, {});
	bind(godot.BoxContainer, {
		AlignMode: { value: {ALIGN_BEGIN: 0, ALIGN_CENTER: 1, ALIGN_END: 2 } }
	});
	bind(godot.BoxShape, {});
	bind(godot.Button, {
		TextAlign: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2 } }
	});
	bind(godot.ButtonGroup, {});
	bind(godot.CPUParticles, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1, DRAW_ORDER_VIEW_DEPTH: 2 } }, 
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_BOX: 2, EMISSION_SHAPE_POINTS: 3, EMISSION_SHAPE_DIRECTED_POINTS: 4, EMISSION_SHAPE_MAX: 5 } }, 
		Flags: { value: {FLAG_ALIGN_Y_TO_VELOCITY: 0, FLAG_ROTATE_Y: 1, FLAG_DISABLE_Z: 2, FLAG_MAX: 3 } }, 
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 12 } }
	});
	bind(godot.CPUParticles2D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1 } }, 
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_RECTANGLE: 2, EMISSION_SHAPE_POINTS: 3, EMISSION_SHAPE_DIRECTED_POINTS: 4, EMISSION_SHAPE_MAX: 5 } }, 
		Flags: { value: {FLAG_ALIGN_Y_TO_VELOCITY: 0, FLAG_ROTATE_Y: 1, FLAG_DISABLE_Z: 2, FLAG_MAX: 3 } }, 
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 12 } }
	});
	bind(godot.CSGBox, {});
	bind(godot.CSGCombiner, {});
	bind(godot.CSGCylinder, {});
	bind(godot.CSGMesh, {});
	bind(godot.CSGPolygon, {
		Mode: { value: {MODE_DEPTH: 0, MODE_SPIN: 1, MODE_PATH: 2 } }, 
		PathRotation: { value: {PATH_ROTATION_POLYGON: 0, PATH_ROTATION_PATH: 1, PATH_ROTATION_PATH_FOLLOW: 2 } }
	});
	bind(godot.CSGPrimitive, {});
	bind(godot.CSGShape, {
		Operation: { value: {OPERATION_UNION: 0, OPERATION_INTERSECTION: 1, OPERATION_SUBTRACTION: 2 } }
	});
	bind(godot.CSGSphere, {});
	bind(godot.CSGTorus, {});
	bind(godot.Camera, {
		DopplerTracking: { value: {DOPPLER_TRACKING_DISABLED: 0, DOPPLER_TRACKING_IDLE_STEP: 1, DOPPLER_TRACKING_PHYSICS_STEP: 2 } }, 
		KeepAspect: { value: {KEEP_WIDTH: 0, KEEP_HEIGHT: 1 } }, 
		Projection: { value: {PROJECTION_PERSPECTIVE: 0, PROJECTION_ORTHOGONAL: 1, PROJECTION_FRUSTUM: 2 } }
	});
	bind(godot.Camera2D, {
		AnchorMode: { value: {ANCHOR_MODE_FIXED_TOP_LEFT: 0, ANCHOR_MODE_DRAG_CENTER: 1 } }, 
		Camera2DProcessMode: { value: {CAMERA2D_PROCESS_PHYSICS: 0, CAMERA2D_PROCESS_IDLE: 1 } }
	});
	bind(godot.CameraFeed, {
		FeedDataType: { value: {FEED_NOIMAGE: 0, FEED_RGB: 1, FEED_YCBCR: 2, FEED_YCBCR_SEP: 3 } }, 
		FeedPosition: { value: {FEED_UNSPECIFIED: 0, FEED_FRONT: 1, FEED_BACK: 2 } }
	});
	bind(godot.CameraServer, {
		FeedImage: { value: {FEED_RGBA_IMAGE: 0, FEED_YCBCR_IMAGE: 0, FEED_Y_IMAGE: 0, FEED_CBCR_IMAGE: 1 } }
	});
	bind(godot.CameraTexture, {});
	bind(godot.CanvasItem, {
		BlendMode: { value: {BLEND_MODE_MIX: 0, BLEND_MODE_ADD: 1, BLEND_MODE_SUB: 2, BLEND_MODE_MUL: 3, BLEND_MODE_PREMULT_ALPHA: 4, BLEND_MODE_DISABLED: 5 } }
	});
	bind(godot.CanvasItemMaterial, {
		BlendMode: { value: {BLEND_MODE_MIX: 0, BLEND_MODE_ADD: 1, BLEND_MODE_SUB: 2, BLEND_MODE_MUL: 3, BLEND_MODE_PREMULT_ALPHA: 4 } }, 
		LightMode: { value: {LIGHT_MODE_NORMAL: 0, LIGHT_MODE_UNSHADED: 1, LIGHT_MODE_LIGHT_ONLY: 2 } }
	});
	bind(godot.CanvasLayer, {});
	bind(godot.CanvasModulate, {});
	bind(godot.CapsuleMesh, {});
	bind(godot.CapsuleShape, {});
	bind(godot.CapsuleShape2D, {});
	bind(godot.CenterContainer, {});
	bind(godot.CharFXTransform, {});
	bind(godot.CheckBox, {});
	bind(godot.CheckButton, {});
	bind(godot.CircleShape2D, {});
	bind(godot.ClassDB, {});
	bind(godot.ClippedCamera, {
		ProcessMode: { value: {CLIP_PROCESS_PHYSICS: 0, CLIP_PROCESS_IDLE: 1 } }
	});
	bind(godot.CollisionObject, {});
	bind(godot.CollisionObject2D, {});
	bind(godot.CollisionPolygon, {});
	bind(godot.CollisionPolygon2D, {
		BuildMode: { value: {BUILD_SOLIDS: 0, BUILD_SEGMENTS: 1 } }
	});
	bind(godot.CollisionShape, {});
	bind(godot.CollisionShape2D, {});
	bind(godot.ColorPicker, {});
	bind(godot.ColorPickerButton, {});
	bind(godot.ColorRect, {});
	bind(godot.ConcavePolygonShape, {});
	bind(godot.ConcavePolygonShape2D, {});
	bind(godot.ConeTwistJoint, {
		Param: { value: {PARAM_SWING_SPAN: 0, PARAM_TWIST_SPAN: 1, PARAM_BIAS: 2, PARAM_SOFTNESS: 3, PARAM_RELAXATION: 4, PARAM_MAX: 5 } }
	});
	bind(godot.ConfigFile, {});
	bind(godot.ConfirmationDialog, {});
	bind(godot.Container, {});
	bind(godot.Control, {
		Anchor: { value: {ANCHOR_BEGIN: 0, ANCHOR_END: 1 } }, 
		CursorShape: { value: {CURSOR_ARROW: 0, CURSOR_IBEAM: 1, CURSOR_POINTING_HAND: 2, CURSOR_CROSS: 3, CURSOR_WAIT: 4, CURSOR_BUSY: 5, CURSOR_DRAG: 6, CURSOR_CAN_DROP: 7, CURSOR_FORBIDDEN: 8, CURSOR_VSIZE: 9, CURSOR_HSIZE: 10, CURSOR_BDIAGSIZE: 11, CURSOR_FDIAGSIZE: 12, CURSOR_MOVE: 13, CURSOR_VSPLIT: 14, CURSOR_HSPLIT: 15, CURSOR_HELP: 16 } }, 
		FocusMode: { value: {FOCUS_NONE: 0, FOCUS_CLICK: 1, FOCUS_ALL: 2 } }, 
		GrowDirection: { value: {GROW_DIRECTION_BEGIN: 0, GROW_DIRECTION_END: 1, GROW_DIRECTION_BOTH: 2 } }, 
		LayoutPreset: { value: {PRESET_TOP_LEFT: 0, PRESET_TOP_RIGHT: 1, PRESET_BOTTOM_LEFT: 2, PRESET_BOTTOM_RIGHT: 3, PRESET_CENTER_LEFT: 4, PRESET_CENTER_TOP: 5, PRESET_CENTER_RIGHT: 6, PRESET_CENTER_BOTTOM: 7, PRESET_CENTER: 8, PRESET_LEFT_WIDE: 9, PRESET_TOP_WIDE: 10, PRESET_RIGHT_WIDE: 11, PRESET_BOTTOM_WIDE: 12, PRESET_VCENTER_WIDE: 13, PRESET_HCENTER_WIDE: 14, PRESET_WIDE: 15 } }, 
		LayoutPresetMode: { value: {PRESET_MODE_MINSIZE: 0, PRESET_MODE_KEEP_WIDTH: 1, PRESET_MODE_KEEP_HEIGHT: 2, PRESET_MODE_KEEP_SIZE: 3 } }, 
		MouseFilter: { value: {MOUSE_FILTER_STOP: 0, MOUSE_FILTER_PASS: 1, MOUSE_FILTER_IGNORE: 2 } }, 
		SizeFlags: { value: {SIZE_FILL: 1, SIZE_EXPAND: 2, SIZE_EXPAND_FILL: 3, SIZE_SHRINK_CENTER: 4, SIZE_SHRINK_END: 8 } }
	});
	bind(godot.ConvexPolygonShape, {});
	bind(godot.ConvexPolygonShape2D, {});
	bind(godot.Crypto, {});
	bind(godot.CryptoKey, {});
	bind(godot.CubeMap, {
		Flags: { value: {FLAG_MIPMAPS: 1, FLAG_REPEAT: 2, FLAG_FILTER: 4, FLAGS_DEFAULT: 7 } }, 
		Side: { value: {SIDE_LEFT: 0, SIDE_RIGHT: 1, SIDE_BOTTOM: 2, SIDE_TOP: 3, SIDE_FRONT: 4, SIDE_BACK: 5 } }, 
		Storage: { value: {STORAGE_RAW: 0, STORAGE_COMPRESS_LOSSY: 1, STORAGE_COMPRESS_LOSSLESS: 2 } }
	});
	bind(godot.CubeMesh, {});
	bind(godot.Curve, {
		TangentMode: { value: {TANGENT_FREE: 0, TANGENT_LINEAR: 1, TANGENT_MODE_COUNT: 2 } }
	});
	bind(godot.Curve2D, {});
	bind(godot.Curve3D, {});
	bind(godot.CurveTexture, {});
	bind(godot.CylinderMesh, {});
	bind(godot.CylinderShape, {});
	bind(godot.DTLSServer, {});
	bind(godot.DampedSpringJoint2D, {});
	bind(godot.DirectionalLight, {
		ShadowDepthRange: { value: {SHADOW_DEPTH_RANGE_STABLE: 0, SHADOW_DEPTH_RANGE_OPTIMIZED: 1 } }, 
		ShadowMode: { value: {SHADOW_ORTHOGONAL: 0, SHADOW_PARALLEL_2_SPLITS: 1, SHADOW_PARALLEL_4_SPLITS: 2 } }
	});
	bind(godot.Directory, {});
	bind(godot.DynamicFont, {
		SpacingType: { value: {SPACING_TOP: 0, SPACING_BOTTOM: 1, SPACING_CHAR: 2, SPACING_SPACE: 3 } }
	});
	bind(godot.DynamicFontData, {
		Hinting: { value: {HINTING_NONE: 0, HINTING_LIGHT: 1, HINTING_NORMAL: 2 } }
	});
	bind(godot.ECMAScript, {});
	bind(godot.ECMAScriptModule, {});
	bind(godot.EditorExportPlugin, {});
	bind(godot.EditorFeatureProfile, {
		Feature: { value: {FEATURE_3D: 0, FEATURE_SCRIPT: 1, FEATURE_ASSET_LIB: 2, FEATURE_SCENE_TREE: 3, FEATURE_IMPORT_DOCK: 4, FEATURE_NODE_DOCK: 5, FEATURE_FILESYSTEM_DOCK: 6, FEATURE_MAX: 7 } }
	});
	bind(godot.EditorFileDialog, {
		Access: { value: {ACCESS_RESOURCES: 0, ACCESS_USERDATA: 1, ACCESS_FILESYSTEM: 2 } }, 
		DisplayMode: { value: {DISPLAY_THUMBNAILS: 0, DISPLAY_LIST: 1 } }, 
		Mode: { value: {MODE_OPEN_FILE: 0, MODE_OPEN_FILES: 1, MODE_OPEN_DIR: 2, MODE_OPEN_ANY: 3, MODE_SAVE_FILE: 4 } }
	});
	bind(godot.EditorFileSystem, {});
	bind(godot.EditorFileSystemDirectory, {});
	bind(godot.EditorImportPlugin, {});
	bind(godot.EditorInspector, {});
	bind(godot.EditorInspectorPlugin, {});
	bind(godot.EditorInterface, {});
	bind(godot.EditorNavigationMeshGenerator, {});
	bind(godot.EditorPlugin, {
		CustomControlContainer: { value: {CONTAINER_TOOLBAR: 0, CONTAINER_SPATIAL_EDITOR_MENU: 1, CONTAINER_SPATIAL_EDITOR_SIDE_LEFT: 2, CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT: 3, CONTAINER_SPATIAL_EDITOR_BOTTOM: 4, CONTAINER_CANVAS_EDITOR_MENU: 5, CONTAINER_CANVAS_EDITOR_SIDE_LEFT: 6, CONTAINER_CANVAS_EDITOR_SIDE_RIGHT: 7, CONTAINER_CANVAS_EDITOR_BOTTOM: 8, CONTAINER_PROPERTY_EDITOR_BOTTOM: 9, CONTAINER_PROJECT_SETTING_TAB_LEFT: 10, CONTAINER_PROJECT_SETTING_TAB_RIGHT: 11 } }, 
		DockSlot: { value: {DOCK_SLOT_LEFT_UL: 0, DOCK_SLOT_LEFT_BL: 1, DOCK_SLOT_LEFT_UR: 2, DOCK_SLOT_LEFT_BR: 3, DOCK_SLOT_RIGHT_UL: 4, DOCK_SLOT_RIGHT_BL: 5, DOCK_SLOT_RIGHT_UR: 6, DOCK_SLOT_RIGHT_BR: 7, DOCK_SLOT_MAX: 8 } }
	});
	bind(godot.EditorProperty, {});
	bind(godot.EditorResourceConversionPlugin, {});
	bind(godot.EditorResourcePreview, {});
	bind(godot.EditorResourcePreviewGenerator, {});
	bind(godot.EditorSceneImporter, {});
	bind(godot.EditorSceneImporterAssimp, {});
	bind(godot.EditorScenePostImport, {});
	bind(godot.EditorScript, {});
	bind(godot.EditorSelection, {});
	bind(godot.EditorSettings, {});
	bind(godot.EditorSpatialGizmo, {});
	bind(godot.EditorSpatialGizmoPlugin, {});
	bind(godot.EditorSpinSlider, {});
	bind(godot.EditorVCSInterface, {});
	bind(godot.EncodedObjectAsID, {});
	bind(godot.Engine, {});
	bind(godot.Environment, {
		BGMode: { value: {BG_KEEP: 5, BG_CLEAR_COLOR: 0, BG_COLOR: 1, BG_SKY: 2, BG_COLOR_SKY: 3, BG_CANVAS: 4, BG_CAMERA_FEED: 6, BG_MAX: 7 } }, 
		DOFBlurQuality: { value: {DOF_BLUR_QUALITY_LOW: 0, DOF_BLUR_QUALITY_MEDIUM: 1, DOF_BLUR_QUALITY_HIGH: 2 } }, 
		GlowBlendMode: { value: {GLOW_BLEND_MODE_ADDITIVE: 0, GLOW_BLEND_MODE_SCREEN: 1, GLOW_BLEND_MODE_SOFTLIGHT: 2, GLOW_BLEND_MODE_REPLACE: 3 } }, 
		SSAOBlur: { value: {SSAO_BLUR_DISABLED: 0, SSAO_BLUR_1x1: 1, SSAO_BLUR_2x2: 2, SSAO_BLUR_3x3: 3 } }, 
		SSAOQuality: { value: {SSAO_QUALITY_LOW: 0, SSAO_QUALITY_MEDIUM: 1, SSAO_QUALITY_HIGH: 2 } }, 
		ToneMapper: { value: {TONE_MAPPER_LINEAR: 0, TONE_MAPPER_REINHARDT: 1, TONE_MAPPER_FILMIC: 2, TONE_MAPPER_ACES: 3 } }
	});
	bind(godot.Expression, {});
	bind(godot.ExternalTexture, {});
	bind(godot.File, {
		CompressionMode: { value: {COMPRESSION_FASTLZ: 0, COMPRESSION_DEFLATE: 1, COMPRESSION_ZSTD: 2, COMPRESSION_GZIP: 3 } }, 
		ModeFlags: { value: {READ: 1, WRITE: 2, READ_WRITE: 3, WRITE_READ: 7 } }
	});
	bind(godot.FileDialog, {
		Access: { value: {ACCESS_RESOURCES: 0, ACCESS_USERDATA: 1, ACCESS_FILESYSTEM: 2 } }, 
		Mode: { value: {MODE_OPEN_FILE: 0, MODE_OPEN_FILES: 1, MODE_OPEN_DIR: 2, MODE_OPEN_ANY: 3, MODE_SAVE_FILE: 4 } }
	});
	bind(godot.FileSystemDock, {});
	bind(godot.Font, {});
	bind(godot.FuncRef, {});
	bind(godot.GDNative, {});
	bind(godot.GDNativeLibrary, {});
	bind(godot.GDScript, {});
	bind(godot.GDScriptFunctionState, {});
	bind(godot.GIProbe, {
		Subdiv: { value: {SUBDIV_64: 0, SUBDIV_128: 1, SUBDIV_256: 2, SUBDIV_512: 3, SUBDIV_MAX: 4 } }
	});
	bind(godot.GIProbeData, {});
	bind(godot.Generic6DOFJoint, {
		Flag: { value: {FLAG_ENABLE_LINEAR_LIMIT: 0, FLAG_ENABLE_ANGULAR_LIMIT: 1, FLAG_ENABLE_LINEAR_SPRING: 3, FLAG_ENABLE_ANGULAR_SPRING: 2, FLAG_ENABLE_MOTOR: 4, FLAG_ENABLE_LINEAR_MOTOR: 5, FLAG_MAX: 6 } }, 
		Param: { value: {PARAM_LINEAR_LOWER_LIMIT: 0, PARAM_LINEAR_UPPER_LIMIT: 1, PARAM_LINEAR_LIMIT_SOFTNESS: 2, PARAM_LINEAR_RESTITUTION: 3, PARAM_LINEAR_DAMPING: 4, PARAM_LINEAR_MOTOR_TARGET_VELOCITY: 5, PARAM_LINEAR_MOTOR_FORCE_LIMIT: 6, PARAM_LINEAR_SPRING_STIFFNESS: 7, PARAM_LINEAR_SPRING_DAMPING: 8, PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT: 9, PARAM_ANGULAR_LOWER_LIMIT: 10, PARAM_ANGULAR_UPPER_LIMIT: 11, PARAM_ANGULAR_LIMIT_SOFTNESS: 12, PARAM_ANGULAR_DAMPING: 13, PARAM_ANGULAR_RESTITUTION: 14, PARAM_ANGULAR_FORCE_LIMIT: 15, PARAM_ANGULAR_ERP: 16, PARAM_ANGULAR_MOTOR_TARGET_VELOCITY: 17, PARAM_ANGULAR_MOTOR_FORCE_LIMIT: 18, PARAM_ANGULAR_SPRING_STIFFNESS: 19, PARAM_ANGULAR_SPRING_DAMPING: 20, PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT: 21, PARAM_MAX: 22 } }
	});
	bind(godot.Geometry, {
		PolyBooleanOperation: { value: {OPERATION_UNION: 0, OPERATION_DIFFERENCE: 1, OPERATION_INTERSECTION: 2, OPERATION_XOR: 3 } }, 
		PolyEndType: { value: {END_POLYGON: 0, END_JOINED: 1, END_BUTT: 2, END_SQUARE: 3, END_ROUND: 4 } }, 
		PolyJoinType: { value: {JOIN_SQUARE: 0, JOIN_ROUND: 1, JOIN_MITER: 2 } }
	});
	bind(godot.GeometryInstance, {
		Flags: { value: {FLAG_USE_BAKED_LIGHT: 0, FLAG_DRAW_NEXT_FRAME_IF_VISIBLE: 1, FLAG_MAX: 2 } }, 
		ShadowCastingSetting: { value: {SHADOW_CASTING_SETTING_OFF: 0, SHADOW_CASTING_SETTING_ON: 1, SHADOW_CASTING_SETTING_DOUBLE_SIDED: 2, SHADOW_CASTING_SETTING_SHADOWS_ONLY: 3 } }
	});
	bind(godot.Gradient, {});
	bind(godot.GradientTexture, {});
	bind(godot.GraphEdit, {});
	bind(godot.GraphNode, {
		Overlay: { value: {OVERLAY_DISABLED: 0, OVERLAY_BREAKPOINT: 1, OVERLAY_POSITION: 2 } }
	});
	bind(godot.GridContainer, {});
	bind(godot.GridMap, {});
	bind(godot.GrooveJoint2D, {});
	bind(godot.HBoxContainer, {});
	bind(godot.HScrollBar, {});
	bind(godot.HSeparator, {});
	bind(godot.HSlider, {});
	bind(godot.HSplitContainer, {});
	bind(godot.HTTPClient, {
		Method: { value: {METHOD_GET: 0, METHOD_HEAD: 1, METHOD_POST: 2, METHOD_PUT: 3, METHOD_DELETE: 4, METHOD_OPTIONS: 5, METHOD_TRACE: 6, METHOD_CONNECT: 7, METHOD_PATCH: 8, METHOD_MAX: 9 } }, 
		ResponseCode: { value: {RESPONSE_CONTINUE: 100, RESPONSE_SWITCHING_PROTOCOLS: 101, RESPONSE_PROCESSING: 102, RESPONSE_OK: 200, RESPONSE_CREATED: 201, RESPONSE_ACCEPTED: 202, RESPONSE_NON_AUTHORITATIVE_INFORMATION: 203, RESPONSE_NO_CONTENT: 204, RESPONSE_RESET_CONTENT: 205, RESPONSE_PARTIAL_CONTENT: 206, RESPONSE_MULTI_STATUS: 207, RESPONSE_ALREADY_REPORTED: 208, RESPONSE_IM_USED: 226, RESPONSE_MULTIPLE_CHOICES: 300, RESPONSE_MOVED_PERMANENTLY: 301, RESPONSE_FOUND: 302, RESPONSE_SEE_OTHER: 303, RESPONSE_NOT_MODIFIED: 304, RESPONSE_USE_PROXY: 305, RESPONSE_SWITCH_PROXY: 306, RESPONSE_TEMPORARY_REDIRECT: 307, RESPONSE_PERMANENT_REDIRECT: 308, RESPONSE_BAD_REQUEST: 400, RESPONSE_UNAUTHORIZED: 401, RESPONSE_PAYMENT_REQUIRED: 402, RESPONSE_FORBIDDEN: 403, RESPONSE_NOT_FOUND: 404, RESPONSE_METHOD_NOT_ALLOWED: 405, RESPONSE_NOT_ACCEPTABLE: 406, RESPONSE_PROXY_AUTHENTICATION_REQUIRED: 407, RESPONSE_REQUEST_TIMEOUT: 408, RESPONSE_CONFLICT: 409, RESPONSE_GONE: 410, RESPONSE_LENGTH_REQUIRED: 411, RESPONSE_PRECONDITION_FAILED: 412, RESPONSE_REQUEST_ENTITY_TOO_LARGE: 413, RESPONSE_REQUEST_URI_TOO_LONG: 414, RESPONSE_UNSUPPORTED_MEDIA_TYPE: 415, RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE: 416, RESPONSE_EXPECTATION_FAILED: 417, RESPONSE_IM_A_TEAPOT: 418, RESPONSE_MISDIRECTED_REQUEST: 421, RESPONSE_UNPROCESSABLE_ENTITY: 422, RESPONSE_LOCKED: 423, RESPONSE_FAILED_DEPENDENCY: 424, RESPONSE_UPGRADE_REQUIRED: 426, RESPONSE_PRECONDITION_REQUIRED: 428, RESPONSE_TOO_MANY_REQUESTS: 429, RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE: 431, RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS: 451, RESPONSE_INTERNAL_SERVER_ERROR: 500, RESPONSE_NOT_IMPLEMENTED: 501, RESPONSE_BAD_GATEWAY: 502, RESPONSE_SERVICE_UNAVAILABLE: 503, RESPONSE_GATEWAY_TIMEOUT: 504, RESPONSE_HTTP_VERSION_NOT_SUPPORTED: 505, RESPONSE_VARIANT_ALSO_NEGOTIATES: 506, RESPONSE_INSUFFICIENT_STORAGE: 507, RESPONSE_LOOP_DETECTED: 508, RESPONSE_NOT_EXTENDED: 510, RESPONSE_NETWORK_AUTH_REQUIRED: 511 } }, 
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_RESOLVING: 1, STATUS_CANT_RESOLVE: 2, STATUS_CONNECTING: 3, STATUS_CANT_CONNECT: 4, STATUS_CONNECTED: 5, STATUS_REQUESTING: 6, STATUS_BODY: 7, STATUS_CONNECTION_ERROR: 8, STATUS_SSL_HANDSHAKE_ERROR: 9 } }
	});
	bind(godot.HTTPRequest, {
		Result: { value: {RESULT_SUCCESS: 0, RESULT_CHUNKED_BODY_SIZE_MISMATCH: 1, RESULT_CANT_CONNECT: 2, RESULT_CANT_RESOLVE: 3, RESULT_CONNECTION_ERROR: 4, RESULT_SSL_HANDSHAKE_ERROR: 5, RESULT_NO_RESPONSE: 6, RESULT_BODY_SIZE_LIMIT_EXCEEDED: 7, RESULT_REQUEST_FAILED: 8, RESULT_DOWNLOAD_FILE_CANT_OPEN: 9, RESULT_DOWNLOAD_FILE_WRITE_ERROR: 10, RESULT_REDIRECT_LIMIT_REACHED: 11, RESULT_TIMEOUT: 12 } }
	});
	bind(godot.HashingContext, {
		HashType: { value: {HASH_MD5: 0, HASH_SHA1: 1, HASH_SHA256: 2 } }
	});
	bind(godot.HeightMapShape, {});
	bind(godot.HingeJoint, {
		Flag: { value: {FLAG_USE_LIMIT: 0, FLAG_ENABLE_MOTOR: 1, FLAG_MAX: 2 } }, 
		Param: { value: {PARAM_BIAS: 0, PARAM_LIMIT_UPPER: 1, PARAM_LIMIT_LOWER: 2, PARAM_LIMIT_BIAS: 3, PARAM_LIMIT_SOFTNESS: 4, PARAM_LIMIT_RELAXATION: 5, PARAM_MOTOR_TARGET_VELOCITY: 6, PARAM_MOTOR_MAX_IMPULSE: 7, PARAM_MAX: 8 } }
	});
	bind(godot.IP, {
		ResolverStatus: { value: {RESOLVER_STATUS_NONE: 0, RESOLVER_STATUS_WAITING: 1, RESOLVER_STATUS_DONE: 2, RESOLVER_STATUS_ERROR: 3 } }, 
		Type: { value: {TYPE_NONE: 0, TYPE_IPV4: 1, TYPE_IPV6: 2, TYPE_ANY: 3 } }
	});
	bind(godot.Image, {
		AlphaMode: { value: {ALPHA_NONE: 0, ALPHA_BIT: 1, ALPHA_BLEND: 2 } }, 
		CompressMode: { value: {COMPRESS_S3TC: 0, COMPRESS_PVRTC2: 1, COMPRESS_PVRTC4: 2, COMPRESS_ETC: 3, COMPRESS_ETC2: 4 } }, 
		CompressSource: { value: {COMPRESS_SOURCE_GENERIC: 0, COMPRESS_SOURCE_SRGB: 1, COMPRESS_SOURCE_NORMAL: 2 } }, 
		Format: { value: {FORMAT_L8: 0, FORMAT_LA8: 1, FORMAT_R8: 2, FORMAT_RG8: 3, FORMAT_RGB8: 4, FORMAT_RGBA8: 5, FORMAT_RGBA4444: 6, FORMAT_RGBA5551: 7, FORMAT_RF: 8, FORMAT_RGF: 9, FORMAT_RGBF: 10, FORMAT_RGBAF: 11, FORMAT_RH: 12, FORMAT_RGH: 13, FORMAT_RGBH: 14, FORMAT_RGBAH: 15, FORMAT_RGBE9995: 16, FORMAT_DXT1: 17, FORMAT_DXT3: 18, FORMAT_DXT5: 19, FORMAT_RGTC_R: 20, FORMAT_RGTC_RG: 21, FORMAT_BPTC_RGBA: 22, FORMAT_BPTC_RGBF: 23, FORMAT_BPTC_RGBFU: 24, FORMAT_PVRTC2: 25, FORMAT_PVRTC2A: 26, FORMAT_PVRTC4: 27, FORMAT_PVRTC4A: 28, FORMAT_ETC: 29, FORMAT_ETC2_R11: 30, FORMAT_ETC2_R11S: 31, FORMAT_ETC2_RG11: 32, FORMAT_ETC2_RG11S: 33, FORMAT_ETC2_RGB8: 34, FORMAT_ETC2_RGBA8: 35, FORMAT_ETC2_RGB8A1: 36, FORMAT_MAX: 37 } }, 
		Interpolation: { value: {INTERPOLATE_NEAREST: 0, INTERPOLATE_BILINEAR: 1, INTERPOLATE_CUBIC: 2, INTERPOLATE_TRILINEAR: 3, INTERPOLATE_LANCZOS: 4 } }
	});
	bind(godot.ImageTexture, {
		Storage: { value: {STORAGE_RAW: 0, STORAGE_COMPRESS_LOSSY: 1, STORAGE_COMPRESS_LOSSLESS: 2 } }
	});
	bind(godot.ImmediateGeometry, {});
	bind(godot.Input, {
		CursorShape: { value: {CURSOR_ARROW: 0, CURSOR_IBEAM: 1, CURSOR_POINTING_HAND: 2, CURSOR_CROSS: 3, CURSOR_WAIT: 4, CURSOR_BUSY: 5, CURSOR_DRAG: 6, CURSOR_CAN_DROP: 7, CURSOR_FORBIDDEN: 8, CURSOR_VSIZE: 9, CURSOR_HSIZE: 10, CURSOR_BDIAGSIZE: 11, CURSOR_FDIAGSIZE: 12, CURSOR_MOVE: 13, CURSOR_VSPLIT: 14, CURSOR_HSPLIT: 15, CURSOR_HELP: 16 } }, 
		MouseMode: { value: {MOUSE_MODE_VISIBLE: 0, MOUSE_MODE_HIDDEN: 1, MOUSE_MODE_CAPTURED: 2, MOUSE_MODE_CONFINED: 3 } }
	});
	bind(godot.InputEvent, {});
	bind(godot.InputEventAction, {});
	bind(godot.InputEventGesture, {});
	bind(godot.InputEventJoypadButton, {});
	bind(godot.InputEventJoypadMotion, {});
	bind(godot.InputEventKey, {});
	bind(godot.InputEventMIDI, {});
	bind(godot.InputEventMagnifyGesture, {});
	bind(godot.InputEventMouse, {});
	bind(godot.InputEventMouseButton, {});
	bind(godot.InputEventMouseMotion, {});
	bind(godot.InputEventPanGesture, {});
	bind(godot.InputEventScreenDrag, {});
	bind(godot.InputEventScreenTouch, {});
	bind(godot.InputEventWithModifiers, {});
	bind(godot.InputMap, {});
	bind(godot.InstancePlaceholder, {});
	bind(godot.InterpolatedCamera, {});
	bind(godot.ItemList, {
		IconMode: { value: {ICON_MODE_TOP: 0, ICON_MODE_LEFT: 1 } }, 
		SelectMode: { value: {SELECT_SINGLE: 0, SELECT_MULTI: 1 } }
	});
	bind(godot.JNISingleton, {});
	bind(godot.JSON, {});
	bind(godot.JSONParseResult, {});
	bind(godot.JSONRPC, {
		ErrorCode: { value: {PARSE_ERROR: -32700, INVALID_REQUEST: -32600, METHOD_NOT_FOUND: -32601, INVALID_PARAMS: -32602, INTERNAL_ERROR: -32603 } }
	});
	bind(godot.JavaClass, {});
	bind(godot.JavaClassWrapper, {});
	bind(godot.JavaScript, {});
	bind(godot.Joint, {});
	bind(godot.Joint2D, {});
	bind(godot.KinematicBody, {});
	bind(godot.KinematicBody2D, {});
	bind(godot.KinematicCollision, {});
	bind(godot.KinematicCollision2D, {});
	bind(godot.Label, {
		Align: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2, ALIGN_FILL: 3 } }, 
		VAlign: { value: {VALIGN_TOP: 0, VALIGN_CENTER: 1, VALIGN_BOTTOM: 2, VALIGN_FILL: 3 } }
	});
	bind(godot.LargeTexture, {});
	bind(godot.Light, {
		BakeMode: { value: {BAKE_DISABLED: 0, BAKE_INDIRECT: 1, BAKE_ALL: 2 } }, 
		Param: { value: {PARAM_ENERGY: 0, PARAM_INDIRECT_ENERGY: 1, PARAM_SPECULAR: 2, PARAM_RANGE: 3, PARAM_ATTENUATION: 4, PARAM_SPOT_ANGLE: 5, PARAM_SPOT_ATTENUATION: 6, PARAM_CONTACT_SHADOW_SIZE: 7, PARAM_SHADOW_MAX_DISTANCE: 8, PARAM_SHADOW_SPLIT_1_OFFSET: 9, PARAM_SHADOW_SPLIT_2_OFFSET: 10, PARAM_SHADOW_SPLIT_3_OFFSET: 11, PARAM_SHADOW_NORMAL_BIAS: 12, PARAM_SHADOW_BIAS: 13, PARAM_SHADOW_BIAS_SPLIT_SCALE: 14, PARAM_MAX: 15 } }
	});
	bind(godot.Light2D, {
		Mode: { value: {MODE_ADD: 0, MODE_SUB: 1, MODE_MIX: 2, MODE_MASK: 3 } }, 
		ShadowFilter: { value: {SHADOW_FILTER_NONE: 0, SHADOW_FILTER_PCF3: 1, SHADOW_FILTER_PCF5: 2, SHADOW_FILTER_PCF7: 3, SHADOW_FILTER_PCF9: 4, SHADOW_FILTER_PCF13: 5 } }
	});
	bind(godot.LightOccluder2D, {});
	bind(godot.Line2D, {
		LineCapMode: { value: {LINE_CAP_NONE: 0, LINE_CAP_BOX: 1, LINE_CAP_ROUND: 2 } }, 
		LineJointMode: { value: {LINE_JOINT_SHARP: 0, LINE_JOINT_BEVEL: 1, LINE_JOINT_ROUND: 2 } }, 
		LineTextureMode: { value: {LINE_TEXTURE_NONE: 0, LINE_TEXTURE_TILE: 1, LINE_TEXTURE_STRETCH: 2 } }
	});
	bind(godot.LineEdit, {
		Align: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2, ALIGN_FILL: 3 } }, 
		MenuItems: { value: {MENU_CUT: 0, MENU_COPY: 1, MENU_PASTE: 2, MENU_CLEAR: 3, MENU_SELECT_ALL: 4, MENU_UNDO: 5, MENU_REDO: 6, MENU_MAX: 7 } }
	});
	bind(godot.LineShape2D, {});
	bind(godot.LinkButton, {
		UnderlineMode: { value: {UNDERLINE_MODE_ALWAYS: 0, UNDERLINE_MODE_ON_HOVER: 1, UNDERLINE_MODE_NEVER: 2 } }
	});
	bind(godot.Listener, {});
	bind(godot.MainLoop, {});
	bind(godot.MarginContainer, {});
	bind(godot.Marshalls, {});
	bind(godot.Material, {});
	bind(godot.MenuButton, {});
	bind(godot.Mesh, {
		ArrayFormat: { value: {ARRAY_FORMAT_VERTEX: 1, ARRAY_FORMAT_NORMAL: 2, ARRAY_FORMAT_TANGENT: 4, ARRAY_FORMAT_COLOR: 8, ARRAY_FORMAT_TEX_UV: 16, ARRAY_FORMAT_TEX_UV2: 32, ARRAY_FORMAT_BONES: 64, ARRAY_FORMAT_WEIGHTS: 128, ARRAY_FORMAT_INDEX: 256, ARRAY_COMPRESS_BASE: 9, ARRAY_COMPRESS_VERTEX: 512, ARRAY_COMPRESS_NORMAL: 1024, ARRAY_COMPRESS_TANGENT: 2048, ARRAY_COMPRESS_COLOR: 4096, ARRAY_COMPRESS_TEX_UV: 8192, ARRAY_COMPRESS_TEX_UV2: 16384, ARRAY_COMPRESS_BONES: 32768, ARRAY_COMPRESS_WEIGHTS: 65536, ARRAY_COMPRESS_INDEX: 131072, ARRAY_FLAG_USE_2D_VERTICES: 262144, ARRAY_FLAG_USE_16_BIT_BONES: 524288, ARRAY_COMPRESS_DEFAULT: 97280 } }, 
		ArrayType: { value: {ARRAY_VERTEX: 0, ARRAY_NORMAL: 1, ARRAY_TANGENT: 2, ARRAY_COLOR: 3, ARRAY_TEX_UV: 4, ARRAY_TEX_UV2: 5, ARRAY_BONES: 6, ARRAY_WEIGHTS: 7, ARRAY_INDEX: 8, ARRAY_MAX: 9 } }, 
		BlendShapeMode: { value: {BLEND_SHAPE_MODE_NORMALIZED: 0, BLEND_SHAPE_MODE_RELATIVE: 1 } }, 
		PrimitiveType: { value: {PRIMITIVE_POINTS: 0, PRIMITIVE_LINES: 1, PRIMITIVE_LINE_STRIP: 2, PRIMITIVE_LINE_LOOP: 3, PRIMITIVE_TRIANGLES: 4, PRIMITIVE_TRIANGLE_STRIP: 5, PRIMITIVE_TRIANGLE_FAN: 6 } }
	});
	bind(godot.MeshDataTool, {});
	bind(godot.MeshInstance, {});
	bind(godot.MeshInstance2D, {});
	bind(godot.MeshLibrary, {});
	bind(godot.MeshTexture, {});
	bind(godot.MobileVRInterface, {});
	bind(godot.MultiMesh, {
		ColorFormat: { value: {COLOR_NONE: 0, COLOR_8BIT: 1, COLOR_FLOAT: 2 } }, 
		CustomDataFormat: { value: {CUSTOM_DATA_NONE: 0, CUSTOM_DATA_8BIT: 1, CUSTOM_DATA_FLOAT: 2 } }, 
		TransformFormat: { value: {TRANSFORM_2D: 0, TRANSFORM_3D: 1 } }
	});
	bind(godot.MultiMeshInstance, {});
	bind(godot.MultiMeshInstance2D, {});
	bind(godot.MultiplayerAPI, {
		RPCMode: { value: {RPC_MODE_DISABLED: 0, RPC_MODE_REMOTE: 1, RPC_MODE_MASTER: 2, RPC_MODE_PUPPET: 3, RPC_MODE_SLAVE: 3, RPC_MODE_REMOTESYNC: 4, RPC_MODE_SYNC: 4, RPC_MODE_MASTERSYNC: 5, RPC_MODE_PUPPETSYNC: 6 } }
	});
	bind(godot.MultiplayerPeerGDNative, {});
	bind(godot.NativeScript, {});
	bind(godot.Navigation, {});
	bind(godot.Navigation2D, {});
	bind(godot.NavigationMesh, {});
	bind(godot.NavigationMeshInstance, {});
	bind(godot.NavigationPolygon, {});
	bind(godot.NavigationPolygonInstance, {});
	bind(godot.NetworkedMultiplayerENet, {
		CompressionMode: { value: {COMPRESS_NONE: 0, COMPRESS_RANGE_CODER: 1, COMPRESS_FASTLZ: 2, COMPRESS_ZLIB: 3, COMPRESS_ZSTD: 4 } }
	});
	bind(godot.NetworkedMultiplayerPeer, {
		ConnectionStatus: { value: {CONNECTION_DISCONNECTED: 0, CONNECTION_CONNECTING: 1, CONNECTION_CONNECTED: 2 } }, 
		TransferMode: { value: {TRANSFER_MODE_UNRELIABLE: 0, TRANSFER_MODE_UNRELIABLE_ORDERED: 1, TRANSFER_MODE_RELIABLE: 2 } }
	});
	bind(godot.NinePatchRect, {
		AxisStretchMode: { value: {AXIS_STRETCH_MODE_STRETCH: 0, AXIS_STRETCH_MODE_TILE: 1, AXIS_STRETCH_MODE_TILE_FIT: 2 } }
	});
	bind(godot.Node, {
		DuplicateFlags: { value: {DUPLICATE_SIGNALS: 1, DUPLICATE_GROUPS: 2, DUPLICATE_SCRIPTS: 4, DUPLICATE_USE_INSTANCING: 8 } }, 
		PauseMode: { value: {PAUSE_MODE_INHERIT: 0, PAUSE_MODE_STOP: 1, PAUSE_MODE_PROCESS: 2 } }
	});
	bind(godot.Node2D, {});
	bind(godot.NoiseTexture, {});
	bind(godot.OS, {
		Month: { value: {MONTH_JANUARY: 1, MONTH_FEBRUARY: 2, MONTH_MARCH: 3, MONTH_APRIL: 4, MONTH_MAY: 5, MONTH_JUNE: 6, MONTH_JULY: 7, MONTH_AUGUST: 8, MONTH_SEPTEMBER: 9, MONTH_OCTOBER: 10, MONTH_NOVEMBER: 11, MONTH_DECEMBER: 12 } }, 
		PowerState: { value: {POWERSTATE_UNKNOWN: 0, POWERSTATE_ON_BATTERY: 1, POWERSTATE_NO_BATTERY: 2, POWERSTATE_CHARGING: 3, POWERSTATE_CHARGED: 4 } }, 
		ScreenOrientation: { value: {SCREEN_ORIENTATION_LANDSCAPE: 0, SCREEN_ORIENTATION_PORTRAIT: 1, SCREEN_ORIENTATION_REVERSE_LANDSCAPE: 2, SCREEN_ORIENTATION_REVERSE_PORTRAIT: 3, SCREEN_ORIENTATION_SENSOR_LANDSCAPE: 4, SCREEN_ORIENTATION_SENSOR_PORTRAIT: 5, SCREEN_ORIENTATION_SENSOR: 6 } }, 
		SystemDir: { value: {SYSTEM_DIR_DESKTOP: 0, SYSTEM_DIR_DCIM: 1, SYSTEM_DIR_DOCUMENTS: 2, SYSTEM_DIR_DOWNLOADS: 3, SYSTEM_DIR_MOVIES: 4, SYSTEM_DIR_MUSIC: 5, SYSTEM_DIR_PICTURES: 6, SYSTEM_DIR_RINGTONES: 7 } }, 
		VideoDriver: { value: {VIDEO_DRIVER_GLES2: 1, VIDEO_DRIVER_GLES3: 0 } }, 
		Weekday: { value: {DAY_SUNDAY: 0, DAY_MONDAY: 1, DAY_TUESDAY: 2, DAY_WEDNESDAY: 3, DAY_THURSDAY: 4, DAY_FRIDAY: 5, DAY_SATURDAY: 6 } }
	});
	bind(godot.Object, {
		ConnectFlags: { value: {CONNECT_DEFERRED: 1, CONNECT_PERSIST: 2, CONNECT_ONESHOT: 4, CONNECT_REFERENCE_COUNTED: 8 } }
	});
	bind(godot.OccluderPolygon2D, {
		CullMode: { value: {CULL_DISABLED: 0, CULL_CLOCKWISE: 1, CULL_COUNTER_CLOCKWISE: 2 } }
	});
	bind(godot.OmniLight, {
		ShadowDetail: { value: {SHADOW_DETAIL_VERTICAL: 0, SHADOW_DETAIL_HORIZONTAL: 1 } }, 
		ShadowMode: { value: {SHADOW_DUAL_PARABOLOID: 0, SHADOW_CUBE: 1 } }
	});
	bind(godot.OpenSimplexNoise, {});
	bind(godot.OptionButton, {});
	bind(godot.PCKPacker, {});
	bind(godot.PHashTranslation, {});
	bind(godot.PackedDataContainer, {});
	bind(godot.PackedDataContainerRef, {});
	bind(godot.PackedScene, {
		GenEditState: { value: {GEN_EDIT_STATE_DISABLED: 0, GEN_EDIT_STATE_INSTANCE: 1, GEN_EDIT_STATE_MAIN: 2 } }
	});
	bind(godot.PacketPeer, {});
	bind(godot.PacketPeerDTLS, {
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_HANDSHAKING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3, STATUS_ERROR_HOSTNAME_MISMATCH: 4 } }
	});
	bind(godot.PacketPeerGDNative, {});
	bind(godot.PacketPeerStream, {});
	bind(godot.PacketPeerUDP, {});
	bind(godot.Panel, {});
	bind(godot.PanelContainer, {});
	bind(godot.PanoramaSky, {});
	bind(godot.ParallaxBackground, {});
	bind(godot.ParallaxLayer, {});
	bind(godot.Particles, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1, DRAW_ORDER_VIEW_DEPTH: 2 } }
	});
	bind(godot.Particles2D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1 } }
	});
	bind(godot.ParticlesMaterial, {
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_BOX: 2, EMISSION_SHAPE_POINTS: 3, EMISSION_SHAPE_DIRECTED_POINTS: 4, EMISSION_SHAPE_MAX: 5 } }, 
		Flags: { value: {FLAG_ALIGN_Y_TO_VELOCITY: 0, FLAG_ROTATE_Y: 1, FLAG_DISABLE_Z: 2, FLAG_MAX: 3 } }, 
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 12 } }
	});
	bind(godot.Path, {});
	bind(godot.Path2D, {});
	bind(godot.PathFollow, {
		RotationMode: { value: {ROTATION_NONE: 0, ROTATION_Y: 1, ROTATION_XY: 2, ROTATION_XYZ: 3, ROTATION_ORIENTED: 4 } }
	});
	bind(godot.PathFollow2D, {});
	bind(godot.Performance, {
		Monitor: { value: {TIME_FPS: 0, TIME_PROCESS: 1, TIME_PHYSICS_PROCESS: 2, MEMORY_STATIC: 3, MEMORY_DYNAMIC: 4, MEMORY_STATIC_MAX: 5, MEMORY_DYNAMIC_MAX: 6, MEMORY_MESSAGE_BUFFER_MAX: 7, OBJECT_COUNT: 8, OBJECT_RESOURCE_COUNT: 9, OBJECT_NODE_COUNT: 10, OBJECT_ORPHAN_NODE_COUNT: 11, RENDER_OBJECTS_IN_FRAME: 12, RENDER_VERTICES_IN_FRAME: 13, RENDER_MATERIAL_CHANGES_IN_FRAME: 14, RENDER_SHADER_CHANGES_IN_FRAME: 15, RENDER_SURFACE_CHANGES_IN_FRAME: 16, RENDER_DRAW_CALLS_IN_FRAME: 17, RENDER_2D_ITEMS_IN_FRAME: 18, RENDER_2D_DRAW_CALLS_IN_FRAME: 19, RENDER_VIDEO_MEM_USED: 20, RENDER_TEXTURE_MEM_USED: 21, RENDER_VERTEX_MEM_USED: 22, RENDER_USAGE_VIDEO_MEM_TOTAL: 23, PHYSICS_2D_ACTIVE_OBJECTS: 24, PHYSICS_2D_COLLISION_PAIRS: 25, PHYSICS_2D_ISLAND_COUNT: 26, PHYSICS_3D_ACTIVE_OBJECTS: 27, PHYSICS_3D_COLLISION_PAIRS: 28, PHYSICS_3D_ISLAND_COUNT: 29, AUDIO_OUTPUT_LATENCY: 30, MONITOR_MAX: 31 } }
	});
	bind(godot.PhysicalBone, {
		JointType: { value: {JOINT_TYPE_NONE: 0, JOINT_TYPE_PIN: 1, JOINT_TYPE_CONE: 2, JOINT_TYPE_HINGE: 3, JOINT_TYPE_SLIDER: 4, JOINT_TYPE_6DOF: 5 } }
	});
	bind(godot.Physics2DDirectBodyState, {});
	bind(godot.Physics2DDirectSpaceState, {});
	bind(godot.Physics2DServer, {
		AreaBodyStatus: { value: {AREA_BODY_ADDED: 0, AREA_BODY_REMOVED: 1 } }, 
		AreaParameter: { value: {AREA_PARAM_GRAVITY: 0, AREA_PARAM_GRAVITY_VECTOR: 1, AREA_PARAM_GRAVITY_IS_POINT: 2, AREA_PARAM_GRAVITY_DISTANCE_SCALE: 3, AREA_PARAM_GRAVITY_POINT_ATTENUATION: 4, AREA_PARAM_LINEAR_DAMP: 5, AREA_PARAM_ANGULAR_DAMP: 6, AREA_PARAM_PRIORITY: 7 } }, 
		AreaSpaceOverrideMode: { value: {AREA_SPACE_OVERRIDE_DISABLED: 0, AREA_SPACE_OVERRIDE_COMBINE: 1, AREA_SPACE_OVERRIDE_COMBINE_REPLACE: 2, AREA_SPACE_OVERRIDE_REPLACE: 3, AREA_SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }, 
		BodyMode: { value: {BODY_MODE_STATIC: 0, BODY_MODE_KINEMATIC: 1, BODY_MODE_RIGID: 2, BODY_MODE_CHARACTER: 3 } }, 
		BodyParameter: { value: {BODY_PARAM_BOUNCE: 0, BODY_PARAM_FRICTION: 1, BODY_PARAM_MASS: 2, BODY_PARAM_INERTIA: 3, BODY_PARAM_GRAVITY_SCALE: 4, BODY_PARAM_LINEAR_DAMP: 5, BODY_PARAM_ANGULAR_DAMP: 6, BODY_PARAM_MAX: 7 } }, 
		BodyState: { value: {BODY_STATE_TRANSFORM: 0, BODY_STATE_LINEAR_VELOCITY: 1, BODY_STATE_ANGULAR_VELOCITY: 2, BODY_STATE_SLEEPING: 3, BODY_STATE_CAN_SLEEP: 4 } }, 
		CCDMode: { value: {CCD_MODE_DISABLED: 0, CCD_MODE_CAST_RAY: 1, CCD_MODE_CAST_SHAPE: 2 } }, 
		DampedStringParam: { value: {DAMPED_STRING_REST_LENGTH: 0, DAMPED_STRING_STIFFNESS: 1, DAMPED_STRING_DAMPING: 2 } }, 
		JointParam: { value: {JOINT_PARAM_BIAS: 0, JOINT_PARAM_MAX_BIAS: 1, JOINT_PARAM_MAX_FORCE: 2 } }, 
		JointType: { value: {JOINT_PIN: 0, JOINT_GROOVE: 1, JOINT_DAMPED_SPRING: 2 } }, 
		ProcessInfo: { value: {INFO_ACTIVE_OBJECTS: 0, INFO_COLLISION_PAIRS: 1, INFO_ISLAND_COUNT: 2 } }, 
		ShapeType: { value: {SHAPE_LINE: 0, SHAPE_RAY: 1, SHAPE_SEGMENT: 2, SHAPE_CIRCLE: 3, SHAPE_RECTANGLE: 4, SHAPE_CAPSULE: 5, SHAPE_CONVEX_POLYGON: 6, SHAPE_CONCAVE_POLYGON: 7, SHAPE_CUSTOM: 8 } }, 
		SpaceParameter: { value: {SPACE_PARAM_CONTACT_RECYCLE_RADIUS: 0, SPACE_PARAM_CONTACT_MAX_SEPARATION: 1, SPACE_PARAM_BODY_MAX_ALLOWED_PENETRATION: 2, SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: 3, SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: 4, SPACE_PARAM_BODY_TIME_TO_SLEEP: 5, SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS: 6, SPACE_PARAM_TEST_MOTION_MIN_CONTACT_DEPTH: 7 } }
	});
	bind(godot.Physics2DShapeQueryParameters, {});
	bind(godot.Physics2DShapeQueryResult, {});
	bind(godot.Physics2DTestMotionResult, {});
	bind(godot.PhysicsBody, {});
	bind(godot.PhysicsBody2D, {});
	bind(godot.PhysicsDirectBodyState, {});
	bind(godot.PhysicsDirectSpaceState, {});
	bind(godot.PhysicsMaterial, {});
	bind(godot.PhysicsServer, {
		AreaBodyStatus: { value: {AREA_BODY_ADDED: 0, AREA_BODY_REMOVED: 1 } }, 
		AreaParameter: { value: {AREA_PARAM_GRAVITY: 0, AREA_PARAM_GRAVITY_VECTOR: 1, AREA_PARAM_GRAVITY_IS_POINT: 2, AREA_PARAM_GRAVITY_DISTANCE_SCALE: 3, AREA_PARAM_GRAVITY_POINT_ATTENUATION: 4, AREA_PARAM_LINEAR_DAMP: 5, AREA_PARAM_ANGULAR_DAMP: 6, AREA_PARAM_PRIORITY: 7 } }, 
		AreaSpaceOverrideMode: { value: {AREA_SPACE_OVERRIDE_DISABLED: 0, AREA_SPACE_OVERRIDE_COMBINE: 1, AREA_SPACE_OVERRIDE_COMBINE_REPLACE: 2, AREA_SPACE_OVERRIDE_REPLACE: 3, AREA_SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }, 
		BodyAxis: { value: {BODY_AXIS_LINEAR_X: 1, BODY_AXIS_LINEAR_Y: 2, BODY_AXIS_LINEAR_Z: 4, BODY_AXIS_ANGULAR_X: 8, BODY_AXIS_ANGULAR_Y: 16, BODY_AXIS_ANGULAR_Z: 32 } }, 
		BodyMode: { value: {BODY_MODE_STATIC: 0, BODY_MODE_KINEMATIC: 1, BODY_MODE_RIGID: 2, BODY_MODE_CHARACTER: 3 } }, 
		BodyParameter: { value: {BODY_PARAM_BOUNCE: 0, BODY_PARAM_FRICTION: 1, BODY_PARAM_MASS: 2, BODY_PARAM_GRAVITY_SCALE: 3, BODY_PARAM_LINEAR_DAMP: 4, BODY_PARAM_ANGULAR_DAMP: 5, BODY_PARAM_MAX: 6 } }, 
		BodyState: { value: {BODY_STATE_TRANSFORM: 0, BODY_STATE_LINEAR_VELOCITY: 1, BODY_STATE_ANGULAR_VELOCITY: 2, BODY_STATE_SLEEPING: 3, BODY_STATE_CAN_SLEEP: 4 } }, 
		ConeTwistJointParam: { value: {CONE_TWIST_JOINT_SWING_SPAN: 0, CONE_TWIST_JOINT_TWIST_SPAN: 1, CONE_TWIST_JOINT_BIAS: 2, CONE_TWIST_JOINT_SOFTNESS: 3, CONE_TWIST_JOINT_RELAXATION: 4 } }, 
		G6DOFJointAxisFlag: { value: {G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT: 0, G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT: 1, G6DOF_JOINT_FLAG_ENABLE_MOTOR: 4, G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR: 5 } }, 
		G6DOFJointAxisParam: { value: {G6DOF_JOINT_LINEAR_LOWER_LIMIT: 0, G6DOF_JOINT_LINEAR_UPPER_LIMIT: 1, G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS: 2, G6DOF_JOINT_LINEAR_RESTITUTION: 3, G6DOF_JOINT_LINEAR_DAMPING: 4, G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY: 5, G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT: 6, G6DOF_JOINT_ANGULAR_LOWER_LIMIT: 10, G6DOF_JOINT_ANGULAR_UPPER_LIMIT: 11, G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS: 12, G6DOF_JOINT_ANGULAR_DAMPING: 13, G6DOF_JOINT_ANGULAR_RESTITUTION: 14, G6DOF_JOINT_ANGULAR_FORCE_LIMIT: 15, G6DOF_JOINT_ANGULAR_ERP: 16, G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY: 17, G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT: 18 } }, 
		HingeJointFlag: { value: {HINGE_JOINT_FLAG_USE_LIMIT: 0, HINGE_JOINT_FLAG_ENABLE_MOTOR: 1 } }, 
		HingeJointParam: { value: {HINGE_JOINT_BIAS: 0, HINGE_JOINT_LIMIT_UPPER: 1, HINGE_JOINT_LIMIT_LOWER: 2, HINGE_JOINT_LIMIT_BIAS: 3, HINGE_JOINT_LIMIT_SOFTNESS: 4, HINGE_JOINT_LIMIT_RELAXATION: 5, HINGE_JOINT_MOTOR_TARGET_VELOCITY: 6, HINGE_JOINT_MOTOR_MAX_IMPULSE: 7 } }, 
		JointType: { value: {JOINT_PIN: 0, JOINT_HINGE: 1, JOINT_SLIDER: 2, JOINT_CONE_TWIST: 3, JOINT_6DOF: 4 } }, 
		PinJointParam: { value: {PIN_JOINT_BIAS: 0, PIN_JOINT_DAMPING: 1, PIN_JOINT_IMPULSE_CLAMP: 2 } }, 
		ProcessInfo: { value: {INFO_ACTIVE_OBJECTS: 0, INFO_COLLISION_PAIRS: 1, INFO_ISLAND_COUNT: 2 } }, 
		ShapeType: { value: {SHAPE_PLANE: 0, SHAPE_RAY: 1, SHAPE_SPHERE: 2, SHAPE_BOX: 3, SHAPE_CAPSULE: 4, SHAPE_CYLINDER: 5, SHAPE_CONVEX_POLYGON: 6, SHAPE_CONCAVE_POLYGON: 7, SHAPE_HEIGHTMAP: 8, SHAPE_CUSTOM: 9 } }, 
		SliderJointParam: { value: {SLIDER_JOINT_LINEAR_LIMIT_UPPER: 0, SLIDER_JOINT_LINEAR_LIMIT_LOWER: 1, SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS: 2, SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION: 3, SLIDER_JOINT_LINEAR_LIMIT_DAMPING: 4, SLIDER_JOINT_LINEAR_MOTION_SOFTNESS: 5, SLIDER_JOINT_LINEAR_MOTION_RESTITUTION: 6, SLIDER_JOINT_LINEAR_MOTION_DAMPING: 7, SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS: 8, SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION: 9, SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING: 10, SLIDER_JOINT_ANGULAR_LIMIT_UPPER: 11, SLIDER_JOINT_ANGULAR_LIMIT_LOWER: 12, SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS: 13, SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION: 14, SLIDER_JOINT_ANGULAR_LIMIT_DAMPING: 15, SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS: 16, SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION: 17, SLIDER_JOINT_ANGULAR_MOTION_DAMPING: 18, SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS: 19, SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION: 20, SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING: 21, SLIDER_JOINT_MAX: 22 } }, 
		SpaceParameter: { value: {SPACE_PARAM_CONTACT_RECYCLE_RADIUS: 0, SPACE_PARAM_CONTACT_MAX_SEPARATION: 1, SPACE_PARAM_BODY_MAX_ALLOWED_PENETRATION: 2, SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: 3, SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: 4, SPACE_PARAM_BODY_TIME_TO_SLEEP: 5, SPACE_PARAM_BODY_ANGULAR_VELOCITY_DAMP_RATIO: 6, SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS: 7, SPACE_PARAM_TEST_MOTION_MIN_CONTACT_DEPTH: 8 } }
	});
	bind(godot.PhysicsShapeQueryParameters, {});
	bind(godot.PhysicsShapeQueryResult, {});
	bind(godot.PinJoint, {
		Param: { value: {PARAM_BIAS: 0, PARAM_DAMPING: 1, PARAM_IMPULSE_CLAMP: 2 } }
	});
	bind(godot.PinJoint2D, {});
	bind(godot.PlaneMesh, {});
	bind(godot.PlaneShape, {});
	bind(godot.PluginScript, {});
	bind(godot.PointMesh, {});
	bind(godot.Polygon2D, {});
	bind(godot.PolygonPathFinder, {});
	bind(godot.Popup, {});
	bind(godot.PopupDialog, {});
	bind(godot.PopupMenu, {});
	bind(godot.PopupPanel, {});
	bind(godot.Position2D, {});
	bind(godot.Position3D, {});
	bind(godot.PrimitiveMesh, {});
	bind(godot.PrismMesh, {});
	bind(godot.ProceduralSky, {
		TextureSize: { value: {TEXTURE_SIZE_256: 0, TEXTURE_SIZE_512: 1, TEXTURE_SIZE_1024: 2, TEXTURE_SIZE_2048: 3, TEXTURE_SIZE_4096: 4, TEXTURE_SIZE_MAX: 5 } }
	});
	bind(godot.ProgressBar, {});
	bind(godot.ProjectSettings, {});
	bind(godot.ProximityGroup, {
		DispatchMode: { value: {MODE_PROXY: 0, MODE_SIGNAL: 1 } }
	});
	bind(godot.ProxyTexture, {});
	bind(godot.QuadMesh, {});
	bind(godot.RandomNumberGenerator, {});
	bind(godot.Range, {});
	bind(godot.RayCast, {});
	bind(godot.RayCast2D, {});
	bind(godot.RayShape, {});
	bind(godot.RayShape2D, {});
	bind(godot.RectangleShape2D, {});
	bind(godot.Reference, {});
	bind(godot.ReferenceRect, {});
	bind(godot.ReflectionProbe, {
		UpdateMode: { value: {UPDATE_ONCE: 0, UPDATE_ALWAYS: 1 } }
	});
	bind(godot.RegEx, {});
	bind(godot.RegExMatch, {});
	bind(godot.RemoteTransform, {});
	bind(godot.RemoteTransform2D, {});
	bind(godot.Resource, {});
	bind(godot.ResourceFormatLoader, {});
	bind(godot.ResourceFormatSaver, {});
	bind(godot.ResourceImporter, {});
	bind(godot.ResourceInteractiveLoader, {});
	bind(godot.ResourceLoader, {});
	bind(godot.ResourcePreloader, {});
	bind(godot.ResourceSaver, {
		SaverFlags: { value: {FLAG_RELATIVE_PATHS: 1, FLAG_BUNDLE_RESOURCES: 2, FLAG_CHANGE_PATH: 4, FLAG_OMIT_EDITOR_PROPERTIES: 8, FLAG_SAVE_BIG_ENDIAN: 16, FLAG_COMPRESS: 32, FLAG_REPLACE_SUBRESOURCE_PATHS: 64 } }
	});
	bind(godot.RichTextEffect, {});
	bind(godot.RichTextLabel, {
		Align: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2, ALIGN_FILL: 3 } }, 
		ItemType: { value: {ITEM_FRAME: 0, ITEM_TEXT: 1, ITEM_IMAGE: 2, ITEM_NEWLINE: 3, ITEM_FONT: 4, ITEM_COLOR: 5, ITEM_UNDERLINE: 6, ITEM_STRIKETHROUGH: 7, ITEM_ALIGN: 8, ITEM_INDENT: 9, ITEM_LIST: 10, ITEM_TABLE: 11, ITEM_FADE: 12, ITEM_SHAKE: 13, ITEM_WAVE: 14, ITEM_TORNADO: 15, ITEM_RAINBOW: 16, ITEM_CUSTOMFX: 18, ITEM_META: 17 } }, 
		ListType: { value: {LIST_NUMBERS: 0, LIST_LETTERS: 1, LIST_DOTS: 2 } }
	});
	bind(godot.RigidBody, {
		Mode: { value: {MODE_RIGID: 0, MODE_STATIC: 1, MODE_CHARACTER: 2, MODE_KINEMATIC: 3 } }
	});
	bind(godot.RigidBody2D, {
		CCDMode: { value: {CCD_MODE_DISABLED: 0, CCD_MODE_CAST_RAY: 1, CCD_MODE_CAST_SHAPE: 2 } }, 
		Mode: { value: {MODE_RIGID: 0, MODE_STATIC: 1, MODE_CHARACTER: 2, MODE_KINEMATIC: 3 } }
	});
	bind(godot.RootMotionView, {});
	bind(godot.SceneState, {
		GenEditState: { value: {GEN_EDIT_STATE_DISABLED: 0, GEN_EDIT_STATE_INSTANCE: 1, GEN_EDIT_STATE_MAIN: 2 } }
	});
	bind(godot.SceneTree, {
		GroupCallFlags: { value: {GROUP_CALL_DEFAULT: 0, GROUP_CALL_REVERSE: 1, GROUP_CALL_REALTIME: 2, GROUP_CALL_UNIQUE: 4 } }, 
		StretchAspect: { value: {STRETCH_ASPECT_IGNORE: 0, STRETCH_ASPECT_KEEP: 1, STRETCH_ASPECT_KEEP_WIDTH: 2, STRETCH_ASPECT_KEEP_HEIGHT: 3, STRETCH_ASPECT_EXPAND: 4 } }, 
		StretchMode: { value: {STRETCH_MODE_DISABLED: 0, STRETCH_MODE_2D: 1, STRETCH_MODE_VIEWPORT: 2 } }
	});
	bind(godot.SceneTreeTimer, {});
	bind(godot.Script, {});
	bind(godot.ScriptCreateDialog, {});
	bind(godot.ScriptEditor, {});
	bind(godot.ScrollBar, {});
	bind(godot.ScrollContainer, {});
	bind(godot.SegmentShape2D, {});
	bind(godot.Separator, {});
	bind(godot.Shader, {
		Mode: { value: {MODE_SPATIAL: 0, MODE_CANVAS_ITEM: 1, MODE_PARTICLES: 2 } }
	});
	bind(godot.ShaderMaterial, {});
	bind(godot.Shape, {});
	bind(godot.Shape2D, {});
	bind(godot.ShortCut, {});
	bind(godot.Skeleton, {});
	bind(godot.Skeleton2D, {});
	bind(godot.SkeletonIK, {});
	bind(godot.Skin, {});
	bind(godot.SkinReference, {});
	bind(godot.Sky, {
		RadianceSize: { value: {RADIANCE_SIZE_32: 0, RADIANCE_SIZE_64: 1, RADIANCE_SIZE_128: 2, RADIANCE_SIZE_256: 3, RADIANCE_SIZE_512: 4, RADIANCE_SIZE_1024: 5, RADIANCE_SIZE_2048: 6, RADIANCE_SIZE_MAX: 7 } }
	});
	bind(godot.Slider, {});
	bind(godot.SliderJoint, {
		Param: { value: {PARAM_LINEAR_LIMIT_UPPER: 0, PARAM_LINEAR_LIMIT_LOWER: 1, PARAM_LINEAR_LIMIT_SOFTNESS: 2, PARAM_LINEAR_LIMIT_RESTITUTION: 3, PARAM_LINEAR_LIMIT_DAMPING: 4, PARAM_LINEAR_MOTION_SOFTNESS: 5, PARAM_LINEAR_MOTION_RESTITUTION: 6, PARAM_LINEAR_MOTION_DAMPING: 7, PARAM_LINEAR_ORTHOGONAL_SOFTNESS: 8, PARAM_LINEAR_ORTHOGONAL_RESTITUTION: 9, PARAM_LINEAR_ORTHOGONAL_DAMPING: 10, PARAM_ANGULAR_LIMIT_UPPER: 11, PARAM_ANGULAR_LIMIT_LOWER: 12, PARAM_ANGULAR_LIMIT_SOFTNESS: 13, PARAM_ANGULAR_LIMIT_RESTITUTION: 14, PARAM_ANGULAR_LIMIT_DAMPING: 15, PARAM_ANGULAR_MOTION_SOFTNESS: 16, PARAM_ANGULAR_MOTION_RESTITUTION: 17, PARAM_ANGULAR_MOTION_DAMPING: 18, PARAM_ANGULAR_ORTHOGONAL_SOFTNESS: 19, PARAM_ANGULAR_ORTHOGONAL_RESTITUTION: 20, PARAM_ANGULAR_ORTHOGONAL_DAMPING: 21, PARAM_MAX: 22 } }
	});
	bind(godot.SoftBody, {});
	bind(godot.Spatial, {});
	bind(godot.SpatialGizmo, {});
	bind(godot.SpatialMaterial, {
		BillboardMode: { value: {BILLBOARD_DISABLED: 0, BILLBOARD_ENABLED: 1, BILLBOARD_FIXED_Y: 2, BILLBOARD_PARTICLES: 3 } }, 
		BlendMode: { value: {BLEND_MODE_MIX: 0, BLEND_MODE_ADD: 1, BLEND_MODE_SUB: 2, BLEND_MODE_MUL: 3 } }, 
		CullMode: { value: {CULL_BACK: 0, CULL_FRONT: 1, CULL_DISABLED: 2 } }, 
		DepthDrawMode: { value: {DEPTH_DRAW_OPAQUE_ONLY: 0, DEPTH_DRAW_ALWAYS: 1, DEPTH_DRAW_DISABLED: 2, DEPTH_DRAW_ALPHA_OPAQUE_PREPASS: 3 } }, 
		DetailUV: { value: {DETAIL_UV_1: 0, DETAIL_UV_2: 1 } }, 
		DiffuseMode: { value: {DIFFUSE_BURLEY: 0, DIFFUSE_LAMBERT: 1, DIFFUSE_LAMBERT_WRAP: 2, DIFFUSE_OREN_NAYAR: 3, DIFFUSE_TOON: 4 } }, 
		DistanceFadeMode: { value: {DISTANCE_FADE_DISABLED: 0, DISTANCE_FADE_PIXEL_ALPHA: 1, DISTANCE_FADE_PIXEL_DITHER: 2, DISTANCE_FADE_OBJECT_DITHER: 3 } }, 
		EmissionOperator: { value: {EMISSION_OP_ADD: 0, EMISSION_OP_MULTIPLY: 1 } }, 
		Feature: { value: {FEATURE_TRANSPARENT: 0, FEATURE_EMISSION: 1, FEATURE_NORMAL_MAPPING: 2, FEATURE_RIM: 3, FEATURE_CLEARCOAT: 4, FEATURE_ANISOTROPY: 5, FEATURE_AMBIENT_OCCLUSION: 6, FEATURE_DEPTH_MAPPING: 7, FEATURE_SUBSURACE_SCATTERING: 8, FEATURE_TRANSMISSION: 9, FEATURE_REFRACTION: 10, FEATURE_DETAIL: 11, FEATURE_MAX: 12 } }, 
		Flags: { value: {FLAG_UNSHADED: 0, FLAG_USE_VERTEX_LIGHTING: 1, FLAG_DISABLE_DEPTH_TEST: 2, FLAG_ALBEDO_FROM_VERTEX_COLOR: 3, FLAG_SRGB_VERTEX_COLOR: 4, FLAG_USE_POINT_SIZE: 5, FLAG_FIXED_SIZE: 6, FLAG_BILLBOARD_KEEP_SCALE: 7, FLAG_UV1_USE_TRIPLANAR: 8, FLAG_UV2_USE_TRIPLANAR: 9, FLAG_AO_ON_UV2: 11, FLAG_EMISSION_ON_UV2: 12, FLAG_USE_ALPHA_SCISSOR: 13, FLAG_TRIPLANAR_USE_WORLD: 10, FLAG_ALBEDO_TEXTURE_FORCE_SRGB: 14, FLAG_DONT_RECEIVE_SHADOWS: 15, FLAG_DISABLE_AMBIENT_LIGHT: 17, FLAG_ENSURE_CORRECT_NORMALS: 16, FLAG_USE_SHADOW_TO_OPACITY: 18, FLAG_MAX: 19 } }, 
		SpecularMode: { value: {SPECULAR_SCHLICK_GGX: 0, SPECULAR_BLINN: 1, SPECULAR_PHONG: 2, SPECULAR_TOON: 3, SPECULAR_DISABLED: 4 } }, 
		TextureChannel: { value: {TEXTURE_CHANNEL_RED: 0, TEXTURE_CHANNEL_GREEN: 1, TEXTURE_CHANNEL_BLUE: 2, TEXTURE_CHANNEL_ALPHA: 3, TEXTURE_CHANNEL_GRAYSCALE: 4 } }, 
		TextureParam: { value: {TEXTURE_ALBEDO: 0, TEXTURE_METALLIC: 1, TEXTURE_ROUGHNESS: 2, TEXTURE_EMISSION: 3, TEXTURE_NORMAL: 4, TEXTURE_RIM: 5, TEXTURE_CLEARCOAT: 6, TEXTURE_FLOWMAP: 7, TEXTURE_AMBIENT_OCCLUSION: 8, TEXTURE_DEPTH: 9, TEXTURE_SUBSURFACE_SCATTERING: 10, TEXTURE_TRANSMISSION: 11, TEXTURE_REFRACTION: 12, TEXTURE_DETAIL_MASK: 13, TEXTURE_DETAIL_ALBEDO: 14, TEXTURE_DETAIL_NORMAL: 15, TEXTURE_MAX: 16 } }
	});
	bind(godot.SpatialVelocityTracker, {});
	bind(godot.SphereMesh, {});
	bind(godot.SphereShape, {});
	bind(godot.SpinBox, {});
	bind(godot.SplitContainer, {
		DraggerVisibility: { value: {DRAGGER_VISIBLE: 0, DRAGGER_HIDDEN: 1, DRAGGER_HIDDEN_COLLAPSED: 2 } }
	});
	bind(godot.SpotLight, {});
	bind(godot.SpringArm, {});
	bind(godot.Sprite, {});
	bind(godot.Sprite3D, {});
	bind(godot.SpriteBase3D, {
		AlphaCutMode: { value: {ALPHA_CUT_DISABLED: 0, ALPHA_CUT_DISCARD: 1, ALPHA_CUT_OPAQUE_PREPASS: 2 } }, 
		DrawFlags: { value: {FLAG_TRANSPARENT: 0, FLAG_SHADED: 1, FLAG_DOUBLE_SIDED: 2, FLAG_MAX: 3 } }
	});
	bind(godot.SpriteFrames, {});
	bind(godot.StaticBody, {});
	bind(godot.StaticBody2D, {});
	bind(godot.StreamPeer, {});
	bind(godot.StreamPeerBuffer, {});
	bind(godot.StreamPeerGDNative, {});
	bind(godot.StreamPeerSSL, {
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_HANDSHAKING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3, STATUS_ERROR_HOSTNAME_MISMATCH: 4 } }
	});
	bind(godot.StreamPeerTCP, {
		Status: { value: {STATUS_NONE: 0, STATUS_CONNECTING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3 } }
	});
	bind(godot.StreamTexture, {});
	bind(godot.StyleBox, {});
	bind(godot.StyleBoxEmpty, {});
	bind(godot.StyleBoxFlat, {});
	bind(godot.StyleBoxLine, {});
	bind(godot.StyleBoxTexture, {
		AxisStretchMode: { value: {AXIS_STRETCH_MODE_STRETCH: 0, AXIS_STRETCH_MODE_TILE: 1, AXIS_STRETCH_MODE_TILE_FIT: 2 } }
	});
	bind(godot.SurfaceTool, {});
	bind(godot.TCP_Server, {});
	bind(godot.TabContainer, {
		TabAlign: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2 } }
	});
	bind(godot.Tabs, {
		CloseButtonDisplayPolicy: { value: {CLOSE_BUTTON_SHOW_NEVER: 0, CLOSE_BUTTON_SHOW_ACTIVE_ONLY: 1, CLOSE_BUTTON_SHOW_ALWAYS: 2, CLOSE_BUTTON_MAX: 3 } }, 
		TabAlign: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2, ALIGN_MAX: 3 } }
	});
	bind(godot.TextEdit, {
		MenuItems: { value: {MENU_CUT: 0, MENU_COPY: 1, MENU_PASTE: 2, MENU_CLEAR: 3, MENU_SELECT_ALL: 4, MENU_UNDO: 5, MENU_REDO: 6, MENU_MAX: 7 } }, 
		SearchFlags: { value: {SEARCH_MATCH_CASE: 1, SEARCH_WHOLE_WORDS: 2, SEARCH_BACKWARDS: 4 } }, 
		SearchResult: { value: {SEARCH_RESULT_COLUMN: 0, SEARCH_RESULT_LINE: 1 } }
	});
	bind(godot.TextFile, {});
	bind(godot.Texture, {
		Flags: { value: {FLAGS_DEFAULT: 7, FLAG_MIPMAPS: 1, FLAG_REPEAT: 2, FLAG_FILTER: 4, FLAG_ANISOTROPIC_FILTER: 8, FLAG_CONVERT_TO_LINEAR: 16, FLAG_MIRRORED_REPEAT: 32, FLAG_VIDEO_SURFACE: 2048 } }
	});
	bind(godot.Texture3D, {});
	bind(godot.TextureArray, {});
	bind(godot.TextureButton, {
		StretchMode: { value: {STRETCH_SCALE: 0, STRETCH_TILE: 1, STRETCH_KEEP: 2, STRETCH_KEEP_CENTERED: 3, STRETCH_KEEP_ASPECT: 4, STRETCH_KEEP_ASPECT_CENTERED: 5, STRETCH_KEEP_ASPECT_COVERED: 6 } }
	});
	bind(godot.TextureLayered, {
		Flags: { value: {FLAG_MIPMAPS: 1, FLAG_REPEAT: 2, FLAG_FILTER: 4, FLAGS_DEFAULT: 4 } }
	});
	bind(godot.TextureProgress, {
		FillMode: { value: {FILL_LEFT_TO_RIGHT: 0, FILL_RIGHT_TO_LEFT: 1, FILL_TOP_TO_BOTTOM: 2, FILL_BOTTOM_TO_TOP: 3, FILL_CLOCKWISE: 4, FILL_COUNTER_CLOCKWISE: 5, FILL_BILINEAR_LEFT_AND_RIGHT: 6, FILL_BILINEAR_TOP_AND_BOTTOM: 7, FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE: 8 } }
	});
	bind(godot.TextureRect, {
		StretchMode: { value: {STRETCH_SCALE_ON_EXPAND: 0, STRETCH_SCALE: 1, STRETCH_TILE: 2, STRETCH_KEEP: 3, STRETCH_KEEP_CENTERED: 4, STRETCH_KEEP_ASPECT: 5, STRETCH_KEEP_ASPECT_CENTERED: 6, STRETCH_KEEP_ASPECT_COVERED: 7 } }
	});
	bind(godot.Theme, {});
	bind(godot.TileMap, {
		HalfOffset: { value: {HALF_OFFSET_X: 0, HALF_OFFSET_Y: 1, HALF_OFFSET_DISABLED: 2, HALF_OFFSET_NEGATIVE_X: 3, HALF_OFFSET_NEGATIVE_Y: 4 } }, 
		Mode: { value: {MODE_SQUARE: 0, MODE_ISOMETRIC: 1, MODE_CUSTOM: 2 } }, 
		TileOrigin: { value: {TILE_ORIGIN_TOP_LEFT: 0, TILE_ORIGIN_CENTER: 1, TILE_ORIGIN_BOTTOM_LEFT: 2 } }
	});
	bind(godot.TileSet, {
		AutotileBindings: { value: {BIND_TOPLEFT: 1, BIND_TOP: 2, BIND_TOPRIGHT: 4, BIND_LEFT: 8, BIND_CENTER: 16, BIND_RIGHT: 32, BIND_BOTTOMLEFT: 64, BIND_BOTTOM: 128, BIND_BOTTOMRIGHT: 256 } }, 
		BitmaskMode: { value: {BITMASK_2X2: 0, BITMASK_3X3_MINIMAL: 1, BITMASK_3X3: 2 } }, 
		TileMode: { value: {SINGLE_TILE: 0, AUTO_TILE: 1, ATLAS_TILE: 2 } }
	});
	bind(godot.Timer, {
		TimerProcessMode: { value: {TIMER_PROCESS_PHYSICS: 0, TIMER_PROCESS_IDLE: 1 } }
	});
	bind(godot.ToolButton, {});
	bind(godot.TouchScreenButton, {
		VisibilityMode: { value: {VISIBILITY_ALWAYS: 0, VISIBILITY_TOUCHSCREEN_ONLY: 1 } }
	});
	bind(godot.Translation, {});
	bind(godot.TranslationServer, {});
	bind(godot.Tree, {
		DropModeFlags: { value: {DROP_MODE_DISABLED: 0, DROP_MODE_ON_ITEM: 1, DROP_MODE_INBETWEEN: 2 } }, 
		SelectMode: { value: {SELECT_SINGLE: 0, SELECT_ROW: 1, SELECT_MULTI: 2 } }
	});
	bind(godot.TreeItem, {
		TextAlign: { value: {ALIGN_LEFT: 0, ALIGN_CENTER: 1, ALIGN_RIGHT: 2 } }, 
		TreeCellMode: { value: {CELL_MODE_STRING: 0, CELL_MODE_CHECK: 1, CELL_MODE_RANGE: 2, CELL_MODE_ICON: 3, CELL_MODE_CUSTOM: 4 } }
	});
	bind(godot.TriangleMesh, {});
	bind(godot.Tween, {
		EaseType: { value: {EASE_IN: 0, EASE_OUT: 1, EASE_IN_OUT: 2, EASE_OUT_IN: 3 } }, 
		TransitionType: { value: {TRANS_LINEAR: 0, TRANS_SINE: 1, TRANS_QUINT: 2, TRANS_QUART: 3, TRANS_QUAD: 4, TRANS_EXPO: 5, TRANS_ELASTIC: 6, TRANS_CUBIC: 7, TRANS_CIRC: 8, TRANS_BOUNCE: 9, TRANS_BACK: 10 } }, 
		TweenProcessMode: { value: {TWEEN_PROCESS_PHYSICS: 0, TWEEN_PROCESS_IDLE: 1 } }
	});
	bind(godot.UDPServer, {});
	bind(godot.UPNP, {
		UPNPResult: { value: {UPNP_RESULT_SUCCESS: 0, UPNP_RESULT_NOT_AUTHORIZED: 1, UPNP_RESULT_PORT_MAPPING_NOT_FOUND: 2, UPNP_RESULT_INCONSISTENT_PARAMETERS: 3, UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY: 4, UPNP_RESULT_ACTION_FAILED: 5, UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED: 6, UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED: 7, UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED: 8, UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD: 9, UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD: 10, UPNP_RESULT_NO_PORT_MAPS_AVAILABLE: 11, UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM: 12, UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING: 13, UPNP_RESULT_SAME_PORT_VALUES_REQUIRED: 14, UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED: 15, UPNP_RESULT_INVALID_GATEWAY: 16, UPNP_RESULT_INVALID_PORT: 17, UPNP_RESULT_INVALID_PROTOCOL: 18, UPNP_RESULT_INVALID_DURATION: 19, UPNP_RESULT_INVALID_ARGS: 20, UPNP_RESULT_INVALID_RESPONSE: 21, UPNP_RESULT_INVALID_PARAM: 22, UPNP_RESULT_HTTP_ERROR: 23, UPNP_RESULT_SOCKET_ERROR: 24, UPNP_RESULT_MEM_ALLOC_ERROR: 25, UPNP_RESULT_NO_GATEWAY: 26, UPNP_RESULT_NO_DEVICES: 27, UPNP_RESULT_UNKNOWN_ERROR: 28 } }
	});
	bind(godot.UPNPDevice, {
		IGDStatus: { value: {IGD_STATUS_OK: 0, IGD_STATUS_HTTP_ERROR: 1, IGD_STATUS_HTTP_EMPTY: 2, IGD_STATUS_NO_URLS: 3, IGD_STATUS_NO_IGD: 4, IGD_STATUS_DISCONNECTED: 5, IGD_STATUS_UNKNOWN_DEVICE: 6, IGD_STATUS_INVALID_CONTROL: 7, IGD_STATUS_MALLOC_ERROR: 8, IGD_STATUS_UNKNOWN_ERROR: 9 } }
	});
	bind(godot.UndoRedo, {
		MergeMode: { value: {MERGE_DISABLE: 0, MERGE_ENDS: 1, MERGE_ALL: 2 } }
	});
	bind(godot.VBoxContainer, {});
	bind(godot.VScrollBar, {});
	bind(godot.VSeparator, {});
	bind(godot.VSlider, {});
	bind(godot.VSplitContainer, {});
	bind(godot.VehicleBody, {});
	bind(godot.VehicleWheel, {});
	bind(godot.VideoPlayer, {});
	bind(godot.VideoStream, {});
	bind(godot.VideoStreamGDNative, {});
	bind(godot.VideoStreamTheora, {});
	bind(godot.VideoStreamWebm, {});
	bind(godot.Viewport, {
		ClearMode: { value: {CLEAR_MODE_ALWAYS: 0, CLEAR_MODE_NEVER: 1, CLEAR_MODE_ONLY_NEXT_FRAME: 2 } }, 
		DebugDraw: { value: {DEBUG_DRAW_DISABLED: 0, DEBUG_DRAW_UNSHADED: 1, DEBUG_DRAW_OVERDRAW: 2, DEBUG_DRAW_WIREFRAME: 3 } }, 
		MSAA: { value: {MSAA_DISABLED: 0, MSAA_2X: 1, MSAA_4X: 2, MSAA_8X: 3, MSAA_16X: 4 } }, 
		RenderInfo: { value: {RENDER_INFO_OBJECTS_IN_FRAME: 0, RENDER_INFO_VERTICES_IN_FRAME: 1, RENDER_INFO_MATERIAL_CHANGES_IN_FRAME: 2, RENDER_INFO_SHADER_CHANGES_IN_FRAME: 3, RENDER_INFO_SURFACE_CHANGES_IN_FRAME: 4, RENDER_INFO_DRAW_CALLS_IN_FRAME: 5, RENDER_INFO_2D_ITEMS_IN_FRAME: 6, RENDER_INFO_2D_DRAW_CALLS_IN_FRAME: 7, RENDER_INFO_MAX: 8 } }, 
		ShadowAtlasQuadrantSubdiv: { value: {SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED: 0, SHADOW_ATLAS_QUADRANT_SUBDIV_1: 1, SHADOW_ATLAS_QUADRANT_SUBDIV_4: 2, SHADOW_ATLAS_QUADRANT_SUBDIV_16: 3, SHADOW_ATLAS_QUADRANT_SUBDIV_64: 4, SHADOW_ATLAS_QUADRANT_SUBDIV_256: 5, SHADOW_ATLAS_QUADRANT_SUBDIV_1024: 6, SHADOW_ATLAS_QUADRANT_SUBDIV_MAX: 7 } }, 
		UpdateMode: { value: {UPDATE_DISABLED: 0, UPDATE_ONCE: 1, UPDATE_WHEN_VISIBLE: 2, UPDATE_ALWAYS: 3 } }, 
		Usage: { value: {USAGE_2D: 0, USAGE_2D_NO_SAMPLING: 1, USAGE_3D: 2, USAGE_3D_NO_EFFECTS: 3 } }
	});
	bind(godot.ViewportContainer, {});
	bind(godot.ViewportTexture, {});
	bind(godot.VisibilityEnabler, {
		Enabler: { value: {ENABLER_PAUSE_ANIMATIONS: 0, ENABLER_FREEZE_BODIES: 1, ENABLER_MAX: 2 } }
	});
	bind(godot.VisibilityEnabler2D, {
		Enabler: { value: {ENABLER_PAUSE_ANIMATIONS: 0, ENABLER_FREEZE_BODIES: 1, ENABLER_PAUSE_PARTICLES: 2, ENABLER_PARENT_PROCESS: 3, ENABLER_PARENT_PHYSICS_PROCESS: 4, ENABLER_PAUSE_ANIMATED_SPRITES: 5, ENABLER_MAX: 6 } }
	});
	bind(godot.VisibilityNotifier, {});
	bind(godot.VisibilityNotifier2D, {});
	bind(godot.VisualInstance, {});
	bind(godot.VisualScript, {});
	bind(godot.VisualScriptBasicTypeConstant, {});
	bind(godot.VisualScriptBuiltinFunc, {
		BuiltinFunc: { value: {MATH_SIN: 0, MATH_COS: 1, MATH_TAN: 2, MATH_SINH: 3, MATH_COSH: 4, MATH_TANH: 5, MATH_ASIN: 6, MATH_ACOS: 7, MATH_ATAN: 8, MATH_ATAN2: 9, MATH_SQRT: 10, MATH_FMOD: 11, MATH_FPOSMOD: 12, MATH_FLOOR: 13, MATH_CEIL: 14, MATH_ROUND: 15, MATH_ABS: 16, MATH_SIGN: 17, MATH_POW: 18, MATH_LOG: 19, MATH_EXP: 20, MATH_ISNAN: 21, MATH_ISINF: 22, MATH_EASE: 23, MATH_DECIMALS: 24, MATH_STEPIFY: 25, MATH_LERP: 26, MATH_INVERSE_LERP: 27, MATH_RANGE_LERP: 28, MATH_MOVE_TOWARD: 29, MATH_DECTIME: 30, MATH_RANDOMIZE: 31, MATH_RAND: 32, MATH_RANDF: 33, MATH_RANDOM: 34, MATH_SEED: 35, MATH_RANDSEED: 36, MATH_DEG2RAD: 37, MATH_RAD2DEG: 38, MATH_LINEAR2DB: 39, MATH_DB2LINEAR: 40, MATH_POLAR2CARTESIAN: 41, MATH_CARTESIAN2POLAR: 42, MATH_WRAP: 43, MATH_WRAPF: 44, LOGIC_MAX: 45, LOGIC_MIN: 46, LOGIC_CLAMP: 47, LOGIC_NEAREST_PO2: 48, OBJ_WEAKREF: 49, FUNC_FUNCREF: 50, TYPE_CONVERT: 51, TYPE_OF: 52, TYPE_EXISTS: 53, TEXT_CHAR: 54, TEXT_STR: 55, TEXT_PRINT: 56, TEXT_PRINTERR: 57, TEXT_PRINTRAW: 58, VAR_TO_STR: 59, STR_TO_VAR: 60, VAR_TO_BYTES: 61, BYTES_TO_VAR: 62, COLORN: 63, MATH_SMOOTHSTEP: 64, MATH_POSMOD: 65, MATH_LERP_ANGLE: 66, TEXT_ORD: 67, FUNC_MAX: 68 } }
	});
	bind(godot.VisualScriptClassConstant, {});
	bind(godot.VisualScriptComment, {});
	bind(godot.VisualScriptComposeArray, {});
	bind(godot.VisualScriptCondition, {});
	bind(godot.VisualScriptConstant, {});
	bind(godot.VisualScriptConstructor, {});
	bind(godot.VisualScriptCustomNode, {
		StartMode: { value: {START_MODE_BEGIN_SEQUENCE: 0, START_MODE_CONTINUE_SEQUENCE: 1, START_MODE_RESUME_YIELD: 2 } }
	});
	bind(godot.VisualScriptDeconstruct, {});
	bind(godot.VisualScriptEditor, {});
	bind(godot.VisualScriptEmitSignal, {});
	bind(godot.VisualScriptEngineSingleton, {});
	bind(godot.VisualScriptExpression, {});
	bind(godot.VisualScriptFunction, {});
	bind(godot.VisualScriptFunctionCall, {
		CallMode: { value: {CALL_MODE_SELF: 0, CALL_MODE_NODE_PATH: 1, CALL_MODE_INSTANCE: 2, CALL_MODE_BASIC_TYPE: 3, CALL_MODE_SINGLETON: 4 } }, 
		RPCCallMode: { value: {RPC_DISABLED: 0, RPC_RELIABLE: 1, RPC_UNRELIABLE: 2, RPC_RELIABLE_TO_ID: 3, RPC_UNRELIABLE_TO_ID: 4 } }
	});
	bind(godot.VisualScriptFunctionState, {});
	bind(godot.VisualScriptGlobalConstant, {});
	bind(godot.VisualScriptIndexGet, {});
	bind(godot.VisualScriptIndexSet, {});
	bind(godot.VisualScriptInputAction, {
		Mode: { value: {MODE_PRESSED: 0, MODE_RELEASED: 1, MODE_JUST_PRESSED: 2, MODE_JUST_RELEASED: 3 } }
	});
	bind(godot.VisualScriptIterator, {});
	bind(godot.VisualScriptLists, {});
	bind(godot.VisualScriptLocalVar, {});
	bind(godot.VisualScriptLocalVarSet, {});
	bind(godot.VisualScriptMathConstant, {
		MathConstant: { value: {MATH_CONSTANT_ONE: 0, MATH_CONSTANT_PI: 1, MATH_CONSTANT_HALF_PI: 2, MATH_CONSTANT_TAU: 3, MATH_CONSTANT_E: 4, MATH_CONSTANT_SQRT2: 5, MATH_CONSTANT_INF: 6, MATH_CONSTANT_NAN: 7, MATH_CONSTANT_MAX: 8 } }
	});
	bind(godot.VisualScriptNode, {});
	bind(godot.VisualScriptOperator, {});
	bind(godot.VisualScriptPreload, {});
	bind(godot.VisualScriptPropertyGet, {
		CallMode: { value: {CALL_MODE_SELF: 0, CALL_MODE_NODE_PATH: 1, CALL_MODE_INSTANCE: 2 } }
	});
	bind(godot.VisualScriptPropertySet, {
		AssignOp: { value: {ASSIGN_OP_NONE: 0, ASSIGN_OP_ADD: 1, ASSIGN_OP_SUB: 2, ASSIGN_OP_MUL: 3, ASSIGN_OP_DIV: 4, ASSIGN_OP_MOD: 5, ASSIGN_OP_SHIFT_LEFT: 6, ASSIGN_OP_SHIFT_RIGHT: 7, ASSIGN_OP_BIT_AND: 8, ASSIGN_OP_BIT_OR: 9, ASSIGN_OP_BIT_XOR: 10 } }, 
		CallMode: { value: {CALL_MODE_SELF: 0, CALL_MODE_NODE_PATH: 1, CALL_MODE_INSTANCE: 2, CALL_MODE_BASIC_TYPE: 3 } }
	});
	bind(godot.VisualScriptResourcePath, {});
	bind(godot.VisualScriptReturn, {});
	bind(godot.VisualScriptSceneNode, {});
	bind(godot.VisualScriptSceneTree, {});
	bind(godot.VisualScriptSelect, {});
	bind(godot.VisualScriptSelf, {});
	bind(godot.VisualScriptSequence, {});
	bind(godot.VisualScriptSubCall, {});
	bind(godot.VisualScriptSwitch, {});
	bind(godot.VisualScriptTypeCast, {});
	bind(godot.VisualScriptVariableGet, {});
	bind(godot.VisualScriptVariableSet, {});
	bind(godot.VisualScriptWhile, {});
	bind(godot.VisualScriptYield, {
		YieldMode: { value: {YIELD_FRAME: 1, YIELD_PHYSICS_FRAME: 2, YIELD_WAIT: 3 } }
	});
	bind(godot.VisualScriptYieldSignal, {
		CallMode: { value: {CALL_MODE_SELF: 0, CALL_MODE_NODE_PATH: 1, CALL_MODE_INSTANCE: 2 } }
	});
	bind(godot.VisualServer, {
		ArrayFormat: { value: {ARRAY_FORMAT_VERTEX: 1, ARRAY_FORMAT_NORMAL: 2, ARRAY_FORMAT_TANGENT: 4, ARRAY_FORMAT_COLOR: 8, ARRAY_FORMAT_TEX_UV: 16, ARRAY_FORMAT_TEX_UV2: 32, ARRAY_FORMAT_BONES: 64, ARRAY_FORMAT_WEIGHTS: 128, ARRAY_FORMAT_INDEX: 256, ARRAY_COMPRESS_VERTEX: 512, ARRAY_COMPRESS_NORMAL: 1024, ARRAY_COMPRESS_TANGENT: 2048, ARRAY_COMPRESS_COLOR: 4096, ARRAY_COMPRESS_TEX_UV: 8192, ARRAY_COMPRESS_TEX_UV2: 16384, ARRAY_COMPRESS_BONES: 32768, ARRAY_COMPRESS_WEIGHTS: 65536, ARRAY_COMPRESS_INDEX: 131072, ARRAY_FLAG_USE_2D_VERTICES: 262144, ARRAY_FLAG_USE_16_BIT_BONES: 524288, ARRAY_COMPRESS_DEFAULT: 97280 } }, 
		ArrayType: { value: {ARRAY_VERTEX: 0, ARRAY_NORMAL: 1, ARRAY_TANGENT: 2, ARRAY_COLOR: 3, ARRAY_TEX_UV: 4, ARRAY_TEX_UV2: 5, ARRAY_BONES: 6, ARRAY_WEIGHTS: 7, ARRAY_INDEX: 8, ARRAY_MAX: 9 } }, 
		BlendShapeMode: { value: {BLEND_SHAPE_MODE_NORMALIZED: 0, BLEND_SHAPE_MODE_RELATIVE: 1 } }, 
		CanvasLightMode: { value: {CANVAS_LIGHT_MODE_ADD: 0, CANVAS_LIGHT_MODE_SUB: 1, CANVAS_LIGHT_MODE_MIX: 2, CANVAS_LIGHT_MODE_MASK: 3 } }, 
		CanvasLightShadowFilter: { value: {CANVAS_LIGHT_FILTER_NONE: 0, CANVAS_LIGHT_FILTER_PCF3: 1, CANVAS_LIGHT_FILTER_PCF5: 2, CANVAS_LIGHT_FILTER_PCF7: 3, CANVAS_LIGHT_FILTER_PCF9: 4, CANVAS_LIGHT_FILTER_PCF13: 5 } }, 
		CanvasOccluderPolygonCullMode: { value: {CANVAS_OCCLUDER_POLYGON_CULL_DISABLED: 0, CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE: 1, CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE: 2 } }, 
		CubeMapSide: { value: {CUBEMAP_LEFT: 0, CUBEMAP_RIGHT: 1, CUBEMAP_BOTTOM: 2, CUBEMAP_TOP: 3, CUBEMAP_FRONT: 4, CUBEMAP_BACK: 5 } }, 
		EnvironmentBG: { value: {ENV_BG_CLEAR_COLOR: 0, ENV_BG_COLOR: 1, ENV_BG_SKY: 2, ENV_BG_COLOR_SKY: 3, ENV_BG_CANVAS: 4, ENV_BG_KEEP: 5, ENV_BG_MAX: 7 } }, 
		EnvironmentDOFBlurQuality: { value: {ENV_DOF_BLUR_QUALITY_LOW: 0, ENV_DOF_BLUR_QUALITY_MEDIUM: 1, ENV_DOF_BLUR_QUALITY_HIGH: 2 } }, 
		EnvironmentGlowBlendMode: { value: {GLOW_BLEND_MODE_ADDITIVE: 0, GLOW_BLEND_MODE_SCREEN: 1, GLOW_BLEND_MODE_SOFTLIGHT: 2, GLOW_BLEND_MODE_REPLACE: 3 } }, 
		EnvironmentSSAOBlur: { value: {ENV_SSAO_BLUR_DISABLED: 0, ENV_SSAO_BLUR_1x1: 1, ENV_SSAO_BLUR_2x2: 2, ENV_SSAO_BLUR_3x3: 3 } }, 
		EnvironmentSSAOQuality: { value: {ENV_SSAO_QUALITY_LOW: 0, ENV_SSAO_QUALITY_MEDIUM: 1, ENV_SSAO_QUALITY_HIGH: 2 } }, 
		EnvironmentToneMapper: { value: {ENV_TONE_MAPPER_LINEAR: 0, ENV_TONE_MAPPER_REINHARD: 1, ENV_TONE_MAPPER_FILMIC: 2, ENV_TONE_MAPPER_ACES: 3 } }, 
		Features: { value: {FEATURE_SHADERS: 0, FEATURE_MULTITHREADED: 1 } }, 
		InstanceFlags: { value: {INSTANCE_FLAG_USE_BAKED_LIGHT: 0, INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE: 1, INSTANCE_FLAG_MAX: 2 } }, 
		InstanceType: { value: {INSTANCE_NONE: 0, INSTANCE_MESH: 1, INSTANCE_MULTIMESH: 2, INSTANCE_IMMEDIATE: 3, INSTANCE_PARTICLES: 4, INSTANCE_LIGHT: 5, INSTANCE_REFLECTION_PROBE: 6, INSTANCE_GI_PROBE: 7, INSTANCE_LIGHTMAP_CAPTURE: 8, INSTANCE_MAX: 9, INSTANCE_GEOMETRY_MASK: 30 } }, 
		LightDirectionalShadowDepthRangeMode: { value: {LIGHT_DIRECTIONAL_SHADOW_DEPTH_RANGE_STABLE: 0, LIGHT_DIRECTIONAL_SHADOW_DEPTH_RANGE_OPTIMIZED: 1 } }, 
		LightDirectionalShadowMode: { value: {LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL: 0, LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS: 1, LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS: 2 } }, 
		LightOmniShadowDetail: { value: {LIGHT_OMNI_SHADOW_DETAIL_VERTICAL: 0, LIGHT_OMNI_SHADOW_DETAIL_HORIZONTAL: 1 } }, 
		LightOmniShadowMode: { value: {LIGHT_OMNI_SHADOW_DUAL_PARABOLOID: 0, LIGHT_OMNI_SHADOW_CUBE: 1 } }, 
		LightParam: { value: {LIGHT_PARAM_ENERGY: 0, LIGHT_PARAM_SPECULAR: 2, LIGHT_PARAM_RANGE: 3, LIGHT_PARAM_ATTENUATION: 4, LIGHT_PARAM_SPOT_ANGLE: 5, LIGHT_PARAM_SPOT_ATTENUATION: 6, LIGHT_PARAM_CONTACT_SHADOW_SIZE: 7, LIGHT_PARAM_SHADOW_MAX_DISTANCE: 8, LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET: 9, LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET: 10, LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET: 11, LIGHT_PARAM_SHADOW_NORMAL_BIAS: 12, LIGHT_PARAM_SHADOW_BIAS: 13, LIGHT_PARAM_SHADOW_BIAS_SPLIT_SCALE: 14, LIGHT_PARAM_MAX: 15 } }, 
		LightType: { value: {LIGHT_DIRECTIONAL: 0, LIGHT_OMNI: 1, LIGHT_SPOT: 2 } }, 
		MultimeshColorFormat: { value: {MULTIMESH_COLOR_NONE: 0, MULTIMESH_COLOR_8BIT: 1, MULTIMESH_COLOR_FLOAT: 2 } }, 
		MultimeshCustomDataFormat: { value: {MULTIMESH_CUSTOM_DATA_NONE: 0, MULTIMESH_CUSTOM_DATA_8BIT: 1, MULTIMESH_CUSTOM_DATA_FLOAT: 2 } }, 
		MultimeshTransformFormat: { value: {MULTIMESH_TRANSFORM_2D: 0, MULTIMESH_TRANSFORM_3D: 1 } }, 
		NinePatchAxisMode: { value: {NINE_PATCH_STRETCH: 0, NINE_PATCH_TILE: 1, NINE_PATCH_TILE_FIT: 2 } }, 
		ParticlesDrawOrder: { value: {PARTICLES_DRAW_ORDER_INDEX: 0, PARTICLES_DRAW_ORDER_LIFETIME: 1, PARTICLES_DRAW_ORDER_VIEW_DEPTH: 2 } }, 
		PrimitiveType: { value: {PRIMITIVE_POINTS: 0, PRIMITIVE_LINES: 1, PRIMITIVE_LINE_STRIP: 2, PRIMITIVE_LINE_LOOP: 3, PRIMITIVE_TRIANGLES: 4, PRIMITIVE_TRIANGLE_STRIP: 5, PRIMITIVE_TRIANGLE_FAN: 6, PRIMITIVE_MAX: 7 } }, 
		ReflectionProbeUpdateMode: { value: {REFLECTION_PROBE_UPDATE_ONCE: 0, REFLECTION_PROBE_UPDATE_ALWAYS: 1 } }, 
		RenderInfo: { value: {INFO_OBJECTS_IN_FRAME: 0, INFO_VERTICES_IN_FRAME: 1, INFO_MATERIAL_CHANGES_IN_FRAME: 2, INFO_SHADER_CHANGES_IN_FRAME: 3, INFO_SURFACE_CHANGES_IN_FRAME: 4, INFO_DRAW_CALLS_IN_FRAME: 5, INFO_2D_ITEMS_IN_FRAME: 6, INFO_2D_DRAW_CALLS_IN_FRAME: 7, INFO_USAGE_VIDEO_MEM_TOTAL: 8, INFO_VIDEO_MEM_USED: 9, INFO_TEXTURE_MEM_USED: 10, INFO_VERTEX_MEM_USED: 11 } }, 
		ScenarioDebugMode: { value: {SCENARIO_DEBUG_DISABLED: 0, SCENARIO_DEBUG_WIREFRAME: 1, SCENARIO_DEBUG_OVERDRAW: 2, SCENARIO_DEBUG_SHADELESS: 3 } }, 
		ShaderMode: { value: {SHADER_SPATIAL: 0, SHADER_CANVAS_ITEM: 1, SHADER_PARTICLES: 2, SHADER_MAX: 3 } }, 
		ShadowCastingSetting: { value: {SHADOW_CASTING_SETTING_OFF: 0, SHADOW_CASTING_SETTING_ON: 1, SHADOW_CASTING_SETTING_DOUBLE_SIDED: 2, SHADOW_CASTING_SETTING_SHADOWS_ONLY: 3 } }, 
		TextureFlags: { value: {TEXTURE_FLAG_MIPMAPS: 1, TEXTURE_FLAG_REPEAT: 2, TEXTURE_FLAG_FILTER: 4, TEXTURE_FLAG_ANISOTROPIC_FILTER: 8, TEXTURE_FLAG_CONVERT_TO_LINEAR: 16, TEXTURE_FLAG_MIRRORED_REPEAT: 32, TEXTURE_FLAG_USED_FOR_STREAMING: 2048, TEXTURE_FLAGS_DEFAULT: 7 } }, 
		TextureType: { value: {TEXTURE_TYPE_2D: 0, TEXTURE_TYPE_CUBEMAP: 2, TEXTURE_TYPE_2D_ARRAY: 3, TEXTURE_TYPE_3D: 4 } }, 
		ViewportClearMode: { value: {VIEWPORT_CLEAR_ALWAYS: 0, VIEWPORT_CLEAR_NEVER: 1, VIEWPORT_CLEAR_ONLY_NEXT_FRAME: 2 } }, 
		ViewportDebugDraw: { value: {VIEWPORT_DEBUG_DRAW_DISABLED: 0, VIEWPORT_DEBUG_DRAW_UNSHADED: 1, VIEWPORT_DEBUG_DRAW_OVERDRAW: 2, VIEWPORT_DEBUG_DRAW_WIREFRAME: 3 } }, 
		ViewportMSAA: { value: {VIEWPORT_MSAA_DISABLED: 0, VIEWPORT_MSAA_2X: 1, VIEWPORT_MSAA_4X: 2, VIEWPORT_MSAA_8X: 3, VIEWPORT_MSAA_16X: 4, VIEWPORT_MSAA_EXT_2X: 5, VIEWPORT_MSAA_EXT_4X: 6 } }, 
		ViewportRenderInfo: { value: {VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME: 0, VIEWPORT_RENDER_INFO_VERTICES_IN_FRAME: 1, VIEWPORT_RENDER_INFO_MATERIAL_CHANGES_IN_FRAME: 2, VIEWPORT_RENDER_INFO_SHADER_CHANGES_IN_FRAME: 3, VIEWPORT_RENDER_INFO_SURFACE_CHANGES_IN_FRAME: 4, VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME: 5, VIEWPORT_RENDER_INFO_2D_ITEMS_IN_FRAME: 6, VIEWPORT_RENDER_INFO_2D_DRAW_CALLS_IN_FRAME: 7, VIEWPORT_RENDER_INFO_MAX: 8 } }, 
		ViewportUpdateMode: { value: {VIEWPORT_UPDATE_DISABLED: 0, VIEWPORT_UPDATE_ONCE: 1, VIEWPORT_UPDATE_WHEN_VISIBLE: 2, VIEWPORT_UPDATE_ALWAYS: 3 } }, 
		ViewportUsage: { value: {VIEWPORT_USAGE_2D: 0, VIEWPORT_USAGE_2D_NO_SAMPLING: 1, VIEWPORT_USAGE_3D: 2, VIEWPORT_USAGE_3D_NO_EFFECTS: 3 } }
	});
	bind(godot.VisualShader, {
		Type: { value: {TYPE_VERTEX: 0, TYPE_FRAGMENT: 1, TYPE_LIGHT: 2, TYPE_MAX: 3 } }
	});
	bind(godot.VisualShaderNode, {
		PortType: { value: {PORT_TYPE_SCALAR: 0, PORT_TYPE_VECTOR: 1, PORT_TYPE_BOOLEAN: 2, PORT_TYPE_TRANSFORM: 3, PORT_TYPE_SAMPLER: 4, PORT_TYPE_MAX: 5 } }
	});
	bind(godot.VisualShaderNodeBooleanConstant, {});
	bind(godot.VisualShaderNodeBooleanUniform, {});
	bind(godot.VisualShaderNodeColorConstant, {});
	bind(godot.VisualShaderNodeColorFunc, {
		Function: { value: {FUNC_GRAYSCALE: 0, FUNC_SEPIA: 1 } }
	});
	bind(godot.VisualShaderNodeColorOp, {
		Operator: { value: {OP_SCREEN: 0, OP_DIFFERENCE: 1, OP_DARKEN: 2, OP_LIGHTEN: 3, OP_OVERLAY: 4, OP_DODGE: 5, OP_BURN: 6, OP_SOFT_LIGHT: 7, OP_HARD_LIGHT: 8 } }
	});
	bind(godot.VisualShaderNodeColorUniform, {});
	bind(godot.VisualShaderNodeCompare, {
		ComparisonType: { value: {CTYPE_SCALAR: 0, CTYPE_VECTOR: 1, CTYPE_BOOLEAN: 2, CTYPE_TRANSFORM: 3 } }, 
		Condition: { value: {COND_ALL: 0, COND_ANY: 1 } }, 
		Function: { value: {FUNC_EQUAL: 0, FUNC_NOT_EQUAL: 1, FUNC_GREATER_THAN: 2, FUNC_GREATER_THAN_EQUAL: 3, FUNC_LESS_THAN: 4, FUNC_LESS_THAN_EQUAL: 5 } }
	});
	bind(godot.VisualShaderNodeCubeMap, {
		Source: { value: {SOURCE_TEXTURE: 0, SOURCE_PORT: 1 } }, 
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMALMAP: 2 } }
	});
	bind(godot.VisualShaderNodeCubeMapUniform, {});
	bind(godot.VisualShaderNodeCustom, {});
	bind(godot.VisualShaderNodeDeterminant, {});
	bind(godot.VisualShaderNodeDotProduct, {});
	bind(godot.VisualShaderNodeExpression, {});
	bind(godot.VisualShaderNodeFaceForward, {});
	bind(godot.VisualShaderNodeFresnel, {});
	bind(godot.VisualShaderNodeGlobalExpression, {});
	bind(godot.VisualShaderNodeGroupBase, {});
	bind(godot.VisualShaderNodeIf, {});
	bind(godot.VisualShaderNodeInput, {});
	bind(godot.VisualShaderNodeIs, {
		Function: { value: {FUNC_IS_INF: 0, FUNC_IS_NAN: 1 } }
	});
	bind(godot.VisualShaderNodeOuterProduct, {});
	bind(godot.VisualShaderNodeOutput, {});
	bind(godot.VisualShaderNodeScalarClamp, {});
	bind(godot.VisualShaderNodeScalarConstant, {});
	bind(godot.VisualShaderNodeScalarDerivativeFunc, {
		Function: { value: {FUNC_SUM: 0, FUNC_X: 1, FUNC_Y: 2 } }
	});
	bind(godot.VisualShaderNodeScalarFunc, {
		Function: { value: {FUNC_SIN: 0, FUNC_COS: 1, FUNC_TAN: 2, FUNC_ASIN: 3, FUNC_ACOS: 4, FUNC_ATAN: 5, FUNC_SINH: 6, FUNC_COSH: 7, FUNC_TANH: 8, FUNC_LOG: 9, FUNC_EXP: 10, FUNC_SQRT: 11, FUNC_ABS: 12, FUNC_SIGN: 13, FUNC_FLOOR: 14, FUNC_ROUND: 15, FUNC_CEIL: 16, FUNC_FRAC: 17, FUNC_SATURATE: 18, FUNC_NEGATE: 19, FUNC_ACOSH: 20, FUNC_ASINH: 21, FUNC_ATANH: 22, FUNC_DEGREES: 23, FUNC_EXP2: 24, FUNC_INVERSE_SQRT: 25, FUNC_LOG2: 26, FUNC_RADIANS: 27, FUNC_RECIPROCAL: 28, FUNC_ROUNDEVEN: 29, FUNC_TRUNC: 30, FUNC_ONEMINUS: 31 } }
	});
	bind(godot.VisualShaderNodeScalarInterp, {});
	bind(godot.VisualShaderNodeScalarOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_POW: 5, OP_MAX: 6, OP_MIN: 7, OP_ATAN2: 8, OP_STEP: 9 } }
	});
	bind(godot.VisualShaderNodeScalarSmoothStep, {});
	bind(godot.VisualShaderNodeScalarSwitch, {});
	bind(godot.VisualShaderNodeScalarUniform, {});
	bind(godot.VisualShaderNodeSwitch, {});
	bind(godot.VisualShaderNodeTexture, {
		Source: { value: {SOURCE_TEXTURE: 0, SOURCE_SCREEN: 1, SOURCE_2D_TEXTURE: 2, SOURCE_2D_NORMAL: 3, SOURCE_DEPTH: 4, SOURCE_PORT: 5 } }, 
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMALMAP: 2 } }
	});
	bind(godot.VisualShaderNodeTextureUniform, {
		ColorDefault: { value: {COLOR_DEFAULT_WHITE: 0, COLOR_DEFAULT_BLACK: 1 } }, 
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMALMAP: 2, TYPE_ANISO: 3 } }
	});
	bind(godot.VisualShaderNodeTextureUniformTriplanar, {});
	bind(godot.VisualShaderNodeTransformCompose, {});
	bind(godot.VisualShaderNodeTransformConstant, {});
	bind(godot.VisualShaderNodeTransformDecompose, {});
	bind(godot.VisualShaderNodeTransformFunc, {
		Function: { value: {FUNC_INVERSE: 0, FUNC_TRANSPOSE: 1 } }
	});
	bind(godot.VisualShaderNodeTransformMult, {
		Operator: { value: {OP_AxB: 0, OP_BxA: 1, OP_AxB_COMP: 2, OP_BxA_COMP: 3 } }
	});
	bind(godot.VisualShaderNodeTransformUniform, {});
	bind(godot.VisualShaderNodeTransformVecMult, {
		Operator: { value: {OP_AxB: 0, OP_BxA: 1, OP_3x3_AxB: 2, OP_3x3_BxA: 3 } }
	});
	bind(godot.VisualShaderNodeUniform, {});
	bind(godot.VisualShaderNodeVec3Constant, {});
	bind(godot.VisualShaderNodeVec3Uniform, {});
	bind(godot.VisualShaderNodeVectorClamp, {});
	bind(godot.VisualShaderNodeVectorCompose, {});
	bind(godot.VisualShaderNodeVectorDecompose, {});
	bind(godot.VisualShaderNodeVectorDerivativeFunc, {
		Function: { value: {FUNC_SUM: 0, FUNC_X: 1, FUNC_Y: 2 } }
	});
	bind(godot.VisualShaderNodeVectorDistance, {});
	bind(godot.VisualShaderNodeVectorFunc, {
		Function: { value: {FUNC_NORMALIZE: 0, FUNC_SATURATE: 1, FUNC_NEGATE: 2, FUNC_RECIPROCAL: 3, FUNC_RGB2HSV: 4, FUNC_HSV2RGB: 5, FUNC_ABS: 6, FUNC_ACOS: 7, FUNC_ACOSH: 8, FUNC_ASIN: 9, FUNC_ASINH: 10, FUNC_ATAN: 11, FUNC_ATANH: 12, FUNC_CEIL: 13, FUNC_COS: 14, FUNC_COSH: 15, FUNC_DEGREES: 16, FUNC_EXP: 17, FUNC_EXP2: 18, FUNC_FLOOR: 19, FUNC_FRAC: 20, FUNC_INVERSE_SQRT: 21, FUNC_LOG: 22, FUNC_LOG2: 23, FUNC_RADIANS: 24, FUNC_ROUND: 25, FUNC_ROUNDEVEN: 26, FUNC_SIGN: 27, FUNC_SIN: 28, FUNC_SINH: 29, FUNC_SQRT: 30, FUNC_TAN: 31, FUNC_TANH: 32, FUNC_TRUNC: 33, FUNC_ONEMINUS: 34 } }
	});
	bind(godot.VisualShaderNodeVectorInterp, {});
	bind(godot.VisualShaderNodeVectorLen, {});
	bind(godot.VisualShaderNodeVectorOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_POW: 5, OP_MAX: 6, OP_MIN: 7, OP_CROSS: 8, OP_ATAN2: 9, OP_REFLECT: 10, OP_STEP: 11 } }
	});
	bind(godot.VisualShaderNodeVectorRefract, {});
	bind(godot.VisualShaderNodeVectorScalarMix, {});
	bind(godot.VisualShaderNodeVectorScalarSmoothStep, {});
	bind(godot.VisualShaderNodeVectorScalarStep, {});
	bind(godot.VisualShaderNodeVectorSmoothStep, {});
	bind(godot.WeakRef, {});
	bind(godot.WebRTCDataChannel, {
		ChannelState: { value: {STATE_CONNECTING: 0, STATE_OPEN: 1, STATE_CLOSING: 2, STATE_CLOSED: 3 } }, 
		WriteMode: { value: {WRITE_MODE_TEXT: 0, WRITE_MODE_BINARY: 1 } }
	});
	bind(godot.WebRTCDataChannelGDNative, {});
	bind(godot.WebRTCMultiplayer, {});
	bind(godot.WebRTCPeerConnection, {
		ConnectionState: { value: {STATE_NEW: 0, STATE_CONNECTING: 1, STATE_CONNECTED: 2, STATE_DISCONNECTED: 3, STATE_FAILED: 4, STATE_CLOSED: 5 } }
	});
	bind(godot.WebRTCPeerConnectionGDNative, {});
	bind(godot.WebSocketClient, {});
	bind(godot.WebSocketMultiplayerPeer, {});
	bind(godot.WebSocketPeer, {
		WriteMode: { value: {WRITE_MODE_TEXT: 0, WRITE_MODE_BINARY: 1 } }
	});
	bind(godot.WebSocketServer, {});
	bind(godot.WindowDialog, {});
	bind(godot.World, {});
	bind(godot.World2D, {});
	bind(godot.WorldEnvironment, {});
	bind(godot.X509Certificate, {});
	bind(godot.XMLParser, {
		NodeType: { value: {NODE_NONE: 0, NODE_ELEMENT: 1, NODE_ELEMENT_END: 2, NODE_TEXT: 3, NODE_COMMENT: 4, NODE_CDATA: 5, NODE_UNKNOWN: 6 } }
	});
	bind(godot.YSort, {});
	bind(godot, {
		ButtonList: { value: {BUTTON_LEFT: 1, BUTTON_RIGHT: 2, BUTTON_MIDDLE: 3, BUTTON_XBUTTON1: 8, BUTTON_XBUTTON2: 9, BUTTON_WHEEL_UP: 4, BUTTON_WHEEL_DOWN: 5, BUTTON_WHEEL_LEFT: 6, BUTTON_WHEEL_RIGHT: 7, BUTTON_MASK_LEFT: 1, BUTTON_MASK_RIGHT: 2, BUTTON_MASK_MIDDLE: 4, BUTTON_MASK_XBUTTON1: 128, BUTTON_MASK_XBUTTON2: 256 } }, 
		Corner: { value: {CORNER_TOP_LEFT: 0, CORNER_TOP_RIGHT: 1, CORNER_BOTTOM_RIGHT: 2, CORNER_BOTTOM_LEFT: 3 } }, 
		Error: { value: {OK: 0, FAILED: 1, ERR_UNAVAILABLE: 2, ERR_UNCONFIGURED: 3, ERR_UNAUTHORIZED: 4, ERR_PARAMETER_RANGE_ERROR: 5, ERR_OUT_OF_MEMORY: 6, ERR_FILE_NOT_FOUND: 7, ERR_FILE_BAD_DRIVE: 8, ERR_FILE_BAD_PATH: 9, ERR_FILE_NO_PERMISSION: 10, ERR_FILE_ALREADY_IN_USE: 11, ERR_FILE_CANT_OPEN: 12, ERR_FILE_CANT_WRITE: 13, ERR_FILE_CANT_READ: 14, ERR_FILE_UNRECOGNIZED: 15, ERR_FILE_CORRUPT: 16, ERR_FILE_MISSING_DEPENDENCIES: 17, ERR_FILE_EOF: 18, ERR_CANT_OPEN: 19, ERR_CANT_CREATE: 20, ERR_QUERY_FAILED: 21, ERR_ALREADY_IN_USE: 22, ERR_LOCKED: 23, ERR_TIMEOUT: 24, ERR_CANT_CONNECT: 25, ERR_CANT_RESOLVE: 26, ERR_CONNECTION_ERROR: 27, ERR_CANT_ACQUIRE_RESOURCE: 28, ERR_CANT_FORK: 29, ERR_INVALID_DATA: 30, ERR_INVALID_PARAMETER: 31, ERR_ALREADY_EXISTS: 32, ERR_DOES_NOT_EXIST: 33, ERR_DATABASE_CANT_READ: 34, ERR_DATABASE_CANT_WRITE: 35, ERR_COMPILATION_FAILED: 36, ERR_METHOD_NOT_FOUND: 37, ERR_LINK_FAILED: 38, ERR_SCRIPT_FAILED: 39, ERR_CYCLIC_LINK: 40, ERR_INVALID_DECLARATION: 41, ERR_DUPLICATE_SYMBOL: 42, ERR_PARSE_ERROR: 43, ERR_BUSY: 44, ERR_SKIP: 45, ERR_HELP: 46, ERR_BUG: 47, ERR_PRINTER_ON_FIRE: 48 } }, 
		HAlign: { value: {HALIGN_LEFT: 0, HALIGN_CENTER: 1, HALIGN_RIGHT: 2 } }, 
		JoystickList: { value: {JOY_INVALID_OPTION: -1, JOY_BUTTON_0: 0, JOY_BUTTON_1: 1, JOY_BUTTON_2: 2, JOY_BUTTON_3: 3, JOY_BUTTON_4: 4, JOY_BUTTON_5: 5, JOY_BUTTON_6: 6, JOY_BUTTON_7: 7, JOY_BUTTON_8: 8, JOY_BUTTON_9: 9, JOY_BUTTON_10: 10, JOY_BUTTON_11: 11, JOY_BUTTON_12: 12, JOY_BUTTON_13: 13, JOY_BUTTON_14: 14, JOY_BUTTON_15: 15, JOY_BUTTON_MAX: 16, JOY_SONY_CIRCLE: 1, JOY_SONY_X: 0, JOY_SONY_SQUARE: 2, JOY_SONY_TRIANGLE: 3, JOY_XBOX_B: 1, JOY_XBOX_A: 0, JOY_XBOX_X: 2, JOY_XBOX_Y: 3, JOY_DS_A: 1, JOY_DS_B: 0, JOY_DS_X: 3, JOY_DS_Y: 2, JOY_VR_GRIP: 2, JOY_VR_PAD: 14, JOY_VR_TRIGGER: 15, JOY_OCULUS_AX: 7, JOY_OCULUS_BY: 1, JOY_OCULUS_MENU: 3, JOY_OPENVR_MENU: 1, JOY_SELECT: 10, JOY_START: 11, JOY_DPAD_UP: 12, JOY_DPAD_DOWN: 13, JOY_DPAD_LEFT: 14, JOY_DPAD_RIGHT: 15, JOY_L: 4, JOY_L2: 6, JOY_L3: 8, JOY_R: 5, JOY_R2: 7, JOY_R3: 9, JOY_AXIS_0: 0, JOY_AXIS_1: 1, JOY_AXIS_2: 2, JOY_AXIS_3: 3, JOY_AXIS_4: 4, JOY_AXIS_5: 5, JOY_AXIS_6: 6, JOY_AXIS_7: 7, JOY_AXIS_8: 8, JOY_AXIS_9: 9, JOY_AXIS_MAX: 10, JOY_ANALOG_LX: 0, JOY_ANALOG_LY: 1, JOY_ANALOG_RX: 2, JOY_ANALOG_RY: 3, JOY_ANALOG_L2: 6, JOY_ANALOG_R2: 7, JOY_VR_ANALOG_TRIGGER: 2, JOY_VR_ANALOG_GRIP: 4, JOY_OPENVR_TOUCHPADX: 0, JOY_OPENVR_TOUCHPADY: 1 } }, 
		KeyList: { value: {KEY_ESCAPE: 16777217, KEY_TAB: 16777218, KEY_BACKTAB: 16777219, KEY_BACKSPACE: 16777220, KEY_ENTER: 16777221, KEY_KP_ENTER: 16777222, KEY_INSERT: 16777223, KEY_DELETE: 16777224, KEY_PAUSE: 16777225, KEY_PRINT: 16777226, KEY_SYSREQ: 16777227, KEY_CLEAR: 16777228, KEY_HOME: 16777229, KEY_END: 16777230, KEY_LEFT: 16777231, KEY_UP: 16777232, KEY_RIGHT: 16777233, KEY_DOWN: 16777234, KEY_PAGEUP: 16777235, KEY_PAGEDOWN: 16777236, KEY_SHIFT: 16777237, KEY_CONTROL: 16777238, KEY_META: 16777239, KEY_ALT: 16777240, KEY_CAPSLOCK: 16777241, KEY_NUMLOCK: 16777242, KEY_SCROLLLOCK: 16777243, KEY_F1: 16777244, KEY_F2: 16777245, KEY_F3: 16777246, KEY_F4: 16777247, KEY_F5: 16777248, KEY_F6: 16777249, KEY_F7: 16777250, KEY_F8: 16777251, KEY_F9: 16777252, KEY_F10: 16777253, KEY_F11: 16777254, KEY_F12: 16777255, KEY_F13: 16777256, KEY_F14: 16777257, KEY_F15: 16777258, KEY_F16: 16777259, KEY_KP_MULTIPLY: 16777345, KEY_KP_DIVIDE: 16777346, KEY_KP_SUBTRACT: 16777347, KEY_KP_PERIOD: 16777348, KEY_KP_ADD: 16777349, KEY_KP_0: 16777350, KEY_KP_1: 16777351, KEY_KP_2: 16777352, KEY_KP_3: 16777353, KEY_KP_4: 16777354, KEY_KP_5: 16777355, KEY_KP_6: 16777356, KEY_KP_7: 16777357, KEY_KP_8: 16777358, KEY_KP_9: 16777359, KEY_SUPER_L: 16777260, KEY_SUPER_R: 16777261, KEY_MENU: 16777262, KEY_HYPER_L: 16777263, KEY_HYPER_R: 16777264, KEY_HELP: 16777265, KEY_DIRECTION_L: 16777266, KEY_DIRECTION_R: 16777267, KEY_BACK: 16777280, KEY_FORWARD: 16777281, KEY_STOP: 16777282, KEY_REFRESH: 16777283, KEY_VOLUMEDOWN: 16777284, KEY_VOLUMEMUTE: 16777285, KEY_VOLUMEUP: 16777286, KEY_BASSBOOST: 16777287, KEY_BASSUP: 16777288, KEY_BASSDOWN: 16777289, KEY_TREBLEUP: 16777290, KEY_TREBLEDOWN: 16777291, KEY_MEDIAPLAY: 16777292, KEY_MEDIASTOP: 16777293, KEY_MEDIAPREVIOUS: 16777294, KEY_MEDIANEXT: 16777295, KEY_MEDIARECORD: 16777296, KEY_HOMEPAGE: 16777297, KEY_FAVORITES: 16777298, KEY_SEARCH: 16777299, KEY_STANDBY: 16777300, KEY_OPENURL: 16777301, KEY_LAUNCHMAIL: 16777302, KEY_LAUNCHMEDIA: 16777303, KEY_LAUNCH0: 16777304, KEY_LAUNCH1: 16777305, KEY_LAUNCH2: 16777306, KEY_LAUNCH3: 16777307, KEY_LAUNCH4: 16777308, KEY_LAUNCH5: 16777309, KEY_LAUNCH6: 16777310, KEY_LAUNCH7: 16777311, KEY_LAUNCH8: 16777312, KEY_LAUNCH9: 16777313, KEY_LAUNCHA: 16777314, KEY_LAUNCHB: 16777315, KEY_LAUNCHC: 16777316, KEY_LAUNCHD: 16777317, KEY_LAUNCHE: 16777318, KEY_LAUNCHF: 16777319, KEY_UNKNOWN: 33554431, KEY_SPACE: 32, KEY_EXCLAM: 33, KEY_QUOTEDBL: 34, KEY_NUMBERSIGN: 35, KEY_DOLLAR: 36, KEY_PERCENT: 37, KEY_AMPERSAND: 38, KEY_APOSTROPHE: 39, KEY_PARENLEFT: 40, KEY_PARENRIGHT: 41, KEY_ASTERISK: 42, KEY_PLUS: 43, KEY_COMMA: 44, KEY_MINUS: 45, KEY_PERIOD: 46, KEY_SLASH: 47, KEY_0: 48, KEY_1: 49, KEY_2: 50, KEY_3: 51, KEY_4: 52, KEY_5: 53, KEY_6: 54, KEY_7: 55, KEY_8: 56, KEY_9: 57, KEY_COLON: 58, KEY_SEMICOLON: 59, KEY_LESS: 60, KEY_EQUAL: 61, KEY_GREATER: 62, KEY_QUESTION: 63, KEY_AT: 64, KEY_A: 65, KEY_B: 66, KEY_C: 67, KEY_D: 68, KEY_E: 69, KEY_F: 70, KEY_G: 71, KEY_H: 72, KEY_I: 73, KEY_J: 74, KEY_K: 75, KEY_L: 76, KEY_M: 77, KEY_N: 78, KEY_O: 79, KEY_P: 80, KEY_Q: 81, KEY_R: 82, KEY_S: 83, KEY_T: 84, KEY_U: 85, KEY_V: 86, KEY_W: 87, KEY_X: 88, KEY_Y: 89, KEY_Z: 90, KEY_BRACKETLEFT: 91, KEY_BACKSLASH: 92, KEY_BRACKETRIGHT: 93, KEY_ASCIICIRCUM: 94, KEY_UNDERSCORE: 95, KEY_QUOTELEFT: 96, KEY_BRACELEFT: 123, KEY_BAR: 124, KEY_BRACERIGHT: 125, KEY_ASCIITILDE: 126, KEY_NOBREAKSPACE: 160, KEY_EXCLAMDOWN: 161, KEY_CENT: 162, KEY_STERLING: 163, KEY_CURRENCY: 164, KEY_YEN: 165, KEY_BROKENBAR: 166, KEY_SECTION: 167, KEY_DIAERESIS: 168, KEY_COPYRIGHT: 169, KEY_ORDFEMININE: 170, KEY_GUILLEMOTLEFT: 171, KEY_NOTSIGN: 172, KEY_HYPHEN: 173, KEY_REGISTERED: 174, KEY_MACRON: 175, KEY_DEGREE: 176, KEY_PLUSMINUS: 177, KEY_TWOSUPERIOR: 178, KEY_THREESUPERIOR: 179, KEY_ACUTE: 180, KEY_MU: 181, KEY_PARAGRAPH: 182, KEY_PERIODCENTERED: 183, KEY_CEDILLA: 184, KEY_ONESUPERIOR: 185, KEY_MASCULINE: 186, KEY_GUILLEMOTRIGHT: 187, KEY_ONEQUARTER: 188, KEY_ONEHALF: 189, KEY_THREEQUARTERS: 190, KEY_QUESTIONDOWN: 191, KEY_AGRAVE: 192, KEY_AACUTE: 193, KEY_ACIRCUMFLEX: 194, KEY_ATILDE: 195, KEY_ADIAERESIS: 196, KEY_ARING: 197, KEY_AE: 198, KEY_CCEDILLA: 199, KEY_EGRAVE: 200, KEY_EACUTE: 201, KEY_ECIRCUMFLEX: 202, KEY_EDIAERESIS: 203, KEY_IGRAVE: 204, KEY_IACUTE: 205, KEY_ICIRCUMFLEX: 206, KEY_IDIAERESIS: 207, KEY_ETH: 208, KEY_NTILDE: 209, KEY_OGRAVE: 210, KEY_OACUTE: 211, KEY_OCIRCUMFLEX: 212, KEY_OTILDE: 213, KEY_ODIAERESIS: 214, KEY_MULTIPLY: 215, KEY_OOBLIQUE: 216, KEY_UGRAVE: 217, KEY_UACUTE: 218, KEY_UCIRCUMFLEX: 219, KEY_UDIAERESIS: 220, KEY_YACUTE: 221, KEY_THORN: 222, KEY_SSHARP: 223, KEY_DIVISION: 247, KEY_YDIAERESIS: 255 } }, 
		KeyModifierMask: { value: {KEY_CODE_MASK: 33554431, KEY_MODIFIER_MASK: -16777216, KEY_MASK_SHIFT: 33554432, KEY_MASK_ALT: 67108864, KEY_MASK_META: 134217728, KEY_MASK_CTRL: 268435456, KEY_MASK_CMD: 268435456, KEY_MASK_KPAD: 536870912, KEY_MASK_GROUP_SWITCH: 1073741824 } }, 
		Margin: { value: {MARGIN_LEFT: 0, MARGIN_TOP: 1, MARGIN_RIGHT: 2, MARGIN_BOTTOM: 3 } }, 
		MethodFlags: { value: {METHOD_FLAG_NORMAL: 1, METHOD_FLAG_EDITOR: 2, METHOD_FLAG_NOSCRIPT: 4, METHOD_FLAG_CONST: 8, METHOD_FLAG_REVERSE: 16, METHOD_FLAG_VIRTUAL: 32, METHOD_FLAG_FROM_SCRIPT: 64, METHOD_FLAGS_DEFAULT: 1 } }, 
		MidiMessageList: { value: {MIDI_MESSAGE_NOTE_OFF: 8, MIDI_MESSAGE_NOTE_ON: 9, MIDI_MESSAGE_AFTERTOUCH: 10, MIDI_MESSAGE_CONTROL_CHANGE: 11, MIDI_MESSAGE_PROGRAM_CHANGE: 12, MIDI_MESSAGE_CHANNEL_PRESSURE: 13, MIDI_MESSAGE_PITCH_BEND: 14 } }, 
		Orientation: { value: {VERTICAL: 1, HORIZONTAL: 0 } }, 
		PropertyHint: { value: {PROPERTY_HINT_NONE: 0, PROPERTY_HINT_RANGE: 1, PROPERTY_HINT_EXP_RANGE: 2, PROPERTY_HINT_ENUM: 3, PROPERTY_HINT_EXP_EASING: 4, PROPERTY_HINT_LENGTH: 5, PROPERTY_HINT_KEY_ACCEL: 7, PROPERTY_HINT_FLAGS: 8, PROPERTY_HINT_LAYERS_2D_RENDER: 9, PROPERTY_HINT_LAYERS_2D_PHYSICS: 10, PROPERTY_HINT_LAYERS_3D_RENDER: 11, PROPERTY_HINT_LAYERS_3D_PHYSICS: 12, PROPERTY_HINT_FILE: 13, PROPERTY_HINT_DIR: 14, PROPERTY_HINT_GLOBAL_FILE: 15, PROPERTY_HINT_GLOBAL_DIR: 16, PROPERTY_HINT_RESOURCE_TYPE: 17, PROPERTY_HINT_MULTILINE_TEXT: 18, PROPERTY_HINT_PLACEHOLDER_TEXT: 19, PROPERTY_HINT_COLOR_NO_ALPHA: 20, PROPERTY_HINT_IMAGE_COMPRESS_LOSSY: 21, PROPERTY_HINT_IMAGE_COMPRESS_LOSSLESS: 22 } }, 
		PropertyUsageFlags: { value: {PROPERTY_USAGE_STORAGE: 1, PROPERTY_USAGE_EDITOR: 2, PROPERTY_USAGE_NETWORK: 4, PROPERTY_USAGE_EDITOR_HELPER: 8, PROPERTY_USAGE_CHECKABLE: 16, PROPERTY_USAGE_CHECKED: 32, PROPERTY_USAGE_INTERNATIONALIZED: 64, PROPERTY_USAGE_GROUP: 128, PROPERTY_USAGE_CATEGORY: 256, PROPERTY_USAGE_NO_INSTANCE_STATE: 2048, PROPERTY_USAGE_RESTART_IF_CHANGED: 4096, PROPERTY_USAGE_SCRIPT_VARIABLE: 8192, PROPERTY_USAGE_DEFAULT: 7, PROPERTY_USAGE_DEFAULT_INTL: 71, PROPERTY_USAGE_NOEDITOR: 5 } }, 
		VAlign: { value: {VALIGN_TOP: 0, VALIGN_CENTER: 1, VALIGN_BOTTOM: 2 } }, 
		VariantOperator: { value: {OP_EQUAL: 0, OP_NOT_EQUAL: 1, OP_LESS: 2, OP_LESS_EQUAL: 3, OP_GREATER: 4, OP_GREATER_EQUAL: 5, OP_ADD: 6, OP_SUBTRACT: 7, OP_MULTIPLY: 8, OP_DIVIDE: 9, OP_NEGATE: 10, OP_POSITIVE: 11, OP_MODULE: 12, OP_STRING_CONCAT: 13, OP_SHIFT_LEFT: 14, OP_SHIFT_RIGHT: 15, OP_BIT_AND: 16, OP_BIT_OR: 17, OP_BIT_XOR: 18, OP_BIT_NEGATE: 19, OP_AND: 20, OP_OR: 21, OP_XOR: 22, OP_NOT: 23, OP_IN: 24, OP_MAX: 25 } }, 
		VariantType: { value: {TYPE_NIL: 0, TYPE_BOOL: 1, TYPE_INT: 2, TYPE_REAL: 3, TYPE_STRING: 4, TYPE_VECTOR2: 5, TYPE_RECT2: 6, TYPE_VECTOR3: 7, TYPE_TRANSFORM2D: 8, TYPE_PLANE: 9, TYPE_QUAT: 10, TYPE_AABB: 11, TYPE_BASIS: 12, TYPE_TRANSFORM: 13, TYPE_COLOR: 14, TYPE_NODE_PATH: 15, TYPE_RID: 16, TYPE_OBJECT: 17, TYPE_DICTIONARY: 18, TYPE_ARRAY: 19, TYPE_RAW_ARRAY: 20, TYPE_INT_ARRAY: 21, TYPE_REAL_ARRAY: 22, TYPE_STRING_ARRAY: 23, TYPE_VECTOR2_ARRAY: 24, TYPE_VECTOR3_ARRAY: 25, TYPE_COLOR_ARRAY: 26, TYPE_MAX: 27 } }
	});
}
export default class extends godot.Node {};
