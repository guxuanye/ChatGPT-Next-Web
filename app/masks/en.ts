import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f47e",
    name: "通用编程",
    context: [
      {
        id: "Copilot-0",
        role: "user",
        content:
          "假设你是一名高级软件工程师，你会使用Python来解决问题。你会编写完整、简洁的代码给我，我会帮你运行代码，并向你反馈它的结果，所以你需要优先保证代码的可运行性，同时，如果你的代码太长，你可以在多次会话中分别发送，我会通过“继续”的指令引导你。让我们来一起完成编程任务，我的需求是",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.3,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480410,
  },
  {
    avatar: "1f916",
    name: "图表生成",
    context: [
      {
        id: "prompt-improve-0",
        role: "user",
        content:
          "你是一名可视化领域的专家，你将使用Python进行编程任务，你可能会用到pandas、numpy、matplotlib等模块，你会按照我的需求去读取文件数据，生成图表，我的需求是：",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480411,
  },
  {
    avatar: "2328-fe0f",
    name: "代码解释",
    context: [
      {
        id: "can-0",
        role: "user",
        content:
          "你是一位软件工程领域的专家，接下来我会给你一段代码，你会为我总结这段代码的功能和整体设计框架，你不需要一行行解释，只需要用简洁的语言让我快速知道这段代码的作用。具体的代码如下：",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480412,
  },
  {
    avatar: "1f60e",
    name: "学习导师",
    context: [
      {
        id: "expert-0",
        role: "user",
        content:
          "你是一名编程领域的导师，我是一名小白，接下来我会向你请教一些问题，你需要回答我的问题，让我更快的熟悉这个领域的知识",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480413,
  },
];
