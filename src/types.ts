export interface WxChannelShopPrinterOptions {
  url?: string;
}

/**
 * 通用
 */

export type RequestParams<T = unknown> = {
  command: string;
} & T;

export type RequestResult<T = unknown> = {
  command: string;
  requestID: string;
} & T;

/**
 * 环境信息
 */

export interface AppInfo {
  version: string;
}

/**
 * 打印
 */

export interface PrinterData {
  name: string;
  displayName: string;
  status: number;
}

export interface PrintOptions {
  version: string;
  taskList: Array<{
    printInfo: string;
    printNum: PrintNum;
  }>;
  printer: string;
}

export interface PrintTask {
  taskID: string;
  printInfo: string;
  printNum: PrintNum;
}

export interface PrintNum {
  curNum: number;
  sumNum: number;
}

export interface PrintTaskResult {
  taskID: string;
  success: boolean;
  failureReason: string;
}
