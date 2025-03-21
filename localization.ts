export const localization = {
  fieldsList: {
    flatHierarchyBox: "選擇和重排列",
    hierarchyBox: "拖拽大小",
    filterBox: "刪除並重排報表篩選",
    rowBox: "刪除並重排行",
    columnBox: "刪除並重排列",
    measureBox: "刪除並重排值",
    values: "值",
    addCalculatedMeasure: "增加計算值",
    expandAll: "展開所有",
    collapseAll: "折疊所有",
    formulasGroupName: "計算後的值",
    allFields: "所有欄位",
    rows: "行",
    columns: "列",
    filters: "報表篩選",
    dropField: "從這裡移除欄位",
    title: "欄位",
    subtitle: "拖拽和移除欄位來重排"
  },
  filter: {
    all: "所有",
    multipleItems: "多項",
    selectAll: "選擇所有",
    selectAllResults: "選擇所有結果",
    top: "頂部",
    bottom: "底部",
    ascSort: "A-Z昇冪排序",
    descSort: "Z-A降冪排序",
    topX: "前10",
    clearTopX: "清除",
    measuresPrompt: "選擇值",
    search: "搜索",
    amountSelected: "{1}中已選擇{0}項",
    amountFound: "{1}中發現{0}項已選擇",
    sort: "排序:",
    addGroup: "增加組",
    groupName: "組1",
    ungroup: "取消組"
  },
  drillThrough: {
    title: "詳情",
    row: "行: <b>{0}</b>",
    column: "列: <b>{0}</b>",
    value: "{0}: <b>{1}</b>"
  },
  calculatedView: {
    title: "已計算值",
    measureBox: "拖拽值到公式",
    measureName: "值名稱",
    formula: "公式",
    formulaPrompt: "拖拽值並在此編輯公式",
    calculateIndividualValues: "計算自訂值",
    removeValue: "移除",
    removeValueTitle: "移除 {0}?",
    removeValueMessage: "您確定要移除該已計算值嗎?",
    header: "增加已計算值",
    allValues: "所有值"
  },
  grid: {
    total: "小計",
    totals: "合計",
    grandTotal: "總計",
    blankMember: "(空)",
    dateInvalidCaption: "無效日期",
    reportInformation: "報表資訊"
  },
  tooltips: {
    row: "行:",
    column: "列:",
    headerResize: "拖拽調整",
    headerFit: "按兩下調整",
    filterIcon: "按一下篩選",
    filtered: "已篩選",
    expandIcon: "按一下展開",
    collapseIcon: "按一下折疊",
    drillDown: "向下鑽取",
    drillUp: "向上鑽取",
    sortIcon: "按一下降冪",
    sortedDescIcon: "按一下昇冪",
    sortedAscIcon: "按一下降冪",
    close: "按一下關閉"
  },
  aggregations: {
    sum: {
      caption: "求和",
      totalCaption: "{0}求和",
      grandTotalCaption: "{0}求和總計"
    },
    count: {
      caption: "計數",
      totalCaption: "{0}計數",
      grandTotalCaption: "{0}計數總計"
    },
    distinctCount: {
      caption: "計數(去重)",
      totalCaption: "{0}計數(去重)",
      grandTotalCaption: "{0}計數(去重)總計"
    },
    difference: {
      caption: "差值",
      totalCaption: "{0}差值",
      grandTotalCaption: "{0}差值總計"
    },
    percentDifference: {
      caption: "%差值",
      totalCaption: "{0}%差值",
      grandTotalCaption: "{0}%差值總計"
    },
    average: {
      caption: "平均值",
      totalCaption: "{0}平均值",
      grandTotalCaption: "{0}平均值總計"
    },
    product: {
      caption: "乘積",
      totalCaption: "{0}乘積",
      grandTotalCaption: "{0}乘積總計"
    },
    min: {
      caption: "最小值",
      totalCaption: "{0}最小值",
      grandTotalCaption: "{0}最小值總計"
    },
    max: {
      caption: "最大值",
      totalCaption: "{0}最大值",
      grandTotalCaption: "{0}最大值總計"
    },
    percent: {
      caption: "總計(%)",
      totalCaption: "{0}總計(%)",
      grandTotalCaption: "{0}總計(%)和"
    },
    percentOfColumn: {
      caption: "列(%)",
      totalCaption: "{0}列(%)",
      grandTotalCaption: "{0}列(%)總計"
    },
    percentOfRow: {
      caption: "行(%)",
      totalCaption: "{0}行(%)",
      grandTotalCaption: "{0}行(%)總計"
    },
    index: {
      caption: "指數",
      totalCaption: "{0}指數",
      grandTotalCaption: "{0}指數總計"
    },
    none: {
      caption: "不計算"
    }
  },
  messages: {
    error: "錯誤!",
    warning: "警告!",
    limitation: "有限制!",
    browse: "流覽",
    confirmation: "確認",
    reportFileType: "Flexmonster報表檔",
    loading: "正在載入...",
    loadingConfiguration: "",
    loadingData: "正在載入資料...",
    waiting: "等待中請等待{0}秒.",
    progress: "{0}K",
    progressUnknown: "已載入{0}K",
    analyzing: "分析資料中...",
    analyzingProgress: "{0} records of {1} ({2}%)",
    analyzingRecords: "{0}% 記錄",
    saving: "保存中...",
    loadingDimensions: "維度載入中...",
    loadingHierarchies: "層級載入中...",
    loadingMeasures: "度量載入中...",
    loadingKPIs: "KPI載入中...",
    loadingMembers: "成員載入中...",
    loadingLevels: "等級載入中...",
    loadingProperties: "屬性載入中...",
    fullscreen: "在全螢幕模式下打開報表?",
    exportComplete: '匯出資料已創建,請按一下"保存"按鈕保存資料.',
    exportProgress: "匯出正在處理中...",
    exportError: "匯出失敗,發生意外錯誤.",
    generatingPDF: "正在生成PDF",
    pleaseWait: "請稍等.",
    pagesWereGenerated: "頁面已產生.",
    uploading: "上傳中...",
    cantSaveFile: "不能保存檔.",
    cantSaveToClipboard: "錯誤:無法寫入剪貼簿.",
    saveReportToFile:
      '報告已準備保存到文件,請按一下"保存"按鈕保存報表.',
    loadReportFromFile: "選擇報表檔載入.",
    inputNewName: "輸入新名稱",
    inputReportName: "輸入新報表名稱",
    invalidDataSource:
      "無效的資料來源或目錄.請檢查. <br/><br/><u><a href='https://www.flexmonster.com/doc/typical-errors/#invalid-datasource' target='_blank'>閱讀關於這個錯誤的更多資訊</a></u>",
    dataStreamError:
      "載入'{0}'時發生資料流程錯誤.<br/><br/><u><a href='https://www.flexmonster.com/doc/typical-errors/#stream-error' target='_blank'>閱讀關於這個錯誤的更多資訊</a></u>",
    unableToOpenFile:
      "不能打開檔:{0}.<br/><br/>似乎這個檔不存在或資源中缺少'Access-Control-Allow-Origin'請求頭.<br/><br/><u><a href='https://www.flexmonster.com/doc/typical-errors/#unable-to-open-file' target='_blank'>閱讀關於這個錯誤的更多資訊</a></u>",
    unableTwoFileBrowsingSessions: "流覽文件的面板已打開.",
    inappropriateFileFormat: "資料檔案格式不匹配.",
    invalidJSONdata: "JSON數據無效.",
    wrongFormulaFormat: "錯誤的公式格式,請檢查.",
    excelCsvChartsExportError: "圖表無法匯出到Microsoft Excel或CSV.",
    excelPdfExportLimitation:
      "當前版本無法匯出到Microsoft Excel或PDF.",
    excelExportLimitation: "當前版本無法匯出.",
    noDataAvailable: "資料來源為空,請檢查CSV檔.",
    saveDataToFile: '資料已準備保存到檔,請按一下"保存"按鈕保存檔.',
    dataWasUpdated: "資料來源已在伺服器上更新。要刷新報表嗎?",
    ocsvIncompatible:
      "不能讀取資料來源.似乎OCSV檔使用新版本壓縮過,請更正{0}或更新的版本的組件.",
    unknownError: "發生未知錯誤.",
    invalidReportFormat: "無效的報表格式或檔拒絕訪問.",
    csvHeaderParsingError: "CSV頁眉解析錯誤.",
    tooManyColumnsInClassicMode:
      "經典方式下列太多.請把視圖切換到簡潔方式.",
    cantExpand: "有些欄位無法展開.請縮小資料範圍.",
    cantExpandTitle: "資料集太大."
  },
  buttons: {
    ok: "好",
    apply: "套用",
    cancel: "取消",
    save: "保存",
    clear: "清除",
    select: "選擇",
    yes: "是",
    no: "否"
  },
  contextMenu: {
    clearSorting: "清除排序",
    collapse: "折疊",
    drillThrough: "鑽取",
    expand: "展開",
    openFilter: "打開篩選",
    sortColumnAsc: "列昇冪",
    sortColumnDesc: "列降冪",
    sortRowAsc: "行昇冪",
    sortRowDesc: "行降冪"
  },
  date: {
    year: "年",
    quarter: "季",
    month: "月",
    day: "天"
  },
  quarters: {
    q1: "一季度",
    q2: "二季度",
    q3: "三季度",
    q4: "四季度"
  },
  months: {
    january: "一月",
    february: "二月",
    march: "三月",
    april: "四月",
    may: "五月",
    june: "六月",
    july: "七月",
    august: "八月",
    september: "九月",
    october: "十月",
    november: "十一月",
    december: "十二月"
  },
  monthsShort: {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec"
  },
  weekdays: {
    first: "周日",
    second: "週一",
    third: "週二",
    fourth: "週三",
    fifth: "週四",
    sixth: "週五",
    seventh: "週六"
  },
  weekdaysShort: {
    first: "Sun",
    second: "Mon",
    third: "Tue",
    fourth: "Wed",
    fifth: "Thu",
    sixth: "Fri",
    seventh: "Sat"
  },
  toolbar: {
    connect: "連接",
    connect_local_csv: "連接本機CSV檔",
    connect_local_ocsv: "連接本機OCSV檔",
    connect_local_json: "連接本機JSON檔",
    connect_remote_csv: "連接遠端CSV檔",
    connect_remote_csv_mobile: "CSV",
    connect_remote_json: "連接遠端JSON檔",
    connect_remote_json_mobile: "JSON",
    open: "打開",
    local_report: "本機報表",
    remote_report: "遠端報表",
    remote_report_mobile: "報表",
    save: "保存",
    save_json: null,
    load_json: "JSON報表",
    grid: "網格",
    grid_flat: "扁平",
    grid_classic: "經典",
    grid_compact: "簡潔",
    format: "格式化",
    format_cells: "格式化儲存格",
    format_cells_mobile: "格式化",
    conditional_formatting: "條件格式化",
    conditional_formatting_mobile: "條件",
    options: "選項",
    fullscreen: "全螢幕顯示",
    minimize: "最小化",
    export: "匯出",
    export_print: "列印",
    export_html: "按HTML匯出",
    export_excel: "按Excel匯出",
    export_pdf: "按PDF匯出",
    fields: "欄位",
    ok: "好",
    apply: "應用",
    done: "完成",
    cancel: "取消",
    value: "值",
    delete: "刪除",
    if: "如果",
    then: "那麼",
    open_remote_csv: "打開遠端CSV文件",
    open_remote_json: "打開遠端JSON文件",
    csv: "CSV",
    open_remote_report: "打開遠端報表",
    choose_value: "選擇值",
    text_align: "文字居中",
    align_left: "居左",
    align_right: "居右",
    none: "不設置",
    space: "(空格)",
    thousand_separator: "千位分隔符號",
    decimal_separator: "小數分隔符號",
    decimal_places: "小數位數",
    currency_symbol: "貨幣符號",
    currency_align: "貨幣對齊",
    null_value: "空值",
    is_percent: "百分比格式",
    true_value: "是",
    false_value: "否",
    conditional: "條件",
    add_condition: "增加條件",
    less_than: "小於",
    less_than_or_equal: "小於等於",
    greater_than: "大於",
    greater_than_or_equal: "大於等於",
    equal_to: "等於",
    not_equal_to: "不等於",
    between: "介於兩者之間",
    is_empty: "空值",
    all_values: "所有值",
    and: "和",
    and_symbole: "&",
    cp_text: "文本",
    cp_highlight: "高亮",
    layout_options: "佈局項",
    layout: "佈局",
    compact_view: "簡潔方式",
    classic_view: "經典方式",
    flat_view: "扁平方式",
    grand_totals: "總計",
    grand_totals_off: "不顯示總計",
    grand_totals_on: "顯示總計",
    grand_totals_on_rows: "僅在行顯示總計",
    grand_totals_on_columns: "僅在列顯示總計",
    subtotals: "小計",
    subtotals_off: "不顯示小計",
    subtotals_on: "顯示小計",
    subtotals_on_rows: "僅在行顯示小計",
    subtotals_on_columns: "僅在列顯示小計",
    choose_page_orientation: "選擇頁面方向",
    landscape: "橫向",
    portrait: "縱向"
  }
};
