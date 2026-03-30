import React, { useState } from 'react';
import leetcode from '../assets/LeetCode_logo_black.png';
const CodingProfiles = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const TABS = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { 
      id: 'leetcode', label: 'LeetCode', 
      icon: <img src={leetcode} alt="LeetCode" className="cp-tab-icon" height={30} width={30}/>
    },
    { 
      id: 'github', label: 'GitHub', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> 
    },
    { id: 'profiles', label: 'Profiles', icon: '🌐' },
  ];

  return (
    <section id="coding-profiles" className="coding-profiles-section">
      {/* Background decorations */}
      <div className="cp-bg-orb cp-orb-1" />
      <div className="cp-bg-orb cp-orb-2" />
      <div className="cp-bg-pattern" />

      <div className="section-intro rv">
        <div className="section-eyebrow">Coding Journey</div>
        <h2 className="section-title">Coding Profiles & Stats</h2>
        <p className="section-subtitle">Consistent competitive programming practice and open-source contributions across multiple platforms.</p>
      </div>

      {/* Tab Navigation */}
      <div className="cp-tabs rv">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`cp-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="cp-tab-icon">{tab.icon}</span>
            <span className="cp-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="cp-content rv">
          {/* Quick Stats */}
          <div className="cp-quick-stats">
            {[
              { val: '1700+', label: 'LeetCode Rating', col: '#f59e0b', icon: '⚡' },
              { val: '400+', label: 'Problems Solved', col: '#22c55e', icon: '✅' },
              { val: 'Top 50', label: 'Codolio College Rank', col: '#00dcff', icon: '🏆' },
              { val: '5+', label: 'Active Platforms', col: '#a855f7', icon: '🌐' },
            ].map((s, i) => (
              <div key={i} className="cp-stat-card glass-card" style={{ '--stat-col': s.col }}>
                <div className="cp-stat-icon">{s.icon}</div>
                <div className="cp-stat-val" style={{ color: s.col }}>{s.val}</div>
                <div className="cp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* LeetCode Card */}
          <div className="cp-embed-row">
            <div className="cp-embed-card glass-card">
              <div className="cp-embed-header">
                <span className="cp-embed-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" style={{verticalAlign:'middle', marginRight:'8px'}}><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.406a.547.547 0 0 1-.384.158H4.017a1.371 1.371 0 0 0-1.371 1.371V9.92a.547.547 0 0 1-.158.384L.414 14.68A1.374 1.374 0 0 0 0 15.641a1.34 1.34 0 0 0 .414.933l2.083 2.083a1.371 1.371 0 0 0 1.933 0l2.083-2.083a.547.547 0 0 1 .384-.158h3.57a1.371 1.371 0 0 0 1.371-1.371V11.47a.547.547 0 0 1 .158-.38l4.406-4.377a1.371 1.371 0 0 0 0-1.933L14.417.414A1.374 1.374 0 0 0 13.483 0zm0 1.371l1.103 1.103a.547.547 0 0 1 0 .777l-4.406 4.377a1.371 1.371 0 0 0-.414.961v3.57a.547.547 0 0 1-.547.547H5.648a1.371 1.371 0 0 0-.961.414l-2.083 2.083a.547.547 0 0 1-.777 0l-1.103-1.103a.547.547 0 0 1 0-.777l2.083-2.083a1.371 1.371 0 0 0 .414-.961V6.348a.547.547 0 0 1 .547-.547h3.57a1.371 1.371 0 0 0 .961-.414l4.377-4.406a.547.547 0 0 1 .64-.093zM18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
                  LeetCode Activity
                </span>
                <a href="https://leetcode.com/u/ae_jethiyaaaa/" target="_blank" rel="noreferrer" className="cp-embed-link">View Profile ↗</a>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://leetcard.jacoblin.cool/ae_jethiyaaaa?theme=dark&font=JetBrains%20Mono&ext=heatmap"
                  alt="LeetCode Stats"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* GitHub Stats Row */}
          <div className="cp-github-row">
            <div className="cp-embed-card glass-card">
              <div className="cp-embed-header">
                <span className="cp-embed-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle', marginRight:'8px'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-0.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub Stats
                </span>
                <a href="https://github.com/avi-var07" target="_blank" rel="noreferrer" className="cp-embed-link">View Profile ↗</a>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=avi-var07&show_icons=true&theme=tokyonight&bg_color=0b1422&border_color=ffffff0e&title_color=00dcff&icon_color=7b5ff5&text_color=6b88a8&hide_border=false&border_radius=12"
                  alt="GitHub Stats"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cp-embed-card glass-card">
              <div className="cp-embed-header">
                <span className="cp-embed-title">🔥 GitHub Streak</span>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=avi-var07&theme=tokyonight&background=0b1422&border=ffffff0e&ring=00dcff&fire=00ffb3&currStreakLabel=00dcff&sideLabels=6b88a8&dates=3d526b&stroke=ffffff0e&border_radius=12"
                  alt="GitHub Streak"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LeetCode Tab */}
      {activeTab === 'leetcode' && (
        <div className="cp-content rv">
          <div className="cp-lc-grid">
            {/* LeetCode Full Card */}
            <div className="cp-embed-card glass-card cp-full-width">
              <div className="cp-embed-header">
                <span className="cp-embed-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" style={{verticalAlign:'middle', marginRight:'8px'}}><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.406a.547.547 0 0 1-.384.158H4.017a1.371 1.371 0 0 0-1.371 1.371V9.92a.547.547 0 0 1-.158.384L.414 14.68A1.374 1.374 0 0 0 0 15.641a1.34 1.34 0 0 0 .414.933l2.083 2.083a1.371 1.371 0 0 0 1.933 0l2.083-2.083a.547.547 0 0 1 .384-.158h3.57a1.371 1.371 0 0 0 1.371-1.371V11.47a.547.547 0 0 1 .158-.38l4.406-4.377a1.371 1.371 0 0 0 0-1.933L14.417.414A1.374 1.374 0 0 0 13.483 0zm0 1.371l1.103 1.103a.547.547 0 0 1 0 .777l-4.406 4.377a1.371 1.371 0 0 0-.414.961v3.57a.547.547 0 0 1-.547.547H5.648a1.371 1.371 0 0 0-.961.414l-2.083 2.083a.547.547 0 0 1-.777 0l-1.103-1.103a.547.547 0 0 1 0-.777l2.083-2.083a1.371 1.371 0 0 0 .414-.961V6.348a.547.547 0 0 1 .547-.547h3.57a1.371 1.371 0 0 0 .961-.414l4.377-4.406a.547.547 0 0 1 .64-.093zM18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
                  LeetCode Heatmap & Stats
                </span>
                <a href="https://leetcode.com/u/ae_jethiyaaaa/" target="_blank" rel="noreferrer" className="cp-embed-link">Open LeetCode ↗</a>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://leetcard.jacoblin.cool/ae_jethiyaaaa?theme=dark&font=JetBrains%20Mono&ext=heatmap"
                  alt="LeetCode Heatmap"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contest Rating */}
            <div className="cp-embed-card glass-card">
              <div className="cp-embed-header">
                <span className="cp-embed-title">📈 Contest Rating</span>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://leetcard.jacoblin.cool/ae_jethiyaaaa?theme=dark&font=JetBrains%20Mono&ext=contest"
                  alt="LeetCode Contest Rating"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Badges */}
            <div className="cp-embed-card glass-card">
              <div className="cp-embed-header">
                <span className="cp-embed-title">🎖️ LeetCode Badges</span>
              </div>
              <div className="cp-badges-grid">
                {[
                  { name: '50 Days Badge', icon: '🔥', desc: '50 Day Streak 2024', col: '#f59e0b' },
                  { name: '100 Days Badge', icon: '💎', desc: '100 Day Streak 2024', col: '#a855f7' },
                  { name: 'Top Performer', icon: '🏅', desc: 'Biweekly Contest', col: '#22c55e' },
                ].map((b, i) => (
                  <div key={i} className="cp-badge-item" style={{ '--badge-col': b.col }}>
                    <div className="cp-badge-icon">{b.icon}</div>
                    <div className="cp-badge-name">{b.name}</div>
                    <div className="cp-badge-desc">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Tab */}
      {activeTab === 'github' && (
        <div className="cp-content rv">
          <div className="cp-github-full">
            <div className="cp-embed-card glass-card cp-full-width">
              <div className="cp-embed-header">
                <span className="cp-embed-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle', marginRight:'8px'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-0.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub Contribution Graph
                </span>
                <a href="https://github.com/avi-var07" target="_blank" rel="noreferrer" className="cp-embed-link">Open GitHub ↗</a>
              </div>
              <div className="cp-embed-body cp-heatmap-body">
                <img
                  src="https://ghchart.rber.dev/00dcff/avi-var07"
                  alt="GitHub Contribution Heatmap"
                  className="cp-embed-img cp-heatmap-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="cp-github-row">
              <div className="cp-embed-card glass-card">
                <div className="cp-embed-header">
                  <span className="cp-embed-title">📊 Overall Stats</span>
                </div>
                <div className="cp-embed-body">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=avi-var07&show_icons=true&theme=tokyonight&bg_color=0b1422&border_color=ffffff0e&title_color=00dcff&icon_color=7b5ff5&text_color=6b88a8&hide_border=false&border_radius=12&include_all_commits=true"
                    alt="GitHub Stats"
                    className="cp-embed-img"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="cp-embed-card glass-card">
                <div className="cp-embed-header">
                  <span className="cp-embed-title">🔥 Streak Stats</span>
                </div>
                <div className="cp-embed-body">
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=avi-var07&theme=tokyonight&background=0b1422&border=ffffff0e&ring=00dcff&fire=00ffb3&currStreakLabel=00dcff&sideLabels=6b88a8&dates=3d526b&stroke=ffffff0e&border_radius=12"
                    alt="GitHub Streak"
                    className="cp-embed-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="cp-embed-card glass-card cp-full-width">
              <div className="cp-embed-header">
                <span className="cp-embed-title">💻 Top Languages</span>
              </div>
              <div className="cp-embed-body">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=avi-var07&layout=compact&theme=tokyonight&bg_color=0b1422&border_color=ffffff0e&title_color=00dcff&text_color=6b88a8&hide_border=false&border_radius=12"
                  alt="Top Languages"
                  className="cp-embed-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profiles Tab */}
      {activeTab === 'profiles' && (
        <div className="cp-content rv">
          <div className="cp-profiles-grid">
            {[
              {
                name: 'LeetCode',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFA116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.406a.547.547 0 0 1-.384.158H4.017a1.371 1.371 0 0 0-1.371 1.371V9.92a.547.547 0 0 1-.158.384L.414 14.68A1.374 1.374 0 0 0 0 15.641a1.34 1.34 0 0 0 .414.933l2.083 2.083a1.371 1.371 0 0 0 1.933 0l2.083-2.083a.547.547 0 0 1 .384-.158h3.57a1.371 1.371 0 0 0 1.371-1.371V11.47a.547.547 0 0 1 .158-.38l4.406-4.377a1.371 1.371 0 0 0 0-1.933L14.417.414A1.374 1.374 0 0 0 13.483 0zm0 1.371l1.103 1.103a.547.547 0 0 1 0 .777l-4.406 4.377a1.371 1.371 0 0 0-.414.961v3.57a.547.547 0 0 1-.547.547H5.648a1.371 1.371 0 0 0-.961.414l-2.083 2.083a.547.547 0 0 1-.777 0l-1.103-1.103a.547.547 0 0 1 0-.777l2.083-2.083a1.371 1.371 0 0 0 .414-.961V6.348a.547.547 0 0 1 .547-.547h3.57a1.371 1.371 0 0 0 .961-.414l4.377-4.406a.547.547 0 0 1 .64-.093zM18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>,
                username: '@ae_jethiyaaaa',
                url: 'https://leetcode.com/u/ae_jethiyaaaa/',
                stats: ['1700+ Rating', '400+ Problems', 'Contest Rank 2487th'],
                col: '#f59e0b',
                gradient: 'linear-gradient(135deg, #f59e0b15, #f59e0b05)',
              },
              {
                name: 'GeeksforGeeks',
                icon: '🟢',
                username: '@aviral_var07',
                url: 'https://www.geeksforgeeks.org/user/aviral_var07/',
                stats: ['Active Problem Solver', 'DSA Practice', 'Editorial Contributor'],
                col: '#22c55e',
                gradient: 'linear-gradient(135deg, #22c55e15, #22c55e05)',
              },
              {
                name: 'Codolio',
                icon: '📊',
                username: '@ae_jethiyaaaa',
                url: 'https://codolio.com/profile/ae_jethiyaaaa',
                stats: ['Top 50 in College', 'Global Rank 1313', 'Cross-Platform Profile'],
                col: '#00dcff',
                gradient: 'linear-gradient(135deg, #00dcff15, #00dcff05)',
              },
              {
                name: 'GitHub',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-0.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
                username: '@avi-var07',
                url: 'https://github.com/avi-var07',
                stats: ['Open Source Projects', 'Active Contributions', 'Full Stack Repos'],
                col: '#d8eaf8',
                gradient: 'linear-gradient(135deg, #d8eaf815, #d8eaf805)',
              },
              {
                name: 'CodeChef',
                icon: '👨‍🍳',
                username: 'Problem Solver',
                url: 'https://codechef.com',
                stats: ['Bronze Badge', 'Competitive Contests', 'Algorithm Practice'],
                col: '#cd7f32',
                gradient: 'linear-gradient(135deg, #cd7f3215, #cd7f3205)',
              },
            ].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="cp-profile-card glass-card" style={{ '--p-col': p.col, background: p.gradient }}>
                <div className="cp-profile-header">
                  <span className="cp-profile-icon">{p.icon}</span>
                  <div>
                    <div className="cp-profile-name">{p.name}</div>
                    <div className="cp-profile-user" style={{ color: p.col }}>{p.username}</div>
                  </div>
                  <span className="cp-profile-arrow">↗</span>
                </div>
                <div className="cp-profile-tags">
                  {p.stats.map((s, j) => (
                    <span key={j} className="cp-profile-tag" style={{ borderColor: `${p.col}30`, color: p.col }}>{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .coding-profiles-section {
          padding: 100px 6%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg2) 50%, var(--bg) 100%);
        }
        .cp-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.06;
          pointer-events: none;
        }
        .cp-orb-1 { width: 500px; height: 500px; background: var(--a1); top: -5%; right: 10%; }
        .cp-orb-2 { width: 400px; height: 400px; background: var(--a2); bottom: 10%; left: -5%; }
        .cp-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0,220,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* Tabs */
        .cp-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cp-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: var(--card);
          color: var(--text-secondary);
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cp-tab:hover {
          border-color: rgba(0,220,255,0.2);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        .cp-tab.active {
          background: linear-gradient(135deg, rgba(0,220,255,0.12), rgba(123,95,245,0.08));
          border-color: rgba(0,220,255,0.35);
          color: var(--a1);
          box-shadow: 0 4px 20px rgba(0,220,255,0.15);
        }
        .cp-tab-icon { font-size: 1.1rem; }

        /* Content Area */
        .cp-content {
          animation: fadeSlideUp 0.4s ease forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Quick Stats */
        .cp-quick-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }
        .cp-stat-card {
          padding: 28px 22px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cp-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--stat-col);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cp-stat-card:hover::before { opacity: 1; }
        .cp-stat-icon { font-size: 1.6rem; margin-bottom: 10px; }
        .cp-stat-val { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; line-height: 1; margin-bottom: 6px; }
        .cp-stat-label { font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1.5px; }

        /* Embed Cards */
        .cp-embed-card {
          overflow: hidden;
        }
        .cp-embed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cp-embed-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .cp-embed-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--a1);
          text-decoration: none;
          padding: 5px 12px;
          border-radius: 8px;
          border: 1px solid rgba(0,220,255,0.2);
          transition: all 0.25s;
        }
        .cp-embed-link:hover {
          background: rgba(0,220,255,0.1);
          transform: translateY(-1px);
        }
        .cp-embed-body {
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cp-embed-img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        /* Embed Rows */
        .cp-embed-row { margin-bottom: 24px; }
        .cp-github-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        /* LeetCode Grid */
        .cp-lc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .cp-full-width { grid-column: 1 / -1; }

        /* GitHub Full */
        .cp-github-full {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cp-heatmap-body {
          padding: 24px;
          background: rgba(255,255,255,0.02);
        }
        .cp-heatmap-img {
          width: 100%;
          border-radius: 4px;
        }

        /* Badges Grid */
        .cp-badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
          padding: 20px;
        }
        .cp-badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 16px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        .cp-badge-item:hover {
          border-color: var(--badge-col);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px color-mix(in srgb, var(--badge-col) 15%, transparent);
        }
        .cp-badge-icon { font-size: 2.4rem; margin-bottom: 12px; }
        .cp-badge-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 4px; }
        .cp-badge-desc { font-size: 0.72rem; color: var(--text-dim); }

        /* Profile Cards */
        .cp-profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 18px;
        }
        .cp-profile-card {
          padding: 26px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cp-profile-card:hover {
          border-color: var(--p-col);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px color-mix(in srgb, var(--p-col) 12%, transparent);
        }
        .cp-profile-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .cp-profile-icon { font-size: 2.2rem; }
        .cp-profile-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--text-primary); }
        .cp-profile-user { font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; font-weight: 500; }
        .cp-profile-arrow { margin-left: auto; color: var(--text-dim); font-size: 1.1rem; transition: all 0.25s; }
        .cp-profile-card:hover .cp-profile-arrow { color: var(--p-col); transform: translate(3px, -3px); }
        .cp-profile-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .cp-profile-tag {
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          border: 1px solid;
          background: rgba(255,255,255,0.02);
        }

        @media (max-width: 768px) {
          .cp-quick-stats { grid-template-columns: repeat(2, 1fr); }
          .cp-github-row { grid-template-columns: 1fr; }
          .cp-profiles-grid { grid-template-columns: 1fr; }
          .cp-tabs { gap: 4px; }
          .cp-tab { padding: 8px 14px; font-size: 0.8rem; }
          .cp-tab-label { display: none; }
          .cp-tab-icon { font-size: 1.3rem; }
        }

        @media (max-width: 480px) {
          .cp-quick-stats { grid-template-columns: 1fr; }
          .coding-profiles-section { padding: 70px 4%; }
        }
      `}} />
    </section>
  );
};

export default CodingProfiles;
