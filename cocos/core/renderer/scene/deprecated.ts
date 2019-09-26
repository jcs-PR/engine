import { replaceProperty, removeProperty } from "../../utils";
import { RenderScene } from "./render-scene";
import { Layers } from "../../scene-graph";

replaceProperty(RenderScene.prototype, 'RenderScene.prototype', [
    {
        'name': 'raycastUI',
        'newName': 'raycastUI2D'
    },
    {
        'name': 'raycastUINode',
        'newName': 'raycastUI2DNode'
    },
    {
        'name': 'raycast',
        'newName': 'raycastModels'
    }
]);

const CameraVisFlags = {};

removeProperty(CameraVisFlags, 'CameraVisFlags', [
    {
        name: 'GENERAL',
    }
]);

replaceProperty(CameraVisFlags, 'CameraVisFlags', [
    {
        name: 'PROFILER',
        newName: 'PROFILER',
        target: Layers.BitMask,
        targetName: 'PROFILER'
    },
    {
        name: 'GIZMOS',
        newName: 'GIZMOS',
        target: Layers.BitMask,
        targetName: 'GIZMOS'
    },
    {
        name: 'EDITOR',
        newName: 'EDITOR',
        target: Layers.BitMask,
        targetName: 'EDITOR'
    },
    {
        name: 'UI',
        newName: 'UI',
        target: Layers.BitMask,
        targetName: 'UI_3D'
    },
    {
        name: 'UI2D',
        newName: 'UI2D',
        target: Layers.BitMask,
        targetName: 'UI_2D'
    },
]);

cc.CameraVisFlags = CameraVisFlags;

export { CameraVisFlags };

const VisibilityFlags = {};

removeProperty(VisibilityFlags, 'VisibilityFlags', [
    {
        name: 'GENERAL',
    }
]);

replaceProperty(VisibilityFlags, 'VisibilityFlags', [
    {
        name: 'ALWALS',
        newName: 'ALWALS',
        target: Layers.Enum,
        targetName: 'ALWALS'
    },
    {
        name: 'PROFILER',
        newName: 'PROFILER',
        target: Layers.Enum,
        targetName: 'PROFILER'
    },
    {
        name: 'GIZMOS',
        newName: 'GIZMOS',
        target: Layers.Enum,
        targetName: 'GIZMOS'
    },
    {
        name: 'EDITOR',
        newName: 'EDITOR',
        target: Layers.Enum,
        targetName: 'EDITOR'
    },
    {
        name: 'UI',
        newName: 'UI',
        target: Layers.Enum,
        targetName: 'UI_3D'
    },
    {
        name: 'UI2D',
        newName: 'UI2D',
        target: Layers.Enum,
        targetName: 'UI_2D'
    },
]);

cc.VisibilityFlags = VisibilityFlags;

export { VisibilityFlags };