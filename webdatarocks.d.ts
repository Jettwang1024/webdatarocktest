declare module 'webdatarocks' {
    interface DataSource {
      dataSourceType?: string;
      filename?: string;
      data?: any[];
    }
  
    interface Report {
      dataSource: DataSource;
      slice?: any;
      localization?: any; // 添加 localization 属性
    }
  
    interface Params {
      container: string;
      toolbar?: boolean;
      report?: Report;
      localization?: any; // 添加 localization 属性
      reportcomplete?: () => void;
    }
  
    class WebDataRocks {
      constructor(params: Params);
      on(event: string, callback: () => void): void;
      off(event: string): void;
      highcharts?: {
        getData(
          options: { type: string },
          success: (data: any) => void,
          error: (data: any) => void
        ): void;
      };
    }
  
    export default WebDataRocks;
  }
  