# RISC-V Security Atlas

面向已有 x86 / Arm 系统经验的工程师，提供一条以安全为主线、最终进入 CoVE / TEE 的 RISC-V 学习路径。

**在线阅读：** https://shundazhang.github.io/riscv-security-atlas/

内容覆盖 ISA/ABI、特权与地址转换、PMP/SBI/启动、H 扩展与 KVM、TEE 威胁模型、CoVE 架构和动手实验。文中的 CoVE 资料会标注草案或实现状态，建议阅读时再次核对上游版本。

## 本地预览

这是纯静态网站，无需构建或依赖安装。在仓库根目录启动任意静态文件服务器，例如 `python3 -m http.server 8000`，然后访问 `http://localhost:8000/`。

网站文件为 `index.html`、`style.css`、`app.js`。GitHub Pages 从 `main` 分支根目录发布。
