这是一个鼠标特效的chrome扩展，可以自定义鼠标特效。

## Getting Started

```bash
pnpm dev
# or
npm run dev
```

打开浏览器并加载适当的开发版本。例如，如果您正在使用清单v3为chrome浏览器进行开发，请使用:` build/chrome-mv3-dev`。

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

## Submit to the webstores

部署Plasmo扩展最简单的方法是使用内置的[bpp](https://bpp . browser . market)GitHub操作。但是，在使用此操作之前，请确保构建您的扩展，并将第一个版本上传到商店以建立基本凭证。然后，只需按照[此设置说明](https://docs.plasmo.com/framework/workflows/submit)进行操作，您就可以开始自动提交了！
