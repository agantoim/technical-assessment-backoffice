"use strict";(self.webpackChunkt_a_b=self.webpackChunkt_a_b||[]).push([[52],{7974:(Be,X,p)=>{p.d(X,{TU:()=>pe});var i=p(6895),b=p(4650),O=p(3238),c=p(4859),W=p(4385),j=p(8184),De=p(1842),Q=p(8605);p(3353),p(7340);const K={provide:new b.OlP("mat-tooltip-scroll-strategy"),deps:[j.aV],useFactory:function I(d){return()=>d.scrollStrategies.reposition({scrollThrottle:20})}};let f=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=b.oAB({type:d}),d.\u0275inj=b.cJS({providers:[K],imports:[De.rt,i.ez,j.U8,O.BQ,O.BQ,Q.ZD]}),d})();var T=p(7579);let te=(()=>{class d{constructor(){this.changes=new T.x,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(r,_,u)=>{if(0==u||0==_)return`0 of ${u}`;const S=r*_;return`${S+1} \u2013 ${S<(u=Math.max(u,0))?Math.min(S+_,u):S+_} of ${u}`}}}return d.\u0275fac=function(r){return new(r||d)},d.\u0275prov=b.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();const P={provide:te,deps:[[new b.FiY,new b.tp0,te]],useFactory:function Re(d){return d||new te}};let pe=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=b.oAB({type:d}),d.\u0275inj=b.cJS({providers:[P],imports:[i.ez,c.ot,W.LD,f,O.BQ]}),d})()},6308:(Be,X,p)=>{p.d(X,{JX:()=>N});var i=p(4650),b=p(3238),O=p(7579),W=(p(7340),p(6895));let I=(()=>{class v{constructor(){this.changes=new O.x}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275prov=i.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})();const J={provide:I,deps:[[new i.FiY,new i.tp0,I]],useFactory:function K(v){return v||new I}};let N=(()=>{class v{}return v.\u0275fac=function(f){return new(f||v)},v.\u0275mod=i.oAB({type:v}),v.\u0275inj=i.cJS({providers:[J],imports:[W.ez,b.BQ]}),v})()},5717:(Be,X,p)=>{p.d(X,{ev:()=>Fe,Dz:()=>Pe,w1:()=>Ie,ge:()=>Ae,fO:()=>Ee,XQ:()=>Ue,as:()=>Ge,Gk:()=>$e,nj:()=>je,BZ:()=>Ye,by:()=>ht,p0:()=>lt});var i=p(4650),b=p(445),O=p(1281),c=p(4033);function j(t){return t&&"function"==typeof t.connect&&!(t instanceof c.c)}class Q{applyChanges(o,e,s,n,a){o.forEachOperation((l,h,m)=>{let w,g;if(null==l.previousIndex){const D=s(l,h,m);w=e.createEmbeddedView(D.templateRef,D.context,D.index),g=1}else null==m?(e.remove(h),g=3):(w=e.get(h),e.move(w,m),g=2);a&&a({context:w?.context,operation:g,record:l})})}detach(){}}const U=new i.OlP("_ViewRepeater");var Se=p(3353),ae=p(8605),be=p(6895),x=p(7579),re=p(2076),I=p(1135),K=p(9751),J=p(576),$=p(9646),N=p(2722),v=p(5698);const M=[[["caption"]],[["colgroup"],["col"]]],f=["caption","colgroup, col"];function H(t){return class extends t{constructor(...o){super(...o),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(o){const e=this._sticky;this._sticky=(0,O.Ig)(o),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const o=this._hasStickyChanged;return this._hasStickyChanged=!1,o}resetStickyChanged(){this._hasStickyChanged=!1}}}const B=new i.OlP("CDK_TABLE");let z=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkCellDef",""]]}),t})(),V=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),ee=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class te{}const Re=H(te);let P=(()=>{class t extends Re{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const s=this._stickyEnd;this._stickyEnd=(0,O.Ig)(e),this._hasStickyChanged=s!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(B,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,s,n){if(1&e&&(i.Suo(n,z,5),i.Suo(n,V,5),i.Suo(n,ee,5)),2&e){let a;i.iGM(a=i.CRH())&&(s.cell=a.first),i.iGM(a=i.CRH())&&(s.headerCell=a.first),i.iGM(a=i.CRH())&&(s.footerCell=a.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[i._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),i.qOj]}),t})();class de{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}}let he=(()=>{class t extends de{constructor(e,s){super(e,s)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(P),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[i.qOj]}),t})(),ue=(()=>{class t extends de{constructor(e,s){if(super(e,s),1===e._table?._elementRef.nativeElement.nodeType){const n=e._table._elementRef.nativeElement.getAttribute("role");s.nativeElement.setAttribute("role","grid"===n||"treegrid"===n?"gridcell":"cell")}}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(P),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[i.qOj]}),t})();class xe{constructor(){this.tasks=[],this.endTasks=[]}}const fe=new i.OlP("_COALESCED_STYLE_SCHEDULER");let pe=(()=>{class t{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new x.x}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new xe,this._getScheduleObservable().pipe((0,N.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new xe;for(const s of e.tasks)s();for(const s of e.endTasks)s()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,re.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,v.q)(1))}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(i.R0b))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})(),y=(()=>{class t{constructor(e,s){this.template=e,this._differs=s}ngOnChanges(e){if(!this._columnsDiffer){const s=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(s).create(),this._columnsDiffer.diff(s)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof u?e.headerCell.template:this instanceof L?e.footerCell.template:e.cell.template}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc),i.Y36(i.ZZ4))},t.\u0275dir=i.lG2({type:t,features:[i.TTD]}),t})();class r extends y{}const _=H(r);let u=(()=>{class t extends _{constructor(e,s,n){super(e,s),this._table=n}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc),i.Y36(i.ZZ4),i.Y36(B,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[i.qOj,i.TTD]}),t})();class S extends y{}const A=H(S);let L=(()=>{class t extends A{constructor(e,s,n){super(e,s),this._table=n}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc),i.Y36(i.ZZ4),i.Y36(B,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[i.qOj,i.TTD]}),t})(),Y=(()=>{class t extends y{constructor(e,s,n){super(e,s),this._table=n}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc),i.Y36(i.ZZ4),i.Y36(B,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[i.qOj]}),t})(),E=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.mostRecentCellOutlet=null,t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b))},t.\u0275dir=i.lG2({type:t,selectors:[["","cdkCellOutlet",""]]}),t})(),ie=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&i.GkF(0,0)},dependencies:[E],encapsulation:2}),t})(),se=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&i.GkF(0,0)},dependencies:[E],encapsulation:2}),t})(),Z=(()=>{class t{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.\u0275dir=i.lG2({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const Ne=["top","bottom","left","right"];class Xe{constructor(o,e,s,n,a=!0,l=!0,h){this._isNativeHtmlTable=o,this._stickCellCss=e,this.direction=s,this._coalescedStyleScheduler=n,this._isBrowser=a,this._needsPositionStickyOnElement=l,this._positionListener=h,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){const s=[];for(const n of o)if(n.nodeType===n.ELEMENT_NODE){s.push(n);for(let a=0;a<n.children.length;a++)s.push(n.children[a])}this._coalescedStyleScheduler.schedule(()=>{for(const n of s)this._removeStickyStyle(n,e)})}updateStickyColumns(o,e,s,n=!0){if(!o.length||!this._isBrowser||!e.some(C=>C)&&!s.some(C=>C))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const a=o[0],l=a.children.length,h=this._getCellWidths(a,n),m=this._getStickyStartColumnPositions(h,e),w=this._getStickyEndColumnPositions(h,s),g=e.lastIndexOf(!0),D=s.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const C="rtl"===this.direction,G=C?"right":"left",ut=C?"left":"right";for(const ne of o)for(let k=0;k<l;k++){const Ze=ne.children[k];e[k]&&this._addStickyStyle(Ze,G,m[k],k===g),s[k]&&this._addStickyStyle(Ze,ut,w[k],k===D)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===g?[]:h.slice(0,g+1).map((ne,k)=>e[k]?ne:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===D?[]:h.slice(D).map((ne,k)=>s[k+D]?ne:null).reverse()}))})}stickRows(o,e,s){if(!this._isBrowser)return;const n="bottom"===s?o.slice().reverse():o,a="bottom"===s?e.slice().reverse():e,l=[],h=[],m=[];for(let g=0,D=0;g<n.length;g++){if(!a[g])continue;l[g]=D;const C=n[g];m[g]=this._isNativeHtmlTable?Array.from(C.children):[C];const G=C.getBoundingClientRect().height;D+=G,h[g]=G}const w=a.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let g=0;g<n.length;g++){if(!a[g])continue;const D=l[g],C=g===w;for(const G of m[g])this._addStickyStyle(G,s,D,C)}"top"===s?this._positionListener?.stickyHeaderRowsUpdated({sizes:h,offsets:l,elements:m}):this._positionListener?.stickyFooterRowsUpdated({sizes:h,offsets:l,elements:m})})}updateStickyFooterContainer(o,e){if(!this._isNativeHtmlTable)return;const s=o.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(n=>!n)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0,!1)})}_removeStickyStyle(o,e){for(const n of e)o.style[n]="",o.classList.remove(this._borderCellCss[n]);Ne.some(n=>-1===e.indexOf(n)&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex="",this._needsPositionStickyOnElement&&(o.style.position=""),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,s,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${s}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(o){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const n of Ne)o.style[n]&&(s+=e[n]);return s?`${s}`:""}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const s=[],n=o.children;for(let a=0;a<n.length;a++)s.push(n[a].getBoundingClientRect().width);return this._cachedCellWidths=s,s}_getStickyStartColumnPositions(o,e){const s=[];let n=0;for(let a=0;a<o.length;a++)e[a]&&(s[a]=n,n+=o[a]);return s}_getStickyEndColumnPositions(o,e){const s=[];let n=0;for(let a=o.length;a>0;a--)e[a]&&(s[a]=n,n+=o[a]);return s}}const Te=new i.OlP("CDK_SPL");let _e=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","rowOutlet",""]]}),t})(),me=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),ge=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),ye=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),ve=(()=>{class t{constructor(e,s,n,a,l,h,m,w,g,D,C,G){this._differs=e,this._changeDetectorRef=s,this._elementRef=n,this._dir=l,this._platform=m,this._viewRepeater=w,this._coalescedStyleScheduler=g,this._viewportRuler=D,this._stickyPositioningListener=C,this._ngZone=G,this._onDestroy=new x.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new i.vpe,this.viewChange=new I.X({start:0,end:Number.MAX_VALUE}),a||this._elementRef.nativeElement.setAttribute("role","table"),this._document=h,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,O.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,O.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,s)=>this.trackBy?this.trackBy(s.dataIndex,s.data):s),this._viewportRuler.change().pipe((0,N.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const s=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||s,this._forceRecalculateCellWidths=s,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),j(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const s=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,s,(n,a,l)=>this._getEmbeddedViewArgs(n.item,l),n=>n.item.data,n=>{1===n.operation&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{s.get(n.currentIndex).context.$implicit=n.item.data}),this._updateNoDataRow(),this._ngZone&&i.R0b.isInAngularZone()?this._ngZone.onStable.pipe((0,v.q)(1),(0,N.R)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),n=this._elementRef.nativeElement.querySelector("thead");n&&(n.style.display=e.length?"":"none");const a=this._headerRowDefs.map(l=>l.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,a,"top"),this._headerRowDefs.forEach(l=>l.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),n=this._elementRef.nativeElement.querySelector("tfoot");n&&(n.style.display=e.length?"":"none");const a=this._footerRowDefs.map(l=>l.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,a,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,a),this._footerRowDefs.forEach(l=>l.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),s=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...s,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,l)=>{this._addStickyColumnStyles([a],this._headerRowDefs[l])}),this._rowDefs.forEach(a=>{const l=[];for(let h=0;h<s.length;h++)this._renderRows[h].rowDef===a&&l.push(s[h]);this._addStickyColumnStyles(l,a)}),n.forEach((a,l)=>{this._addStickyColumnStyles([a],this._footerRowDefs[l])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}_getAllRenderRows(){const e=[],s=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let n=0;n<this._data.length;n++){let a=this._data[n];const l=this._getRenderRowsForData(a,n,s.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let h=0;h<l.length;h++){let m=l[h];const w=this._cachedRenderRowsMap.get(m.data);w.has(m.rowDef)?w.get(m.rowDef).push(m):w.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,s,n){return this._getRowDefs(e,s).map(l=>{const h=n&&n.has(l)?n.get(l):[];if(h.length){const m=h.shift();return m.dataIndex=s,m}return{data:e,rowDef:l,dataIndex:s}})}_cacheColumnDefs(){this._columnDefsByName.clear(),we(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(s=>{this._columnDefsByName.has(s.name),this._columnDefsByName.set(s.name,s)})}_cacheRowDefs(){this._headerRowDefs=we(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=we(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=we(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(s=>!s.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(l,h)=>l||!!h.getColumnsDiff(),s=this._rowDefs.reduce(e,!1);s&&this._forceRenderDataRows();const n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();const a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),s||n||a}_switchDataSource(e){this._data=[],j(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;j(this.dataSource)?e=this.dataSource.connect(this):function le(t){return!!t&&(t instanceof K.y||(0,J.m)(t.lift)&&(0,J.m)(t.subscribe))}(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,$.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,N.R)(this._onDestroy)).subscribe(s=>{this._data=s||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,s)=>this._renderRow(this._headerRowOutlet,e,s)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,s)=>this._renderRow(this._footerRowOutlet,e,s)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,s){const n=Array.from(s.columns||[]).map(h=>this._columnDefsByName.get(h)),a=n.map(h=>h.sticky),l=n.map(h=>h.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,l,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const s=[];for(let n=0;n<e.viewContainer.length;n++){const a=e.viewContainer.get(n);s.push(a.rootNodes[0])}return s}_getRowDefs(e,s){if(1==this._rowDefs.length)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(a=>!a.when||a.when(s,e));else{let a=this._rowDefs.find(l=>l.when&&l.when(s,e))||this._defaultRowDef;a&&n.push(a)}return n}_getEmbeddedViewArgs(e,s){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:s}}_renderRow(e,s,n,a={}){const l=e.viewContainer.createEmbeddedView(s.template,a,n);return this._renderCellTemplateForItem(s,a),l}_renderCellTemplateForItem(e,s){for(let n of this._getCellTemplates(e))E.mostRecentCellOutlet&&E.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,s);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let s=0,n=e.length;s<n;s++){const l=e.get(s).context;l.count=n,l.first=0===s,l.last=s===n-1,l.even=s%2==0,l.odd=!l.even,this.multiTemplateDataRows?(l.dataIndex=this._renderRows[s].dataIndex,l.renderIndex=s):l.index=this._renderRows[s].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,s=>{const n=this._columnDefsByName.get(s);return e.extractCellTemplate(n)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),s=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const n of s){const a=this._document.createElement(n.tag);a.setAttribute("role","rowgroup");for(const l of n.outlets)a.appendChild(l.elementRef.nativeElement);e.appendChild(a)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(s,n)=>s||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Xe(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,$.of)()).pipe((0,N.R)(this._onDestroy)).subscribe(s=>{this._stickyStyler.direction=s,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(s=>!s._table||s._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const s=0===this._rowOutlet.viewContainer.length;if(s===this._isShowingNoDataRow)return;const n=this._noDataRowOutlet.viewContainer;if(s){const a=n.createEmbeddedView(e.templateRef),l=a.rootNodes[0];1===a.rootNodes.length&&l?.nodeType===this._document.ELEMENT_NODE&&(l.setAttribute("role","row"),l.classList.add(e._contentClassName))}else n.clear();this._isShowingNoDataRow=s}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.ZZ4),i.Y36(i.sBO),i.Y36(i.SBq),i.$8M("role"),i.Y36(b.Is,8),i.Y36(be.K0),i.Y36(Se.t4),i.Y36(U),i.Y36(fe),i.Y36(ae.rL),i.Y36(Te,12),i.Y36(i.R0b,8))},t.\u0275cmp=i.Xpm({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,s,n){if(1&e&&(i.Suo(n,Z,5),i.Suo(n,P,5),i.Suo(n,Y,5),i.Suo(n,u,5),i.Suo(n,L,5)),2&e){let a;i.iGM(a=i.CRH())&&(s._noDataRow=a.first),i.iGM(a=i.CRH())&&(s._contentColumnDefs=a),i.iGM(a=i.CRH())&&(s._contentRowDefs=a),i.iGM(a=i.CRH())&&(s._contentHeaderRowDefs=a),i.iGM(a=i.CRH())&&(s._contentFooterRowDefs=a)}},viewQuery:function(e,s){if(1&e&&(i.Gf(_e,7),i.Gf(me,7),i.Gf(ge,7),i.Gf(ye,7)),2&e){let n;i.iGM(n=i.CRH())&&(s._rowOutlet=n.first),i.iGM(n=i.CRH())&&(s._headerRowOutlet=n.first),i.iGM(n=i.CRH())&&(s._footerRowOutlet=n.first),i.iGM(n=i.CRH())&&(s._noDataRowOutlet=n.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,s){2&e&&i.ekj("cdk-table-fixed-layout",s.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[i._Bn([{provide:B,useExisting:t},{provide:U,useClass:Q},{provide:fe,useClass:pe},{provide:Te,useValue:null}])],ngContentSelectors:f,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,s){1&e&&(i.F$t(M),i.Hsn(0),i.Hsn(1,1),i.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[_e,me,ge,ye],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})();function we(t,o){return t.concat(Array.from(o))}let Qe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[ae.Cl]}),t})();var ze=p(3238),Ve=p(6451),ke=p(9841),Oe=p(4004);const qe=[[["caption"]],[["colgroup"],["col"]]],Ke=["caption","colgroup, col"];let Ye=(()=>{class t extends ve{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(e,s){2&e&&i.ekj("mat-table-fixed-layout",s.fixedLayout)},exportAs:["matTable"],features:[i._Bn([{provide:U,useClass:Q},{provide:ve,useExisting:t},{provide:B,useExisting:t},{provide:fe,useClass:pe},{provide:Te,useValue:null}]),i.qOj],ngContentSelectors:Ke,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,s){1&e&&(i.F$t(qe),i.Hsn(0),i.Hsn(1,1),i.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[_e,me,ge,ye],styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})(),Pe=(()=>{class t extends z{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["","matCellDef",""]],features:[i._Bn([{provide:z,useExisting:t}]),i.qOj]}),t})(),Ee=(()=>{class t extends V{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["","matHeaderCellDef",""]],features:[i._Bn([{provide:V,useExisting:t}]),i.qOj]}),t})(),Ie=(()=>{class t extends P{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[i._Bn([{provide:P,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),i.qOj]}),t})(),Ae=(()=>{class t extends he{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[i.qOj]}),t})(),Fe=(()=>{class t extends ue{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[i.qOj]}),t})(),Ge=(()=>{class t extends u{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[i._Bn([{provide:u,useExisting:t}]),i.qOj]}),t})(),je=(()=>{class t extends Y{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[i._Bn([{provide:Y,useExisting:t}]),i.qOj]}),t})(),Ue=(()=>{class t extends ie{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[i._Bn([{provide:ie,useExisting:t}]),i.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&i.GkF(0,0)},dependencies:[E],encapsulation:2}),t})(),$e=(()=>{class t extends se{}return t.\u0275fac=function(){let o;return function(s){return(o||(o=i.n5z(t)))(s||t)}}(),t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[i._Bn([{provide:se,useExisting:t}]),i.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&i.GkF(0,0)},dependencies:[E],encapsulation:2}),t})(),lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[Qe,ze.BQ,ze.BQ]}),t})();class ht extends class dt extends class W{}{constructor(o=[]){super(),this._renderData=new I.X([]),this._filter=new I.X(""),this._internalPageChanges=new x.x,this._renderChangesSubscription=null,this.sortingDataAccessor=(e,s)=>{const n=e[s];if((0,O.t6)(n)){const a=Number(n);return a<9007199254740991?a:n}return n},this.sortData=(e,s)=>{const n=s.active,a=s.direction;return n&&""!=a?e.sort((l,h)=>{let m=this.sortingDataAccessor(l,n),w=this.sortingDataAccessor(h,n);const g=typeof m,D=typeof w;g!==D&&("number"===g&&(m+=""),"number"===D&&(w+=""));let C=0;return null!=m&&null!=w?m>w?C=1:m<w&&(C=-1):null!=m?C=1:null!=w&&(C=-1),C*("asc"==a?1:-1)}):e},this.filterPredicate=(e,s)=>{const n=Object.keys(e).reduce((l,h)=>l+e[h]+"\u25ec","").toLowerCase(),a=s.trim().toLowerCase();return-1!=n.indexOf(a)},this._data=new I.X(o),this._updateChangeSubscription()}get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_updateChangeSubscription(){const o=this._sort?(0,Ve.T)(this._sort.sortChange,this._sort.initialized):(0,$.of)(null),e=this._paginator?(0,Ve.T)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):(0,$.of)(null),n=(0,ke.a)([this._data,this._filter]).pipe((0,Oe.U)(([h])=>this._filterData(h))),a=(0,ke.a)([n,o]).pipe((0,Oe.U)(([h])=>this._orderData(h))),l=(0,ke.a)([a,e]).pipe((0,Oe.U)(([h])=>this._pageData(h)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=l.subscribe(h=>this._renderData.next(h))}_filterData(o){return this.filteredData=null==this.filter||""===this.filter?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;const e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{const e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){const s=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,s);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}}{}}}]);