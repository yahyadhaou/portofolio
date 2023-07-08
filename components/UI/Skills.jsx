import React from "react";
const Skills = () => {

  const skillsData = [
    {
      name: "React",
      img: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: " Next.JS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      style: "shadow-blue-500",
    },
    {
      name: "JavaScript",
      img: "https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667",
      style: "shadow-blue-500",    
    },
    {
      name: "TypeScript",
      img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254474/typescript-icon-icon-md.png",
      style: "shadow-blue-500",
    },
    // {
    //   name: "Redux",
    //   img: "https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667",
    // },
    {
      name: "ReactNative",
      img: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
   
      style: "shadow-blue-500",
     },
    {
      name: "Node.js",
      img: "https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format",
      style: "shadow-blue-500",
    },
    {
      name: "HTML",
      img: "https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "CSS",
      img: "https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    // {
    //   name: "SASS",
    //   img: "https://camo.githubusercontent.com/26901b819fb10ef4e2c652aa40e24775247664d84a7597bebb66898a24dddedd/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736173732f736173732d6f726967696e616c2e737667",
    // },
    {
      name: "Bootstrap",
      img: "https://camo.githubusercontent.com/c76217244e1b3700a87058abf858e20a313b06dfadd972121d0d42de5bd20fa5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626f6f7473747261702f626f6f7473747261702d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "TailwindCSS",
      img: "https://cdn.sanity.io/images/10ba2g2h/production/47a5513caffa39b3afa206afcab7f5e388c37c29-250x250.png?w=2000&fit=max&auto=format",
      style: "shadow-blue-500",
    },
    {
      name: "Material UI",
      img: "https://camo.githubusercontent.com/8fae16ce278f9fbb3f4c48dd32f32fa8507fed6c0004231fb2539d66bc933296/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6174657269616c75692f6d6174657269616c75692d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "Git",
      img: "https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "GitHub",
      img: "https://camo.githubusercontent.com/6c8e86dfc77346d4388b8e064db73017a210f18e2cd18e74779ea34f2d630f4a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769746875622f6769746875622d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "NPM",
      img: "https://camo.githubusercontent.com/adb5a4ad9ef6595b2588c371f02296da3cb3533f4a7387a19f0818501e75f2ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e706d2f6e706d2d6f726967696e616c2d776f72646d61726b2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "VS Code",
      img: "https://camo.githubusercontent.com/5fa137d222dde7b69acd22c6572a065ce3656e6ffa1f5e88c1b5c7a935af3cc6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667",
      style: "shadow-blue-500",
    },
    {
      name: "Vue.js",
      img: "https://cdn.sanity.io/images/10ba2g2h/production/c82cfb29dfa05aa4c8f4d0038576b5b4b3f2c57d-1200x1040.png?w=2000&fit=max&auto=format",
      style: "shadow-blue-500",
    },
    {
      name: "Mongodb",
      img: "https://www.svgrepo.com/show/331488/mongodb.svg",
      style: "shadow-blue-500",
    },
    {
      name: "MySQL",
      img: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    
      style: "shadow-blue-500",
    },
  ];
  

  return (
    <div style={{ background: "linear-gradient(to bottom, #1f2937, #000000)" }} className="w-full h-screen">
    <div style={{ maxWidth: "1580px" }} className="mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p style={{ fontSize: "2rem", fontWeight: "bold", borderBottom: "4px solid #718096", padding: "0.5rem 0" }} className="inline-block">
          Skills
        </p>
        <p style={{ paddingTop: "1.5rem" }}>These are the technologies I've worked with</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center", paddingTop: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
        {skillsData.map(({ img, name, style }, index) => (
          <div
            key={index}
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", transition: "transform 0.5s", padding: "8px", borderRadius: "4px" }}
            className={`box-container ${style}`}
          >
            <img src={img} alt="" style={{ width: "80px", margin: "0 auto" }} />
            <p style={{ marginTop: "1rem" }}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default Skills;
