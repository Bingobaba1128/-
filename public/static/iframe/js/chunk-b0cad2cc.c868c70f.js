(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0cad2cc"],{"134b":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"y",(function(){return r})),n.d(e,"g",(function(){return a})),n.d(e,"m",(function(){return o})),n.d(e,"j",(function(){return l})),n.d(e,"r",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"k",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return y})),n.d(e,"h",(function(){return b})),n.d(e,"u",(function(){return g})),n.d(e,"l",(function(){return v})),n.d(e,"i",(function(){return L})),n.d(e,"p",(function(){return I})),n.d(e,"q",(function(){return N})),n.d(e,"b",(function(){return q})),n.d(e,"n",(function(){return k})),n.d(e,"o",(function(){return O})),n.d(e,"v",(function(){return w})),n.d(e,"w",(function(){return $})),n.d(e,"x",(function(){return S}));var s=n("751a"),i=function(t){return Object(s["a"])({url:"/ERP/selectApplyContract",method:"post",data:t})},r=function(t){return Object(s["a"])({url:"/ERP/chakanStorage",method:"get",params:t})},a=function(t){return Object(s["a"])({url:"/ERP/selectByContractNo",method:"post",data:t})},o=function(t){return Object(s["a"])({url:"/ERP/getCloth",method:"get",params:t})},l=function(t){return Object(s["a"])({url:"/ERP/LoadGnagHao",method:"post",data:t})},c=function(t){return Object(s["a"])({url:"/ERP/addappleP",method:"post",data:t})},u=function(t){return Object(s["a"])({url:"/ERP/addapplyPs",method:"post",data:t})},p=function(t){return Object(s["a"])({url:"/ERP/selFk",method:"get",params:t})},f=function(t){return Object(s["a"])({url:"/ERP/delappleP",method:"post",data:t})},d=function(t){return Object(s["a"])({url:"/ERP/selappleP",method:"get",params:t})},h=function(t){return Object(s["a"])({url:"/ERP/beforeApply",method:"post",data:t})},m=function(t){return Object(s["a"])({url:"/ERP/editApplyP",method:"post",data:t})},y=function(t){return Object(s["a"])({url:"/ERP/editApplyPs",method:"post",data:t})},b=function(t){return Object(s["a"])({url:"/ERP/searchStorageOut",method:"post",headers:{"content-type":"application/json"},data:t})},g=function(t){return Object(s["a"])({url:"/ERP/searchStorageOut_d",method:"post",data:t})},v=function(t){return Object(s["a"])({url:"/ERP/BeforeStorageOut",method:"post",data:t})},L=function(t){return Object(s["a"])({url:"/ERP/selstorageInn",method:"get",params:t})},I=function(t){return Object(s["a"])({url:"/ERP/addstorageOut",method:"post",data:t})},N=function(t){return Object(s["a"])({url:"/ERP/addStorageOut_d",method:"post",data:t})},q=function(t){return Object(s["a"])({url:"/ERP/delStorageOut",method:"post",data:t})},k=function(t){return Object(s["a"])({url:"/ERP/selstorageOut",method:"get",params:t})},O=function(t){return Object(s["a"])({url:"/ERP/selstorageOutD",method:"get",params:t})},w=function(t){return Object(s["a"])({url:"/ERP/editstorageOutD",method:"post",data:t})},$=function(t){return Object(s["a"])({url:"/ERP/editstorageOutd",method:"post",data:t})},S=function(t){return Object(s["a"])({url:"/ERP/gangHaoJudge",method:"post",data:t})}},"4ab2":function(t,e,n){},5502:function(t,e,n){"use strict";var s=n("4ab2"),i=n.n(s);i.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("1d80"),i=n("5899"),r="["+i+"]",a=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),l=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5b91":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shipments_wrap"},[n("div",{staticClass:"box1"},[n("el-table",{staticStyle:{width:"100%",height:"300px"},attrs:{"highlight-current-row":"","max-height":"300","row-key":"id",border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"},data:t.constractList},on:{"row-click":t.detailClick}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{property:"contractNo",label:"合同编号",align:"center"}}),n("el-table-column",{attrs:{property:"customer",label:"客户",align:"center"}}),n("el-table-column",{attrs:{property:"signPlace",label:"地点",align:"center"}}),n("el-table-column",{attrs:{property:"saleStyle",label:"销售类型",align:"center"}}),n("el-table-column",{attrs:{property:"signDate",label:"签约日期",align:"center"}}),n("el-table-column",{attrs:{property:"contractBoby",label:"公司",width:"220",align:"center"}}),n("el-table-column",{attrs:{property:"classify",label:"布料",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("0"==e.row.classify?"牛仔布":"1"==e.row.classify?"染色布":"针织布"))]}}])}),n("el-table-column",{attrs:{property:"brand",label:"品牌",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{margin:"2px"},attrs:{type:"primary",size:"mini"},nativeOn:{click:function(n){return t.checkInventory(e.row)}}},[t._v("查看库存")])]}}])})],1)],1),n("div",{staticClass:"box2",staticStyle:{marginTop:"20px"}},[n("el-table",{staticStyle:{width:"100%",height:"300px"},attrs:{"highlight-current-row":"","max-height":"300","row-key":"id",border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"},data:t.applyList}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{property:"applyNo",label:"申请单号",align:"center"}}),n("el-table-column",{attrs:{property:"applyDate",label:"申请日期",align:"center"}}),n("el-table-column",{attrs:{property:"clothId",label:"布编",align:"center"}}),n("el-table-column",{attrs:{property:"quanity",label:"发货数量",align:"center"}}),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s("1"==e.row.state?"已审批":"待审批"))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"150px",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{margin:"2px"},attrs:{type:"success",size:"mini"},nativeOn:{click:function(n){return t.editorShippingRequestClick(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(n){return t.deleteShippingRequestClick(e.row)}}},[t._v("删除")])]}}])})],1)],1),n("el-dialog",{attrs:{title:"库存查看",visible:t.inventoryVisible,closeOnClickModal:t.closeOnClickModal,closeOnPressEscape:t.closeOnPressEscape,width:"80%"},on:{"update:visible":function(e){t.inventoryVisible=e}}},[n("el-table",{staticStyle:{width:"100%",height:"300px"},attrs:{border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"},"max-height":"300",data:t.checkInventoryList}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{property:"clothId",label:"布编",align:"center"}}),n("el-table-column",{attrs:{property:"contractQuanity",label:"合同数量",align:"center"}}),n("el-table-column",{attrs:{property:"ruKuQuanity",label:"累计入库数量",align:"center"}}),n("el-table-column",{attrs:{property:"applyQuanity",label:"累计申请数量",align:"center"}}),n("el-table-column",{attrs:{property:"deliverQuanity",label:"累计发货数量",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{margin:"2px"},attrs:{type:"primary",size:"mini",disabled:e.row.contractQuanity==e.row.applyQuanity||0==e.row.ruKuQuanity},nativeOn:{click:function(n){return t.applyGoodsClick(e.row)}}},[t._v("申请发货")]),n("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(n){return t.zDeleteClick(e.row)}}},[t._v("提交审批")])]}}])})],1)],1),n("el-dialog",{attrs:{title:t.titleType,visible:t.shippingRequestVisible,closeOnClickModal:t.closeOnClickModal,closeOnPressEscape:t.closeOnPressEscape,width:"80%"},on:{"update:visible":function(e){t.shippingRequestVisible=e},close:t.applyRequestClose}},[n("div",{staticClass:"apply_goods"},[n("div",{staticClass:"request_top"},[n("el-form",{ref:"requestInfoList",staticClass:"demo-requestInfoList form2",attrs:{model:t.requestInfoList,"label-width":"100px"}},[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"发货申请单"}},[n("el-input",{attrs:{placeholder:"自动生成",disabled:!0},model:{value:t.requestInfoList.applyNo,callback:function(e){t.$set(t.requestInfoList,"applyNo",e)},expression:"requestInfoList.applyNo"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"申请日期"}},[n("el-form-item",[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:t.requestInfoList.applyDate,callback:function(e){t.$set(t.requestInfoList,"applyDate",e)},expression:"requestInfoList.applyDate"}})],1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"是否含税"}},[n("el-input",{attrs:{placeholder:"自动生成",disabled:!0},model:{value:t.requestInfoList.fax,callback:function(e){t.$set(t.requestInfoList,"fax",e)},expression:"requestInfoList.fax"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"业务部门"}},[n("el-input",{attrs:{disabled:!0},model:{value:t.requestInfoList.dept,callback:function(e){t.$set(t.requestInfoList,"dept",e)},expression:"requestInfoList.dept"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"业务员"}},[n("el-select",{attrs:{disabled:!0},model:{value:t.requestInfoList.saleManName,callback:function(e){t.$set(t.requestInfoList,"saleManName",e)},expression:"requestInfoList.saleManName"}},[n("el-option",{attrs:{label:"牛仔布",value:""}})],1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"客户合同"}},[n("el-input",{attrs:{disabled:!0},model:{value:t.requestInfoList.contractNo,callback:function(e){t.$set(t.requestInfoList,"contractNo",e)},expression:"requestInfoList.contractNo"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"联系人"}},[n("el-input",{attrs:{disabled:!0},model:{value:t.requestInfoList.linkman,callback:function(e){t.$set(t.requestInfoList,"linkman",e)},expression:"requestInfoList.linkman"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"联系电话"}},[n("el-input",{attrs:{placeholder:"自动生成",disabled:!0},model:{value:t.requestInfoList.linktel,callback:function(e){t.$set(t.requestInfoList,"linktel",e)},expression:"requestInfoList.linktel"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"发货客户"}},[n("el-input",{model:{value:t.requestInfoList.deliveCustomer,callback:function(e){t.$set(t.requestInfoList,"deliveCustomer",e)},expression:"requestInfoList.deliveCustomer"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"香港OW"}},[n("el-input",{model:{value:t.requestInfoList.ow,callback:function(e){t.$set(t.requestInfoList,"ow",e)},expression:"requestInfoList.ow"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"送货地址"}},[n("el-input",{attrs:{type:"textarea",resize:"none"},model:{value:t.requestInfoList.address,callback:function(e){t.$set(t.requestInfoList,"address",e)},expression:"requestInfoList.address"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"是否要发票"}},[n("el-select",{model:{value:t.requestInfoList.fP,callback:function(e){t.$set(t.requestInfoList,"fP",e)},expression:"requestInfoList.fP"}},[n("el-option",{attrs:{label:"是",value:"1"}}),n("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{label:"信用证收益单位","label-width":"150"}},[n("el-input",{staticStyle:{width:"auto"},attrs:{disabled:!0},model:{value:t.requestInfoList.shouYiUnit,callback:function(e){t.$set(t.requestInfoList,"shouYiUnit",e)},expression:"requestInfoList.shouYiUnit"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{staticStyle:{marginRight:"10px"},attrs:{label:"付款单位"}},[n("el-input",{model:{value:t.requestInfoList.payUnit,callback:function(e){t.$set(t.requestInfoList,"payUnit",e)},expression:"requestInfoList.payUnit"}})],1)],1),n("el-col",{attrs:{span:5}},[[n("span",{staticStyle:{color:"red"}},[t._v("注意事项：付款单位必须填写全程，开票时按此单位、金额执行开票")])]],2),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",resize:"none"},model:{value:t.requestInfoList.remarks,callback:function(e){t.$set(t.requestInfoList,"remarks",e)},expression:"requestInfoList.remarks"}})],1)],1)],1)],1),n("div",{staticClass:"request_bottom"},[n("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":"","row-key":"id",border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"},data:t.contractBasicInfoList}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{property:"contractNo",label:"合同编号",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"clothId",label:"布编",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"quantity",label:"订单数量",align:"center",width:"120"}}),n("el-table-column",{attrs:{label:"缸号及分LOT说明",align:"center",width:"200"}},[n("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.contractDeliverList.remarks,callback:function(e){t.$set(t.contractDeliverList,"remarks",e)},expression:"contractDeliverList.remarks"}})],1),n("el-table-column",{attrs:{property:"",label:"发货数量",align:"center",width:"120"}},[[n("el-input",{attrs:{type:"number",min:"0"},on:{change:t.deliveryNum},model:{value:t.countNum,callback:function(e){t.countNum=e},expression:"countNum"}})]],2),n("el-table-column",{attrs:{property:"unitPrice",label:"发货单价",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"moneyStyle",label:"币种",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"exportRate",label:"出口汇率",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"noExportRate",label:"出口汇率",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"payTime",label:"发货日期",align:"center",width:"120"}}),n("el-table-column",{attrs:{property:"deliverStyle",label:"发货类型",align:"center",width:"120"}},[[n("el-select",{model:{value:t.contractDeliverList.deliverStyle,callback:function(e){t.$set(t.contractDeliverList,"deliverStyle",e)},expression:"contractDeliverList.deliverStyle"}},[n("el-option",{attrs:{label:"A",value:"1"}}),n("el-option",{attrs:{label:"B",value:"2"}})],1)]],2),n("el-table-column",{attrs:{property:"classify",label:"商品名称",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("0"==e.row.classify?"牛仔布":"1"==e.row.classify?"染色布":"针织布"))]}}])}),n("el-table-column",{attrs:{property:"classify",label:"商品类型",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("0"==e.row.classify?"牛仔布":"1"==e.row.classify?"染色布":"针织布"))]}}])}),n("el-table-column",{attrs:{property:"sec",label:"规格",align:"center",width:"120"}},[[n("el-input",{model:{value:t.contractDeliverList.sec,callback:function(e){t.$set(t.contractDeliverList,"sec",e)},expression:"contractDeliverList.sec"}})]],2),n("el-table-column",{attrs:{property:"fpUnit",label:"发票单位",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("码"==e.row.unit?"码":"米"==e.row.unit?"米":"KG"==e.row.unit?"KG":"件"))]}}])}),n("el-table-column",{attrs:{label:"发票备注",align:"center",width:"120"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.contractDeliverList.fpRemarks,callback:function(e){t.$set(t.contractDeliverList,"fpRemarks",e)},expression:"contractDeliverList.fpRemarks"}})],1)],1),n("div",{staticClass:"shipping_request_popover"},[n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},nativeOn:{click:function(e){return t.submitRequestForm("requestInfoList")}}},[t._v("提交")])],1)],1)])])],1)},i=[],r=(n("a9e3"),n("134b")),a=n("b383"),o=n.n(a),l={name:"fhsq",data:function(){return{id:"",titleType:"",value:"",getgangHaoClothId:"",selectClothId:"",selectContractNo:"",selectApplyNo:"",inventoryVisible:!1,closeOnClickModal:!1,closeOnPressEscape:!1,shippingRequestVisible:!1,constractList:[],applyList:[],checkInventoryList:[],requestInfoList:{},contractBasicInfoList:[],contractDeliverList:{},num1:"",countNum:"",contractQuanity:"",ruKuQuanity:"",applyQuanity:"",deliverQuanity:"",According:"",currentClassify:""}},methods:{LoadGnagHao:function(){var t=this,e={contractNo:this.selectContractNo,clothId:this.getgangHaoClothId};r["j"](o.a.stringify(e)).then((function(e){t.$set(t.contractDeliverList,"remarks",e.data)})).catch((function(t){console.log(t)}))},deliveryNum:function(t){Number(this.ruKuQuanity)>=Number(this.contractQuanity)?(this.num1=this.contractQuanity-this.applyQuanity,this.countNum=this.num1):Number(this.ruKuQuanity)>Number(this.applyQuanity)?this.num1=this.ruKuQuanity-this.applyQuanity:this.num1=0,Number(t)>Number(this.num1)?(this.countNum=this.num1,this.$message({message:"订单数量为"+this.num1,duration:2e3})):this.countNum=t},submitRequestForm:function(){var t=this;if("1"==this.According){this.requestInfoList=Object.assign(this.requestInfoList,{ow:this.requestInfoList.ow,payUnit:this.requestInfoList.payUnit,remarks:this.requestInfoList.remarks,fP:this.requestInfoList.fP});var e=this.requestInfoList;r["r"](e).then((function(e){t.successFormAfter(e.data)})).catch((function(t){console.log(t)}))}else{this.requestInfoList=Object.assign(this.requestInfoList,{ow:this.requestInfoList.ow,payUnit:this.requestInfoList.payUnit,remarks:this.requestInfoList.remarks,fP:this.requestInfoList.fP});var n=this.requestInfoList;r["s"](n).then((function(e){t.successFormAfter(t.selectApplyNo)})).catch((function(t){console.log(t)}))}},successFormAfter:function(t){var e=this;if("1"==this.According){var n=sessionStorage.getItem("id"),s=sessionStorage.getItem("name");this.$set(this.contractDeliverList,"applyNo",t);var i=this.contractBasicInfoList[0],a=i.clothId,o=i.unitPrice,l=i.payTime;i.classify,i.unit;this.$set(this.contractDeliverList,"orderNo","1"),this.$set(this.contractDeliverList,"state","0"),this.$set(this.contractDeliverList,"clothId",a),this.$set(this.contractDeliverList,"quanity",this.countNum),this.$set(this.contractDeliverList,"unit",o),this.$set(this.contractDeliverList,"deliverDate",l),this.$set(this.contractDeliverList,"personId",n),this.$set(this.contractDeliverList,"personName",s),"0"==this.classify?this.$set(this.contractDeliverList,"shopName","牛仔布"):"1"==this.classify?this.$set(this.contractDeliverList,"shopName","染色布"):this.$set(this.contractDeliverList,"shopName","针织布"),"码"==this.unit?this.$set(this.contractDeliverList,"fpUnit","码"):"米"==this.unit?this.$set(this.contractDeliverList,"fpUnit","米"):"KG"==this.unit?this.$set(this.contractDeliverList,"fpUnit","KG"):this.$set(this.contractDeliverList,"fpUnit","件");var c=this.contractDeliverList;r["a"](c).then((function(t){e.$message({message:t.msg,duration:2e3}),e.seeInventory(e.selectContractNo),e.shippingRequestVisible=!1,e.contractBasicInfoList=JSON.parse(JSON.stringify(e.defaultForm1)),e.contractDeliverList=JSON.parse(JSON.stringify(e.defaultForm2)),e.requestInfoList=JSON.parse(JSON.stringify(e.defaultForm3)),e.getContractApplyList(e.selectContractNo)})).catch((function(t){console.log(t)}))}else{var u=sessionStorage.getItem("id"),p=sessionStorage.getItem("name");this.$set(this.contractDeliverList,"applyNo",t);var f=this.contractBasicInfoList[0],d=f.clothId,h=f.unitPrice,m=f.payTime;f.classify,f.unit;this.$set(this.contractDeliverList,"orderNo","1"),this.$set(this.contractDeliverList,"state","0"),this.$set(this.contractDeliverList,"clothId",d),this.$set(this.contractDeliverList,"quanity",this.countNum),this.$set(this.contractDeliverList,"unit",h),this.$set(this.contractDeliverList,"deliverDate",m),this.$set(this.contractDeliverList,"personId",u),this.$set(this.contractDeliverList,"personName",p),"0"==this.classify?this.$set(this.contractDeliverList,"shopName","牛仔布"):"1"==this.classify?this.$set(this.contractDeliverList,"shopName","染色布"):this.$set(this.contractDeliverList,"shopName","针织布"),"码"==this.unit?this.$set(this.contractDeliverList,"fpUnit","码"):"米"==this.unit?this.$set(this.contractDeliverList,"fpUnit","米"):"KG"==this.unit?this.$set(this.contractDeliverList,"fpUnit","KG"):this.$set(this.contractDeliverList,"fpUnit","件");var y=this.contractDeliverList;r["t"](y).then((function(t){e.$message({message:t.msg,duration:2e3}),e.seeInventory(e.selectContractNo),e.shippingRequestVisible=!1,e.contractBasicInfoList=JSON.parse(JSON.stringify(e.defaultForm1)),e.contractDeliverList=JSON.parse(JSON.stringify(e.defaultForm2)),e.requestInfoList=JSON.parse(JSON.stringify(e.defaultForm3)),e.getContractApplyList(e.selectContractNo)})).catch((function(t){console.log(t)}))}},p:function(t){return t<10?"0"+t:t},applyRequestClose:function(){"1"==this.According?this.inventoryVisible=!0:this.shippingRequestVisible=!1},applyGoodsClick:function(t){var e=this;this.titleType="发货申请单新增",this.According="1",this.contractQuanity=t.contractQuanity,this.ruKuQuanity=t.ruKuQuanity,this.applyQuanity=t.applyQuanity,this.deliverQuanity=t.deliverQuanity,this.contractBasicInfoList=JSON.parse(JSON.stringify(this.defaultForm1)),this.countNum="",this.contractDeliverList=JSON.parse(JSON.stringify(this.defaultForm2)),this.requestInfoList=JSON.parse(JSON.stringify(this.defaultForm3)),this.inventoryVisible=!1,this.shippingRequestVisible=!0;var n={contractNo:t.contractNo};r["g"](o.a.stringify(n)).then((function(t){var n=t.data,s=n.contractNo,i=n.saleManId,r=n.departmentId,a=n.departmentName,o=n.linktel,l=n.linkman,c=n.deliverPlace,u=n.saleType,p=n.clientName,f=n.clientId,d=n.classify;e.currentClassify=d,e.$set(e.requestInfoList,"contractNo",s),e.$set(e.requestInfoList,"signer",i),e.$set(e.requestInfoList,"contractCustomer",a),e.$set(e.requestInfoList,"dept",r),e.$set(e.requestInfoList,"linkman",l),e.$set(e.requestInfoList,"linktel",o),e.$set(e.requestInfoList,"address",c),e.$set(e.requestInfoList,"deliveCustomer",p),e.$set(e.requestInfoList,"contractCustomer",f),e.$set(e.requestInfoList,"approveStyle",u),(u="内销合同")?e.$set(e.requestInfoList,"fax","不含税"):e.$set(e.requestInfoList,"fax","含税");var h=new Date,m=h.getFullYear()+"-"+e.p(h.getMonth()+1)+"-"+e.p(h.getDate()),y=e.p(h.getHours())+":"+e.p(h.getMinutes())+":"+e.p(h.getSeconds());e.$set(e.requestInfoList,"applyDate",m+" "+y)})).catch((function(t){console.log(t)})),this.getgangHaoClothId="";var s={contractNo:t.contractNo,clothId:t.clothId};r["m"](s).then((function(t){e.getgangHaoClothId=t.data[0].clothId,e.contractBasicInfoList=t.data,e.$set(e.contractBasicInfoList[0],"classify",e.currentClassify),e.LoadGnagHao()})).catch((function(t){console.log(t)}))},checkInventory:function(t){this.inventoryVisible=!0,this.seeInventory(t.contractNo)},seeInventory:function(t){var e=this;this.selectContractNo=t;var n={contractNo:t};r["y"](n).then((function(t){e.checkInventoryList=t})).catch((function(t){console.log(t)}))},detailClick:function(t){this.selectContractNo=t.contractNo,this.getContractApplyList(t.contractNo)},getContractApplyList:function(t){var e=this;this.applyList=[];var n={contractNo:t};r["k"](n).then((function(t){e.applyList=t})).catch((function(t){console.log(t)}))},shippingRequestToViewInventory:function(t){var e=this,n={contractNo:t.contractNo,clothId:t.clothId};r["y"](n).then((function(t){var n=t[0],s=n.contractQuanity,i=n.ruKuQuanity,r=n.applyQuanity,a=n.deliverQuanity;e.contractQuanity=s,e.ruKuQuanity=i,e.applyQuanity=r,e.deliverQuanity=a})).catch((function(t){console.log(t)}))},editorBeforeVerify:function(t){var e=this;this.titleType="发货申请单编辑";var n={applyNo:t};r["d"](n).then((function(t){(t.code="200")&&e.lookEditorDetaile()})).catch((function(t){console.log(t)}))},lookEditorDetaile:function(){var t=this,e={applyNo:this.selectApplyNo};r["e"](e).then((function(e){t.shippingRequestVisible=!0,t.requestInfoList=e.data[0];var n=e.data[0].applyS[0],s=n.quanity,i=n.fpUnit,r=n.fpRemarks,a=n.sec,o=n.remarks,l=n.deliverStyle;t.countNum=s,t.$set(t.contractDeliverList,"fpUnit",i),t.$set(t.contractDeliverList,"fpRemarks",r),t.$set(t.contractDeliverList,"sec",a),t.$set(t.contractDeliverList,"remarks",o),t.$set(t.contractDeliverList,"deliverStyle",l)})).catch((function(t){console.log(t)}));var n={contractNo:this.selectContractNo,clothId:this.selectClothId};r["m"](n).then((function(e){t.contractBasicInfoList=e.data})).catch((function(t){console.log(t)}))},editorShippingRequestClick:function(t){this.selectClothId=t.clothId,this.selectApplyNo=t.applyNo,this.According="2",this.shippingRequestToViewInventory(t),this.editorBeforeVerify(t.applyNo)},deleteShippingRequestClick:function(t){var e=this;this.$confirm("确认删除该条申请单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={applyNo:t.applyNo};r["c"](o.a.stringify(n)).then((function(t){(t.code="200")&&(e.getContractApplyList(e.selectContractNo),e.$message({message:"删除成功",duration:2e3}))})).catch((function(t){console.log(t)}))})).catch((function(){}))},completeApprovalContract:function(){var t=this,e=sessionStorage.getItem("id"),n={personId:e};r["f"](o.a.stringify(n)).then((function(e){200==e.code?t.constractList=e.data:t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)}))}},created:function(){this.defaultForm1=JSON.parse(JSON.stringify(this.contractBasicInfoList)),this.defaultForm2=JSON.parse(JSON.stringify(this.contractDeliverList)),this.defaultForm3=JSON.parse(JSON.stringify(this.requestInfoList)),this.completeApprovalContract()},mounted:function(){}},c=l,u=(n("5502"),n("2877")),p=Object(u["a"])(c,s,i,!1,null,"11ab44f6",null);e["default"]=p.exports},7156:function(t,e,n){var s=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,a;return i&&"function"==typeof(r=e.constructor)&&r!==n&&s(a=r.prototype)&&a!==n.prototype&&i(t,a),t}},a9e3:function(t,e,n){"use strict";var s=n("83ab"),i=n("da84"),r=n("94ca"),a=n("6eeb"),o=n("5135"),l=n("c6b6"),c=n("7156"),u=n("c04e"),p=n("d039"),f=n("7c73"),d=n("241c").f,h=n("06cf").f,m=n("9bf2").f,y=n("58a8").trim,b="Number",g=i[b],v=g.prototype,L=l(f(v))==b,I=function(t){var e,n,s,i,r,a,o,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=y(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+c}for(r=c.slice(2),a=r.length,o=0;o<a;o++)if(l=r.charCodeAt(o),l<48||l>i)return NaN;return parseInt(r,s)}return+c};if(r(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,q=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof q&&(L?p((function(){v.valueOf.call(n)})):l(n)!=b)?c(new g(I(e)),n,q):I(e)},k=s?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;k.length>O;O++)o(g,N=k[O])&&!o(q,N)&&m(q,N,h(g,N));q.prototype=v,v.constructor=q,a(i,b,q)}}}]);