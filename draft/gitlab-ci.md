# .gitlab-ci.yml  

[.gitlab-ci.yml 官网文档](https://docs.gitlab.cn/jh/ci/yaml/gitlab_ci_yaml.html) 

在项目更目录下配置 `.gitlab-ci.yml` 是使用 gitlab CICD 的必要条件; 
可在 `.gitlab-ci.yml` 文件中定义： 

+ 运行的脚本。
+ 要包含的其他配置文件和模板。
+ 依赖项和缓存。
+ 要按顺序运行的命令和要并行运行的命令。
+ 将应用程序部署到的位置。
+ 无论您是想自动运行脚本还是手动触发它们中的任何一个。

当 `.gitlab-ci.yml` 文件添加到仓库时，gitlab 会检测到它，`GitLab Runner` 应用程序会运行作业中定义的脚本。

## .gitlab-ci.yml 语法汇总
[.gitlab-ci.yml 语法](https://docs.gitlab.cn/jh/ci/yaml/) 

## .gitlab-ci.yml Piepeline 说明  
`.gitlab-ci.yml` 文件触发后会形成一个 `pipeline` 任务流由 `gitlab-runner` 来运行处理， 项目实际情况定义自己的 `stage` 和 `job` 

