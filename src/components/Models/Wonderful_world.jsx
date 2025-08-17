import React from "react";
import { useGLTF } from "@react-three/drei";

export function Globe(props) {
  const group = React.useRef();
  const { nodes, materials } = useGLTF("/models/wonderful_world.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere001_0" scale={2.473}>
                <mesh
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere002_1" scale={2.444}>
                <mesh
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere003_2" scale={2.423}>
                <mesh
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere004_3" scale={2.395}>
                <mesh
                  geometry={nodes.Object_10.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere005_4" scale={2.367}>
                <mesh
                  geometry={nodes.Object_12.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere006_5" scale={2.344}>
                <mesh
                  geometry={nodes.Object_14.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere007_6" scale={2.316}>
                <mesh
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere008_7" scale={2.289}>
                <mesh
                  geometry={nodes.Object_18.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere009_8" scale={2.269}>
                <mesh
                  geometry={nodes.Object_20.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere0010_9" scale={2.243}>
                <mesh
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere011_10" scale={2.217}>
                <mesh
                  geometry={nodes.Object_24.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Sphere012_11" scale={22.532}>
                <mesh
                  geometry={nodes.Object_26.geometry}
                  material={materials.material_1}
                />
              </group>
              <group name="Circle_15" scale={3.736}>
                <group name="Sphere_12" scale={0.67}>
                  <mesh
                    geometry={nodes.Object_29.geometry}
                    material={materials.material}
                  />
                </group>
                <group name="x_13" scale={0.663}>
                  <mesh
                    geometry={nodes.Object_31.geometry}
                    material={materials.lights}
                  />
                </group>
                <group name="xxxx_14" scale={0.673}>
                  <mesh
                    geometry={nodes.Object_33.geometry}
                    material={materials.material_3}
                  />
                </group>
              </group>
              <group
                name="Sphere013_16"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.019, 0.03, 0.019]}
              >
                <mesh
                  geometry={nodes.Object_35.geometry}
                  material={materials.material_4}
                />
              </group>
              <group
                name="Sphere014_18"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.017, 0.028, 0.017]}
              >
                <mesh
                  geometry={nodes.Object_37.geometry}
                  material={materials.material_5}
                />
              </group>
              <group
                name="Sphere015_20"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.019, 0.03, 0.019]}
              >
                <mesh
                  geometry={nodes.Object_39.geometry}
                  material={materials.material_5}
                />
              </group>
              <group
                name="Sphere016_22"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.016, 0.026, 0.016]}
              >
                <mesh
                  geometry={nodes.Object_41.geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Circle005_24" scale={3.736} />
              <group
                name="Sphere017_25"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.017, 0.028, 0.017]}
              >
                <mesh
                  geometry={nodes.Object_44.geometry}
                  material={materials.material_5}
                />
              </group>
              <group
                name="Sphere018_27"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.017, 0.028, 0.017]}
              >
                <mesh
                  geometry={nodes.Object_46.geometry}
                  material={materials.material_4}
                />
              </group>
              <group
                name="Sphere019_29"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.019, 0.03, 0.019]}
              >
                <mesh
                  geometry={nodes.Object_48.geometry}
                  material={materials.material_4}
                />
              </group>
              <group
                name="Sphere020_31"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.016, 0.026, 0.016]}
              >
                <mesh
                  geometry={nodes.Object_50.geometry}
                  material={materials.material_5}
                />
              </group>
              <group name="Sphere021_33" scale={0}>
                <mesh
                  geometry={nodes.Object_52.geometry}
                  material={materials.CORE}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/wonderful_world.glb");
