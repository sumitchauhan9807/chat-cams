import logo from './logo.svg';

function App() {
  return (
    <div id="base">
        <div id="header">
          <div className="ad">
            <a data-feature-show-title="Quick advice: Body image" href="https://youtu.be/hYUY_-JqKgU" target="_blank" rel="noopener noreferrer"><img src="https://static-pub.highwebmedia.com/featureshow/PAtGz5TI4WjB.jpeg" /></a>
          </div>
          <div className="section clearfix">
            <div className="logo-zone">
              <a href="/" id="logoLink" data-floatingnav data-paction-name="CBLogo" data-roomlist-spa-nav>
                <svg width="100%" height="100%">
                  <image href="https://web.static.mmcdn.com/images/logo.svg?hash=fa4b15869ee4" width="100%" height="100%" data-paction="CBLogo" />
                </svg>
              </a>
              <strong>THE ACT OF MASTURBATING WHILE CHATTING ONLINE</strong>
            </div>
            <div className="right_section">
              <div id="user_information" data-paction="UserInfoPanel" data-testid="user-info-panel">
                <div id="user_information_header" className="user_information_header">
                  <div id="user_information_profile_container" className="user_information_container anonymous">
                    <img className="user_information_header_icon" title="Username Dropdown" data-testid="gender-icon" src="https://web.static.mmcdn.com/images/gendericons/anon.svg" alt="Anonymous Icon" />
                    <img className="user_information_header_arrowdown" title="Username Dropdown" src="https://web.static.mmcdn.com/images/userinfoarrowdown.svg" data-testid="user-info-arrow" />
                  </div>
                  <div id="userUpdatesBellRoot" title="Notification Bell" className="user_information_icon notification_bell " data-testid="user-updates-bell-root" />
                  <div id="dmListIconRoot" title="Sitewide DM List" className="user_information_icon chat_bubble" data-testid="dm-list-icon-root" />
                </div>
                <div id="userInfoPanelMenuDropdownRoot" />
                <div id="dmListDropdownRoot" />
                <div id="userUpdatesMenuDropdownRoot" />
                <div className="bottom">
                  <table width="100%">
                    <tbody><tr>
                        <th>Status:</th>
                        <td title="Status" data-testid="status">
                          Anonymous
                        </td>
                        <td><a href="/auth/login/" className="login-link nooverlay login--lginxsu" account-redirect data-testid="login-link">(Log In)</a></td>
                      </tr>
                      <tr>
                        <th>You have:</th>
                        <td>
                          <div className="overflow">
                            <strong className="auip_tokens">
                              <span className="tokencount" title="Token Count" updatable-count data-testid="token-count">0</span> Tokens
                            </strong>
                          </div>
                        </td>
                        <td>
                          <a href="/tipping/purchase_tokens/?source=TokenSourceUserInfoPanel" className="purchase_tokens login-link" data-purchase-event-source="TokenSourceUserInfoPanel" data-testid="purchase-tokens">(Get More)</a>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <ul id="nav" data-paction="BlueNavBar">
              <a href="/accounts/register/?src=header&auipsrc=navbar" className="creat nooverlay auip_track" account-redirect data-testid="sign-up-tab">
                Sign Up
                <img src="https://web.static.mmcdn.com/images/arrow-white.gif" />
              </a>
              <li><a id="ChatRoomLink" href="/" onclick="
              const link_name = this.innerText
              window['tsExec'] && tsExec(function(ts){ts.addPageAction('BlueNavBarClicked', {'link_name' : link_name}) })" data-floatingnav data-roomlist-spa-nav data-testid="home-tab" gendered-link>
                  HOME
                </a>
              </li>
              <li>
                <a href="/discover/" data-floatingnav gendered-link data-testid="discover-tab">
                  <span className="header-title">DISCOVER</span>
                </a>
              </li>
              <li><a href="/tags/" data-floatingnav gendered-link data-testid="tags-tab">
                  TAGS
                </a>
              </li>
              <li id="spy_tab"><a data-floatingnav href="/spy-on-cams/" gendered-link data-roomlist-spa-nav data-testid="private-shows-tab">
                  PRIVATE SHOWS
                </a>
              </li>
              <li id="followed_tab">
                <a href="/followed-cams/" className="followed-header" id="followed_anchor" data-testid="following-tab">
                  <div style={{display: 'inline-block'}}>
                    <span className="followed_text">FOLLOWING</span>
                    <span className="followed_counts" data-paction-name="FOLLOWED">
                      (0/0)
                    </span>
                  </div>
                </a>
              </li>
              <li><a id="merch" href="https://cbswag.com" target="_blank" rel="noopener noreferrer" data-floatingnav>
                  MERCH
                </a>
              </li>
              <li className="broadcast-yourself">
                <a href="/accounts/register/?src=broadcast&next=/b/" data-testid="broadcast-yourself-tab">
                  BROADCAST YOURSELF
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content" style={{padding: 0, margin: 0}}>
          <div className="content_body" style={{padding: 0, margin: 0}}>
            <div id="ie-support-notice" className="message dismissible_notice" data-cookie="ie-support-notice" style={{display: 'none'}}>
              We noticed you're using a web browser that we don't support. Upgrade to a recent version of <br />
              <a href="https://www.google.com/chrome/">Chrome</a>, <a href="https://www.mozilla.org/firefox/">Firefox</a>, or <a href="https://support.apple.com/downloads/safari">Safari</a> for a better online experience.
              (<a href="#" className="dismiss_notice">dismiss</a>)
            </div>
          </div>
        </div>
        <div id="main" className="chat">
          <div className="top-section">
            <ul className="advanced-search-button-container" data-paction="Search">
              <li className="advanced_search_button_shell">
                <a className="advanced_search_button" href="#" title="Options" data-testid="advanced-search-button" />
              </li>
              <div ts="T" id="SearchInput" style={{height: '100%', position: 'relative', WebkitTapHighlightColor: 'transparent', display: 'inline-block', float: 'right', right: '15px', top: '3px', zIndex: 2}}>
                <form ts="n" method="GET" action="/" id="filter_search_form" style={{position: 'relative', WebkitTapHighlightColor: 'transparent'}}>
                  <input ts="n" name="keywords" className="search_input" type="text" placeholder="Search #tags or broadcasters" maxLength={150} autoComplete="off" id="keywords" data-listener-count-keydown={1} style={{position: 'absolute', WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)', borderRadius: '3px', borderStyle: 'solid', borderWidth: '1px', display: 'none', padding: '0px 40px 2px 5px', marginTop: '0px', right: '0px', font: '12px UbuntuRegular, Arial, Helvetica, sans-serif', height: '21px', outline: 'none', width: '182px'}} />
                  <div ts="n" className="inputDelete" style={{height: '20px', width: '18px', position: 'absolute', overflow: 'hidden', WebkitTapHighlightColor: 'transparent', visibility: 'hidden', display: 'none', top: '2px', right: '20px'}} />
                  <div ts="V" className="suggestionsDiv" data-listener-count-click={1} data-listener-count-keydown={1} style={{width: '227px', position: 'absolute', WebkitTapHighlightColor: 'transparent', borderWidth: '1px', borderStyle: 'solid', display: 'none', font: '12px UbuntuBold, Arial, Helvetica, sans-serif', right: '0px', top: '25px'}} />
                </form>
              </div>
              <li id="search_icon" className="search_div" tabIndex={0} data-listener-count-click={1} data-listener-count-keydown={1} style={{display: 'block'}}>
                <div>
                  <div className="search_svg" title="Search Bar" />
                </div>
              </li>
            </ul>
            <ul className="sub-nav genderTabs" ts="n" style={{display: 'block', top: '1px', marginTop: '2px', overflow: 'hidden', position: 'relative'}}>
              <li className="gender-tab" ts="p" style={{display: 'inline-block', position: 'relative', font: '13.0029px / 16px UbuntuMedium, Arial, Helvetica, sans-serif'}}><a className="gender-tab tabElement tabElementLink active" data-paction="TopTab" data-floatingnav data-testid="top-section-tab-all-genders" href="/opt/lampp/htdocs/china/idiis.html/" data-listener-count-click={1} style={{cursor: 'pointer', textDecoration: 'none'}}>ALL GENDERS</a></li>
              <div ts="n" style={{position: 'relative', overflow: 'hidden', WebkitTapHighlightColor: 'transparent', float: 'right', height: '100%', visibility: 'hidden'}} />
              <li className="gender-tab" ts="p" style={{display: 'inline-block', position: 'relative', font: '13.0029px / 16px UbuntuMedium, Arial, Helvetica, sans-serif'}}><a className="gender-tab tabElement tabElementLink" data-paction="TopTab" data-floatingnav data-testid="top-section-tab-women" href="/opt/lampp/htdocs/china/idiis.html/female/" data-listener-count-click={1} style={{cursor: 'pointer', textDecoration: 'none'}}>WOMEN</a></li>
              <li className="gender-tab" ts="p" style={{display: 'inline-block', position: 'relative', font: '13.0029px / 16px UbuntuMedium, Arial, Helvetica, sans-serif'}}><a className="gender-tab tabElement tabElementLink" data-paction="TopTab" data-floatingnav data-testid="top-section-tab-men" href="/opt/lampp/htdocs/china/idiis.html/male/" data-listener-count-click={1} style={{cursor: 'pointer', textDecoration: 'none'}}>MEN</a></li>
              <li className="gender-tab" ts="p" style={{display: 'inline-block', position: 'relative', font: '13.0029px / 16px UbuntuMedium, Arial, Helvetica, sans-serif'}}><a className="gender-tab tabElement tabElementLink" data-paction="TopTab" data-floatingnav data-testid="top-section-tab-couples" href="/opt/lampp/htdocs/china/idiis.html/couple/" data-listener-count-click={1} style={{cursor: 'pointer', textDecoration: 'none'}}>COUPLES</a></li>
              <li className="gender-tab" ts="p" style={{display: 'inline-block', position: 'relative', font: '13.0029px / 16px UbuntuMedium, Arial, Helvetica, sans-serif'}}><a className="gender-tab tabElement tabElementLink" data-paction="TopTab" data-floatingnav data-testid="top-section-tab-trans" href="/opt/lampp/htdocs/china/idiis.html/trans/" data-listener-count-click={1} style={{cursor: 'pointer', textDecoration: 'none'}}>TRANS</a></li>
              <div ts="d" className="chatAreaTabColor dropdown-anchor gender-tab" data-listener-count-click={1} data-listener-count-keydown={1} style={{position: 'absolute', overflow: 'hidden', WebkitTapHighlightColor: 'transparent', cursor: 'pointer', padding: '0px 10px', textAlign: 'center', userSelect: 'none', display: 'none', borderWidth: '1px', borderStyle: 'solid', borderRadius: '4px 4px 0px 0px', height: '27px', lineHeight: '27px', marginRight: '2px', width: '41px'}}>. . .</div>
              <div ts="n" style={{position: 'relative', overflow: 'hidden', WebkitTapHighlightColor: 'transparent', float: 'right', height: '100%', visibility: 'hidden'}} />
            </ul>
          </div>
          <div className="content">
            <div id="advanced_search_options" className="advanced_search_options collapsed" data-testid="aso-component">
              <h2 data-testid="aso-header">Options</h2>
              <div className="clearfix" />
            </div>
            <div className="clear" />
            <div id="roomlist_root" data-testid="room-list" className="main_roomlist">
              <div className="placeholder_roomlist_container endless_page_styles">
                <p />
                <div className="roomlist-msg">
                  <h2>&nbsp;</h2>
                  <p className="premium-desc">&nbsp;</p>
                </div>
                <ul className="list">
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                  <li className="roomCard placeholder camBgColor">
                    <a>
                      <div className="room_thumbnail" />
                    </a>
                    <div className="details">
                      <div className="title">&nbsp;</div>
                      <div className="subject">&nbsp;</div>
                      <div className="sub-info">&nbsp;</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-holder" id="footer-holder">
          <div className="footercon">
            <div className="col1" data-paction="Footer-FreeCamsByAge" gendered-category data-testid="age-cams">
              <h2>Free Cams by Age</h2>
              <dl>
                <dd><a href="/teen-cams/" data-floatingnav>
                    Teen Cams (18+)
                  </a>
                </dd>
                <dd><a href="/18to21-cams/" data-floatingnav>
                    18 to 21 Cams
                  </a>
                </dd>
                <dd><a href="/20to30-cams/" data-floatingnav>
                    20 to 30 Cams
                  </a>
                </dd>
                <dd><a href="/30to50-cams/" data-floatingnav>
                    30 to 50 Cams
                  </a>
                </dd>
                <dd><a href="/mature-cams/" data-floatingnav>
                    Mature Cams (50+)
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col2" data-paction="Footer-FreeCamsByRegion" gendered-category data-testid="region-cams">
              <h2>Free Cams by Region</h2>
              <dl>
                <dd><a href="/north-american-cams/" data-floatingnav>
                    North American Cams
                  </a>
                </dd>
                <dd><a href="/other-region-cams/" data-floatingnav>
                    Other Region Cams
                  </a>
                </dd>
                <dd><a href="/euro-russian-cams/" data-floatingnav>
                    Euro Russian Cams
                  </a>
                </dd>
                <dd><a href="/asian-cams/" data-floatingnav>
                    Asian Cams
                  </a>
                </dd>
                <dd><a href="/south-american-cams/" data-floatingnav>
                    South American Cams
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col3" data-paction="Footer-PrivateShows" gendered-category data-testid="private-cams">
              <h2>Available Private Shows</h2>
              <dl>
                <dd><a href="/6-tokens-per-minute-private-cams/" data-floatingnav>
                    6 Tokens per Minute
                  </a>
                </dd>
                <dd><a href="/12-tokens-per-minute-private-cams/" data-floatingnav>
                    12 Tokens per Minute
                  </a>
                </dd>
                <dd><a href="/18-tokens-per-minute-private-cams/" data-floatingnav>
                    18 Tokens per Minute
                  </a>
                </dd>
                <dd><a href="/30-tokens-per-minute-private-cams/" data-floatingnav>
                    30+ Tokens per Minute
                  </a>
                </dd>
                <dd><a href="/60-tokens-per-minute-private-cams/" data-floatingnav>
                    60+ Tokens per Minute
                  </a>
                </dd>
                <dd><a href="/90-tokens-per-minute-private-cams/" data-floatingnav>
                    90+ Tokens per Minute
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col4" data-paction="Footer-FreeCamsByStatus" gendered-category data-testid="status-cams">
              <h2>Free Cams by Status</h2>
              <dl>
                <dd><a href="/spy-on-cams/" data-floatingnav>
                    Private Shows
                  </a>
                </dd>
                <dd><a href="/new-cams/" data-floatingnav>
                    New Cams
                  </a>
                </dd>
                <dd><a href="/gaming-cams/" data-floatingnav>
                    Gaming Cams
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col5" data-paction="Footer-FreeCams" data-testid="free-cams">
              <h2>Free Cams</h2>
              <dl>
                <dd><a href="/" data-floatingnav>
                    Featured Cams
                  </a>
                </dd>
                <dd><a href="/female-cams/" data-floatingnav>
                    Female Cams
                  </a>
                </dd>
                <dd><a href="/male-cams/" data-floatingnav>
                    Male Cams
                  </a>
                </dd>
                <dd><a href="/couple-cams/" data-floatingnav>
                    Couple Cams
                  </a>
                </dd>
                <dd><a href="/trans-cams/" data-floatingnav>
                    Trans Cams
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <ul className="nav" data-paction="Footer-Meta">
            <li><a href="https://cbswag.com" id="cbswag" target="_blank" data-testid="cbswag">Swag</a></li>
            <li><a href="/terms/" data-testid="terms">Terms &amp; Conditions</a></li>
            <li><a href="/privacy/" data-testid="privacy">Privacy Policy</a></li>
            <li><a href="https://support.chaturbate.com/" data-testid="support">Support</a></li>
            <li><a href="https://support.chaturbate.com/hc/en-us/requests/new?ticket_form_id=5912786461332" target="_blank" rel="noopener" data-testid="dmca">DMCA / Remove Content</a></li>
            <li><a href="#" onclick="window['tsExec'] && tsExec(function(ts){ ts.openFeedbackForm('footer') })" data-testid="feedback">Feedback</a></li>
            <li><a href="/security/" data-testid="security">Security Center</a></li>
            <li><a href="/law_enforcement/" data-testid="law-enforcement">Law Enforcement</a></li>
            <li><a href="/billingsupport/" data-testid="billing">Billing</a></li>
            <li><a href="/security/privacy/deactivate/" data-testid="disable-account">Disable Account</a></li>
            <li><a href="/apps/" data-testid="v1-apps">v1 Apps</a></li>
            <li><a href="/v2apps/" data-testid="v2-apps">v2 Apps</a></li>
            <li><a href="/contest/details/" data-testid="contest">Contest</a></li>
            <li><a href="/affiliates/" data-testid="affiliates">Affiliates</a></li>
            <li><a href="/jobs/" target="_blank" rel="noopener" data-testid="jobs">Jobs</a></li>
            <li><a href="/sitemap/" data-testid="sitemap">Sitemap</a></li>
          </ul>
          <ul className="langs" data-paction="Footer-Language">
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-de"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="de" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Deutsch" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-en"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="en" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="English" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-es"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="es" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Español" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-fr"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="fr" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Français" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-it"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="it" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Italiano" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-ja"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="ja" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="日本語" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-ko"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="ko" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="한국어" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-pl"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="pl" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Polski" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-pt"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="pt" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Português" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-ru"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="ru" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="Русский" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-zh-hans"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="zh-hans" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="简体中文" /></form>
            </li>
            <li>
              <form target="_top" action="/set_language/" method="post" data-testid="set-lang-zh-hant"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="7y0lKPnOT9BNAO1KY182faiccEG4E8xxChEKWXdvu1fQuygTLgrauOCm2TRXMI67" /><input type="hidden" name="language" defaultValue="zh-hant" /><input type="hidden" name="next" defaultValue="/" /><input type="submit" defaultValue="繁體中文" /></form>
            </li>
          </ul>
          <ul id="social-media-icons" data-paction="Footer-Social">
            <li>
              <a href="https://twitter.com/chaturbate" data-social-type="twitter" title="Twitter" target="_blank" data-testid="twitter">
                <div className="twitter-icon" title="Twitter" />
              </a>
            </li>
          </ul>
          <p data-paction="Footer-Compliance"><a href="/2257/" data-testid="record-keeping">18 U.S.C. 2257 Record Keeping Requirements Compliance Statement</a></p>
          <div className="footer-cb-address" style={{paddingBottom: '5px', height: '7px', opacity: '1.3'}} data-paction="Footer-Compliance" data-testid="address" />
          <p data-paction="Footer-Compliance" data-testid="copyright">© Copyright Chaturbate.com 2011 - 2024. All Rights Reserved.<br />www3-ext-jz6t:fa4b15869ee4</p>
          <p style={{marginTop: '15px'}} className="footer-labels" data-paction="Footer-Compliance">
            <img src="https://web.static.mmcdn.com/images/badges/safelabeling.gif?hash=fa4b15869ee4" title="SafeLabeling" alt="Safe label logo" data-testid="safe-labeling" />
            <a href="https://www.rtalabel.org/?content=validate&rating=RTA-5042-1996-1400-1577-RTA&ref=chaturbate.com"><img src="https://web.static.mmcdn.com/images/badges/88x31_RTA-5042-1996-1400-1577-RTA-W-VERIFIED.gif?hash=fa4b15869ee4" style={{margin: '0 10px'}} title="RTALabel" alt="RTA verified logo" data-testid="rta" /></a>
            <a href="https://www.asacp.org/?content=validate&ql=329884767938eafe299e303fac732bdf"><img src="https://web.static.mmcdn.com/images/badges/ApprovedASACPmember.gif?hash=fa4b15869ee4" title="ASACP" alt="Approved ASACP member logo" data-testid="asacp" /></a>
          </p>
        </div>
      </div>
  );
}

export default App;
