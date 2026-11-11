// Native frustration is a separately approved exception; all other automatic collection stays off.
export function trackingConfig(nativeFrustration,addressUrl){
  if(!nativeFrustration)return false;
  return {
    attribution:false,pageViews:false,sessions:false,formInteractions:false,fileDownloads:false,
    pageUrlEnrichment:false,elementInteractions:false,webVitals:false,networkTracking:false,performanceTracking:false,
    frustrationInteractions:{
      pageUrlAllowlist:[addressUrl],
      rageClicks:{cssSelectorAllowlist:['#continue']},
      deadClicks:{cssSelectorAllowlist:['#continue']},
      errorClicks:false,thrashedCursor:false
    }
  };
}
export function expectedTracking(actual,nativeFrustration,addressUrl){
  if(!nativeFrustration)return actual===false;
  if(!actual||typeof actual!=='object')return false;
  const off=['attribution','pageViews','sessions','formInteractions','fileDownloads','pageUrlEnrichment','elementInteractions','webVitals','networkTracking','performanceTracking'];
  if(off.some(k=>actual[k]!==false))return false;
  const f=actual.frustrationInteractions;
  return !!f&&f.errorClicks===false&&f.thrashedCursor===false&&
    JSON.stringify(f.pageUrlAllowlist)===JSON.stringify([addressUrl])&&
    JSON.stringify(f.rageClicks?.cssSelectorAllowlist)===JSON.stringify(['#continue'])&&
    JSON.stringify(f.deadClicks?.cssSelectorAllowlist)===JSON.stringify(['#continue']);
}
