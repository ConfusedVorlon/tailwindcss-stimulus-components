!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("stimulus")):"function"==typeof define&&define.amd?define(["exports","stimulus"],e):e((t=t||self).TailwindcssStimulusComponents={},t.Stimulus)}(this,function(t,e){function s(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.initialize=function(){this.hide()},s.connect=function(){var t=this;setTimeout(function(){t.show()},200)},s.close=function(){var t=this;this.hide(),setTimeout(function(){t.element.remove()},1100)},s.show=function(){this.element.setAttribute("style","transition: 1s; transform:translate(0, 0);")},s.hide=function(){this.element.setAttribute("style","transition: 1s; transform:translate(400px, 0);")},e}(e.Controller),o=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.connect=function(){this.timeout=null,this.duration=this.data.get("duration")||1e3},s.save=function(){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.statusTarget.textContent="Saving...",Rails.fire(t.formTarget,"submit")},this.duration)},s.success=function(){this.setStatus("Saved!")},s.error=function(){this.setStatus("Unable to save!")},s.setStatus=function(t){var e=this;this.statusTarget.textContent=t,this.timeout=setTimeout(function(){e.statusTarget.textContent=""},2e3)},e}(e.Controller);o.targets=["form","status"];var r=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden",this.visibleClass=this.data.get("visibleClass")||null,this.invisibleClass=this.data.get("invisibleClass")||null,this.activeClass=this.data.get("activeClass")||null,this.enteringClass=this.data.get("enteringClass")||null,this.leavingClass=this.data.get("leavingClass")||null},s.toggle=function(){this.openValue=!this.openValue},s.openValueChanged=function(){this.openValue?this._show():this._hide()},s._show=function(t){var e=this;setTimeout(function(){e.menuTarget.classList.remove(e.toggleClass),e._enteringClassList[0].forEach(function(t){e.menuTarget.classList.add(t)}.bind(e)),e._activeClassList[0].forEach(function(t){e.activeTarget.classList.add(t)}),e._invisibleClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),e._visibleClassList[0].forEach(function(t){e.menuTarget.classList.add(t)}),setTimeout(function(){e._enteringClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)})}.bind(e),e.enterTimeout[0]),"function"==typeof t&&t()}.bind(this))},s._hide=function(t){var e=this;setTimeout(function(){e._invisibleClassList[0].forEach(function(t){return e.menuTarget.classList.add(t)}),e._visibleClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),e._activeClassList[0].forEach(function(t){return e.activeTarget.classList.remove(t)}),e._leavingClassList[0].forEach(function(t){return e.menuTarget.classList.add(t)}),setTimeout(function(){e._leavingClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),"function"==typeof t&&t(),e.menuTarget.classList.add(e.toggleClass)}.bind(e),e.leaveTimeout[0])}.bind(this))},s.hide=function(t){!1===this.element.contains(t.target)&&this.openValue&&(this.openValue=!1)},i(e,[{key:"activeTarget",get:function(){return this.data.has("activeTarget")?document.querySelector(this.data.get("activeTarget")):this.element}},{key:"_activeClassList",get:function(){return this.activeClass?this.activeClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_visibleClassList",get:function(){return this.visibleClass?this.visibleClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_invisibleClassList",get:function(){return this.invisibleClass?this.invisibleClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_enteringClassList",get:function(){return this.enteringClass?this.enteringClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_leavingClassList",get:function(){return this.leavingClass?this.leavingClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"enterTimeout",get:function(){return(this.data.get("enterTimeout")||"0,0").split(",").map(function(t){return parseInt(t)})}},{key:"leaveTimeout",get:function(){return(this.data.get("leaveTimeout")||"0,0").split(",").map(function(t){return parseInt(t)})}}]),e}(e.Controller);r.targets=["menu"],r.values={open:Boolean};var l=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden",this.backgroundHtml=this.data.get("backgroundHtml")||this._backgroundHTML(),this.backgroundId=this.data.get("backgroundId")||"modal-background",this.allowBackgroundClose="true"===(this.data.get("allowBackgroundClose")||"true"),this.preventDefaultActionOpening="true"===(this.data.get("preventDefaultActionOpening")||"true"),this.preventDefaultActionClosing="true"===(this.data.get("preventDefaultActionClosing")||"true")},s.disconnect=function(){this.close()},s.open=function(t){this.preventDefaultActionOpening&&t.preventDefault(),t.target.blur(),this.lockScroll(),this.containerTarget.classList.remove(this.toggleClass),this.data.get("disable-backdrop")||(document.body.insertAdjacentHTML("beforeend",this.backgroundHtml),this.background=document.querySelector("#"+this.backgroundId))},s.close=function(t){t&&this.preventDefaultActionClosing&&t.preventDefault(),this.unlockScroll(),this.containerTarget.classList.add(this.toggleClass),this.background&&this.background.remove()},s.closeBackground=function(t){this.allowBackgroundClose&&t.target===this.containerTarget&&this.close(t)},s.closeWithKeyboard=function(t){27!==t.keyCode||this.containerTarget.classList.contains(this.toggleClass)||this.close(t)},s._backgroundHTML=function(){return'<div id="modal-background" class="fixed top-0 left-0 w-full h-full" style="background-color: rgba(0, 0, 0, 0.8); z-index: 9998;"></div>'},s.lockScroll=function(){var t=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=t+"px",this.saveScrollPosition(),document.body.classList.add("fixed","inset-x-0","overflow-hidden"),document.body.style.top="-"+this.scrollPosition+"px"},s.unlockScroll=function(){document.body.style.paddingRight=null,document.body.classList.remove("fixed","inset-x-0","overflow-hidden"),this.restoreScrollPosition(),document.body.style.top=null},s.saveScrollPosition=function(){this.scrollPosition=window.pageYOffset||document.body.scrollTop},s.restoreScrollPosition=function(){document.documentElement.scrollTop=this.scrollPosition},e}(e.Controller);l.targets=["container"];var c=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.connect=function(){var t=this;this.activeTabClasses=(this.data.get("activeTab")||"active").split(" "),this.inactiveTabClasses=(this.data.get("inactiveTab")||"inactive").split(" "),this.anchor&&(this.index=this.tabTargets.findIndex(function(e){return e.id===t.anchor})),this.showTab()},s.change=function(t){t.preventDefault(),this.index=t.currentTarget.dataset.index?t.currentTarget.dataset.index:t.currentTarget.dataset.id?this.tabTargets.findIndex(function(e){return e.id==t.currentTarget.dataset.id}):this.tabTargets.indexOf(t.currentTarget),window.dispatchEvent(new CustomEvent("tsc:tab-change"))},s.showTab=function(){var t=this;this.tabTargets.forEach(function(e,s){var i,n,a,o,r=t.panelTargets[s];s===t.index?(r.classList.remove("hidden"),(i=e.classList).remove.apply(i,t.inactiveTabClasses),(n=e.classList).add.apply(n,t.activeTabClasses),e.id&&(location.hash=e.id)):(r.classList.add("hidden"),(a=e.classList).remove.apply(a,t.activeTabClasses),(o=e.classList).add.apply(o,t.inactiveTabClasses))})},i(e,[{key:"index",get:function(){return parseInt(this.data.get("index")||0)},set:function(t){this.data.set("index",t>=0?t:0),this.showTab()}},{key:"anchor",get:function(){return document.URL.split("#").length>1?document.URL.split("#")[1]:null}}]),e}(e.Controller);c.targets=["tab","panel"];var u=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden"},s.toggle=function(t){t.preventDefault(),this.openValue=!this.openValue},s.openValueChanged=function(){var t=this;this.toggleableTargets.forEach(function(e){e.classList.toggle(t.toggleClass)})},e}(e.Controller);u.targets=["toggleable"],u.values={open:Boolean};var h=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s.initialize=function(){this.contentTarget.setAttribute("style","transform:translate("+this.data.get("translateX")+", "+this.data.get("translateY")+");")},s.mouseOver=function(){this.contentTarget.classList.remove("hidden")},s.mouseOut=function(){this.contentTarget.classList.add("hidden")},e}(e.Controller);h.targets=["content"];var d=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var s=e.prototype;return s._show=function(){var e=this;this.overlayTarget.classList.remove(this.toggleClass),t.prototype._show.call(this,function(){e._activeClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),e._invisibleClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._visibleClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),setTimeout(function(){e._enteringClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)})}.bind(e),e.enterTimeout[1])}.bind(this))},s._hide=function(){var e=this;this._leavingClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),t.prototype._hide.call(this,function(){setTimeout(function(){e._visibleClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._invisibleClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),e._activeClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._leavingClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e.overlayTarget.classList.add(e.toggleClass)}.bind(e),e.leaveTimeout[1])}.bind(this))},e}(r);d.targets=["menu","overlay"],t.Alert=a,t.Autosave=o,t.Dropdown=r,t.Modal=l,t.Popover=h,t.Slideover=d,t.Tabs=c,t.Toggle=u});
//# sourceMappingURL=tailwindcss-stimulus-components.umd.js.map
