import * as core from '@actions/core';

async function run() {
  try {
    // 获取输入参数
    const name = core.getInput('name', { required: true });
    const message = core.getInput('message', { required: false });
    
    // 执行逻辑
    core.info(`Hello, ${name}!`);
    if (message) {
      core.info(`Message: ${message}`);
    }
    
    // 设置输出
    core.setOutput('greeting', `Hello, ${name}!`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();