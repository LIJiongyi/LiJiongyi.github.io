source "https://rubygems.org"

# 使用 GitHub Pages 管理 Jekyll 和相关插件的版本
gem "github-pages", group: :jekyll_plugins

# 远程主题插件
gem "jekyll-remote-theme"

# 如果你有其他插件，可以在这里添加
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows 和 JRuby 不包含 zoneinfo 文件，所以捆绑 tzinfo-data gem 和相关库
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 提高在 Windows 上监视目录的性能
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 锁定 `http_parser.rb` gem 到 `v0.6.x` 在 JRuby 构建上，因为较新版本的 gem 没有 Java 对应部分
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]