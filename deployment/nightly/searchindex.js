Search.setIndex({"docnames": ["cloud/aws/ec2", "cloud/aws/ecs", "cloud/aws/eks", "cloud/aws/index", "cloud/aws/sagemaker", "cloud/azure/azure-vm", "cloud/azure/index", "cloud/gcp/compute-engine", "cloud/gcp/index", "cloud/gcp/vertex-ai", "cloud/ibm/index", "cloud/ibm/virtual-server", "cloud/index", "hpc", "index", "local", "mig", "platforms/databricks", "platforms/index", "platforms/kubeflow", "platforms/kubernetes", "tools/index", "tools/kubernetes/dask-gateway", "tools/kubernetes/dask-helm-chart", "tools/kubernetes/dask-kubernetes", "tools/kubernetes/dask-operator", "tools/rapids-docker"], "filenames": ["cloud/aws/ec2.md", "cloud/aws/ecs.md", "cloud/aws/eks.md", "cloud/aws/index.md", "cloud/aws/sagemaker.md", "cloud/azure/azure-vm.md", "cloud/azure/index.md", "cloud/gcp/compute-engine.md", "cloud/gcp/index.md", "cloud/gcp/vertex-ai.md", "cloud/ibm/index.md", "cloud/ibm/virtual-server.md", "cloud/index.md", "hpc.md", "index.md", "local.md", "mig.md", "platforms/databricks.md", "platforms/index.md", "platforms/kubeflow.md", "platforms/kubernetes.md", "tools/index.md", "tools/kubernetes/dask-gateway.md", "tools/kubernetes/dask-helm-chart.md", "tools/kubernetes/dask-kubernetes.md", "tools/kubernetes/dask-operator.md", "tools/rapids-docker.md"], "titles": ["Elastic Compute Cloud (EC2)", "Elastic Container Service (ECS)", "Elastic Kubernetes Service (EKS)", "Amazon Web Services", "Sagemaker", "Azure Virtual Machine", "Microsoft Azure", "Compute Engine Instance", "Google Cloud Platform", "Vertex AI", "IBM Cloud", "Virtual Server", "Cloud", "HPC", "Deploying RAPIDS", "Local", "Multi-Instance GPU (MIG)", "Databricks", "Platforms", "Kubeflow", "Kubernetes", "Tools", "Dask Gateway", "Dask Helm Chart", "Dask Kubernetes", "Dask Operator", "Docker Images"], "terms": {"There": [0, 11, 14, 19], "ar": [0, 1, 2, 5, 10, 11, 13, 14, 15, 16, 19, 20, 23, 25], "multipl": [0, 11, 16, 25], "wai": [0, 1, 3, 6, 7, 8, 10, 11, 16, 20, 24], "you": [0, 1, 2, 7, 9, 11, 14, 16, 19, 20, 23, 25], "can": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 15, 16, 19, 20, 23, 24, 25], "deploi": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 13, 19, 20, 23], "rapid": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 15, 18, 19, 20, 21, 24], "singl": [0, 1, 7, 11, 12, 16, 18, 19, 20, 21, 24], "instanc": [0, 1, 2, 3, 4, 6, 8, 9, 10, 12, 14, 19], "easiest": [0, 1, 7, 11], "i": [0, 1, 2, 5, 7, 9, 11, 16, 19, 20, 23, 24, 25], "us": [0, 1, 2, 4, 7, 9, 11, 13, 14, 15, 16, 19, 20, 23, 24], "docker": [0, 5, 7, 9, 11, 14, 19, 20], "imag": [0, 5, 7, 9, 11, 19, 20, 21, 23, 24, 25], "1": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 16, 19, 20, 23, 24, 25], "initi": [0, 7], "an": [0, 1, 2, 5, 8, 11, 12, 19, 20, 23, 25], "support": [0, 1, 2, 5, 6, 8, 11, 15, 16, 19], "see": [0, 1, 3, 5, 10, 11, 14, 15, 16, 19, 23, 25], "introduct": [0, 1, 2, 11], "section": [0, 1, 2, 9, 11, 16, 19, 25], "list": [0, 1, 2, 3, 5, 7, 10, 11, 19, 24], "type": [0, 1, 2, 3, 7, 10, 11, 20, 25], "It": [0, 5, 19, 20, 24, 25], "recommend": [0, 5, 6, 9, 16, 20, 24], "ami": 0, "alreadi": [0, 5, 20], "includ": [0, 4, 23], "requir": [0, 2, 4, 5, 15, 16, 23, 24], "nvidia": [0, 1, 2, 6, 7, 10, 11, 16, 19, 20, 23, 24, 25], "driver": [0, 6, 11, 19, 25], "aw": [0, 1, 2, 3, 4], "deep": [0, 6], "learn": [0, 6, 14], "2": [0, 1, 2, 4, 6, 7, 9, 10, 16, 19, 24, 25], "credenti": [0, 1, 11], "suppli": [0, 11, 25], "log": [0, 5, 11], "via": [0, 2, 5, 11, 16, 19, 20, 23, 24, 25], "ssh": [0, 2, 5, 7, 11], "For": [0, 1, 4, 5, 6, 7, 9, 11, 16, 19, 20, 23, 24, 25], "short": [0, 11, 19], "guid": [0, 4, 11, 23, 24], "launch": [0, 1, 10, 12, 18, 19, 20, 21, 23, 25], "your": [0, 1, 2, 7, 9, 11, 14, 19, 20, 23, 24], "access": [0, 2, 5, 9, 11, 20, 23], "read": [0, 4, 11], "get": [0, 1, 2, 4, 5, 11, 14, 15, 19, 25], "start": [0, 1, 4, 5, 7, 11, 15, 16, 19, 25], "amazon": [0, 1, 4, 14], "document": [0, 8, 11, 14, 19, 23, 25], "3": [0, 1, 2, 4, 6, 9, 16, 19, 23, 24, 25], "instal": [0, 1, 2, 6, 10, 13, 15, 16, 20, 21, 24], "runtim": [0, 6, 11, 19, 20, 23, 24, 25], "thi": [0, 1, 2, 5, 9, 16, 19, 20, 23, 24, 25], "step": [0, 1, 19], "4": [0, 1, 2, 3, 6, 19], "The": [0, 1, 5, 7, 11, 16, 19, 24, 25], "contain": [0, 3, 6, 7, 9, 11, 12, 14, 18, 19, 20, 21, 23, 24, 25], "custom": [0, 7, 9, 11, 19, 20, 23, 25], "option": [0, 1, 5, 11, 19, 25], "provid": [0, 1, 2, 3, 10, 11, 19, 20, 23], "page": [0, 11, 13, 15, 19, 20, 25], "exampl": [0, 1, 4, 5, 11, 14, 16, 19, 20, 23], "below": [0, 3, 9, 10, 11, 19], "pull": [0, 5, 11, 19], "rapidsai": [0, 2, 5, 7, 11, 19, 20, 23, 24, 25], "22": [0, 5, 7, 11, 19, 20, 23, 24, 25], "10": [0, 2, 4, 5, 11, 23, 25], "cuda11": [0, 5, 11, 19, 20, 23, 24, 25], "5": [0, 1, 2, 5, 11, 19, 20, 23, 24, 25], "ubuntu18": 0, "04": [0, 5, 11, 19, 20, 23, 24, 25], "py3": [0, 5, 11, 19, 20, 23, 24, 25], "9": [0, 2, 5, 11, 19, 20, 23, 24, 25], "run": [0, 1, 2, 4, 5, 7, 9, 11, 12, 14, 16, 18, 19, 20, 25], "gpu": [0, 1, 2, 3, 6, 7, 8, 10, 11, 13, 14, 20, 23, 24, 25], "all": [0, 1, 2, 4, 5, 11, 16, 19, 23, 25], "rm": [0, 5, 11, 19], "p": [0, 5, 11, 23], "8888": [0, 5, 11, 20, 23], "8787": [0, 2, 5, 11, 23, 25], "8786": [0, 2, 5, 11, 25], "test": [0, 1, 6, 7, 9, 10, 19], "jupyt": [0, 2, 4, 5, 9, 11, 19, 20, 23, 25], "notebook": [0, 4, 7, 8, 11, 12, 14, 18, 21], "automat": [0, 11, 16, 25], "go": [0, 11], "ip": [0, 2, 5, 9, 11, 25], "address": [0, 2, 11, 16, 23, 25], "port": [0, 2, 5, 9, 11, 19, 20, 23, 25], "multi": [1, 12, 14, 18, 25], "node": [1, 2, 12, 16, 18, 19, 20, 25], "cluster": [1, 2, 12, 14, 18, 20, 21], "dask": [1, 2, 5, 7, 14, 21], "": [1, 2, 19, 20, 23, 24, 25], "cloudprovid": 1, "manag": [1, 2, 8, 12, 13, 19, 21, 24, 25], "tool": [1, 14, 18, 19, 20, 24], "more": [1, 2, 4, 16, 20, 23, 25], "detail": [1, 2, 4, 23], "our": [1, 2, 14, 19, 25], "blog": [1, 4], "post": [1, 4], "0": [1, 2, 5, 6, 9, 16, 19, 20, 23, 25], "from": [1, 5, 7, 9, 16, 20, 23, 24, 25], "within": [1, 20, 25], "follow": [1, 5, 16, 19, 23, 24, 25], "assum": [1, 24], "them": [1, 19, 25], "same": [1, 19, 23, 24, 25], "vpc": 1, "One": [1, 16], "ensur": [1, 19, 23, 25], "through": [1, 23], "ec2": [1, 3, 12], "instruct": [1, 13, 15, 19, 25], "setup": [1, 4, 16, 23], "first": [1, 16, 19, 23], "need": [1, 6, 8, 9, 16, 19, 23, 24, 25], "allow": [1, 5, 9, 16, 19, 25], "u": [1, 2, 25], "interact": [1, 19], "cli": [1, 5, 7], "If": [1, 5, 20, 23, 25], "someon": 1, "els": 1, "account": 1, "kei": [1, 2, 5], "number": [1, 2, 7, 16, 19], "local": [1, 2, 14, 16, 20, 25], "environ": [1, 2, 5, 7, 9, 13, 16, 19, 20, 21, 23, 25], "command": [1, 7, 16, 19, 23, 25], "line": [1, 16], "pip": [1, 14, 19], "awscli": [1, 2], "configur": [1, 2, 7, 9, 10, 19, 20], "To": [1, 4, 16, 19, 23, 24, 25], "creat": [1, 2, 6, 7, 9, 11, 16, 20, 23, 24, 25], "In": [1, 5, 7, 16, 19, 23, 24, 25], "consol": [1, 7], "visit": [1, 2, 5, 8, 19, 23], "dashboard": [1, 5, 9, 23, 25], "left": [1, 5, 19], "hand": 1, "side": [1, 19], "click": [1, 5, 7, 9, 19], "make": [1, 16, 19, 20, 25], "sure": [1, 19], "select": [1, 2, 5, 7, 9, 19], "linux": [1, 15], "network": [1, 6, 10, 13, 19], "so": [1, 19, 20, 23, 25], "we": [1, 4, 5, 6, 16, 19, 20, 23, 24, 25], "specifi": [1, 2, 7, 9, 16, 24], "give": [1, 19], "name": [1, 2, 3, 5, 7, 10, 19, 20, 23, 24, 25], "ex": 1, "chang": [1, 25], "one": [1, 2, 16, 19, 20, 25], "p3": [1, 3], "2xlarg": [1, 3], "each": [1, 16, 19, 23, 25], "which": [1, 2, 4, 16, 19, 20, 23, 25], "come": [1, 19], "v100": [1, 3, 5, 6, 10], "default": [1, 19, 23, 25], "subnet": 1, "avail": [1, 5, 6, 8, 19, 23], "other": [1, 5, 7, 9, 16, 25], "now": [1, 5, 19, 23], "wait": 1, "creation": [1, 21], "complet": [1, 16], "resourc": [1, 2, 5, 16, 19, 20, 21, 23, 24, 25], "arn": 1, "just": 1, "set": [1, 2, 5, 7, 16, 19, 23, 25], "aws_default_region": 1, "variabl": [1, 5, 16, 25], "region": [1, 2, 5, 6, 8], "export": 1, "code": [1, 4, 24], "fo": 1, "being": [1, 20], "ecsclust": 1, "object": [1, 19, 23, 25], "python": [1, 19, 24, 25], "session": [1, 19, 20, 25], "dask_cloudprovid": 1, "import": [1, 16, 19, 23, 24, 25], "cluster_arn": 1, "n_worker": [1, 19, 25], "num_work": 1, "worker_gpu": 1, "num_gpu": 1, "exist": [1, 16, 25], "task": 1, "worker": [1, 2, 5, 19, 20, 23, 24], "expos": [1, 9, 16, 20, 25], "must": [1, 19, 25], "less": 1, "than": [1, 10, 23], "equal": 1, "e": [1, 19], "g": [1, 5], "distribut": [1, 19, 23, 25], "client": [1, 19, 23, 25], "load": [1, 24], "sampl": 1, "data": [1, 4, 6, 19], "cudf": [1, 5, 7, 19, 23, 24], "dask_cudf": [1, 19, 24], "ddf": [1, 24], "dataset": 1, "timeseri": 1, "gdf": 1, "map_partit": 1, "from_panda": 1, "groupbi": 1, "id": 1, "count": [1, 3, 7, 10], "comput": [1, 3, 6, 8, 12, 14, 16, 19, 23, 24, 25], "head": [1, 19], "out": [1, 4, 16, 20, 25], "34": 1, "xavier": 1, "99495": 1, "oliv": 1, "100251": 1, "charli": 1, "99354": 1, "zelda": 1, "99709": 1, "alic": 1, "100106": 1, "dtype": 1, "int64": 1, "6": [1, 2, 6], "cleanup": 1, "continu": [1, 5], "incur": 1, "charg": 1, "until": 1, "shut": 1, "down": [1, 5, 19, 23, 25], "either": [1, 16, 19, 24], "scale": [1, 4, 20, 24, 25], "zero": 1, "altogeth": 1, "plan": 1, "again": 1, "soon": 1, "probabl": 1, "prefer": [1, 7, 25], "reduc": [1, 20], "helm": [2, 14, 19, 21], "found": [2, 19], "doc": 2, "depend": [2, 20], "kubectl": [2, 19, 20, 23], "eksctl": 2, "public": [2, 5], "don": [2, 19], "t": [2, 19, 23, 25], "have": [2, 9, 16, 19, 20, 23, 25], "cluster_nam": 2, "version": [2, 5, 7, 9, 15, 19, 23, 24, 25], "14": [2, 16], "nodegroup": 2, "node_inst": 2, "num_nod": 2, "min": [2, 4, 5, 23], "max": [2, 6], "max_nod": 2, "volum": [2, 19], "size": [2, 5, 6, 8, 11, 16], "node_s": 2, "path": [2, 9, 25], "id_rsa": [2, 5], "pub": [2, 5], "auto": 2, "gener": [2, 16, 19, 25], "refer": [2, 16, 19], "maximum": 2, "updat": [2, 23], "point": [2, 5, 19, 24], "folder": 2, "file": [2, 16, 19, 23], "where": [2, 13, 16, 20], "save": 2, "addon": 2, "f": [2, 19, 20, 23, 25], "http": [2, 19, 20, 23, 25], "raw": 2, "githubusercont": 2, "com": [2, 19, 20, 23, 24, 25], "k8": 2, "devic": [2, 16], "plugin": 2, "beta4": 2, "yml": 2, "repo": [2, 14, 19, 23], "add": [2, 5, 19, 23, 25], "ai": [2, 8, 12], "chart": [2, 14, 21], "schedul": [2, 16, 19, 20, 23, 24], "servicetyp": 2, "loadbalanc": [2, 20, 25], "rapidstest": 2, "7": [2, 16], "svc": [2, 25], "extern": [2, 23, 25], "ag": [2, 19, 25], "clusterip": [2, 20, 25], "100": 2, "none": [2, 19, 25], "443": 2, "tcp": [2, 16, 25], "12m": 2, "251": 2, "155": 2, "a454a9741455544cfa37fc4ac71caa53": 2, "868718558": 2, "east": 2, "elb": 2, "amazonaw": 2, "80": [2, 6], "30633": 2, "85": 2, "11": [2, 19, 24], "182": 2, "a9c703f1c002f478ea60d9acaf165bab": 2, "1146605388": 2, "30346": 2, "32444": 2, "convert": 2, "dn": 2, "abov": [2, 16, 19, 20, 24, 25], "ipv4": 2, "Then": [2, 19, 20, 25], "obtain": [2, 16], "browser": [2, 5, 9, 20, 23], "8": [2, 3, 6, 10, 23], "delet": [2, 25], "releas": [2, 5, 19, 23, 24], "namespac": [2, 19], "service_nam": 2, "valu": [2, 5, 19, 23, 24, 25], "remov": [2, 20, 23], "its": [2, 16], "associ": [2, 11, 25], "uninstal": 2, "elast": [3, 12], "cloud": [3, 9, 14], "kubernet": [3, 12, 14, 18, 25], "ek": [3, 12], "ec": [3, 12], "sagemak": [3, 12], "sever": [3, 6, 8, 10], "acceler": [3, 7, 10, 13, 19, 20, 23], "inst": [3, 10], "xgpu": [3, 10], "ram": [3, 10, 19], "total": [3, 10, 16], "g4dn": 3, "xlarg": 3, "t4": 3, "16": [3, 4, 6, 10], "gb": [3, 6, 10], "12xlarg": 3, "64": [3, 6, 10], "metal": [3, 10], "128": [3, 10], "8xlarg": 3, "16xlarg": 3, "p3dn": 3, "24xlarg": 3, "32": [3, 6, 10], "256": [3, 10], "p4": 3, "p4d": 3, "a100": [3, 6, 16, 19], "40": [3, 6], "320": [3, 6], "g5": 3, "a10g": 3, "24": [3, 6], "4xlarg": 3, "96": [3, 6, 25], "48xlarg": 3, "192": 3, "also": [4, 19, 20, 25], "work": [4, 13, 16, 19, 23], "ve": 4, "written": 4, "how": [4, 16, 25], "experi": 4, "feb": 4, "2020": 4, "host": [4, 13, 15, 16, 19], "clone": 4, "repositori": [4, 23], "some": [4, 19, 20, 23, 25], "ipynb": [4, 5, 23], "larg": 4, "hpo": 4, "job": 4, "check": [4, 7, 19, 25], "maintain": 5, "pre": [5, 10, 16], "portal": 5, "latest": [5, 9, 19], "optim": [5, 6], "vmi": 5, "drop": 5, "interfac": [5, 24, 25], "fill": 5, "inform": 5, "vm": [5, 6, 7, 8, 10, 12], "enabl": [5, 7, 16, 21], "note": [5, 16, 19, 23], "zone": 5, "when": [5, 16, 19, 24, 25], "notic": 5, "x": [5, 16, 23], "No": [5, 19], "mean": [5, 13], "doe": [5, 16, 19, 20], "try": 5, "review": 5, "prepar": [5, 9], "descript": 5, "az_vmnam": 5, "az_resourcegroup": 5, "deploy": [5, 14, 23], "az_loc": 5, "westus2": 5, "az_imag": 5, "urn": 5, "ngc_azure_17_11": 5, "ngc": 5, "base": [5, 19], "22_06_0": 5, "gen2": 5, "06": [5, 19, 20, 23, 25], "az_siz": 5, "standard_nc6s_v3": [5, 6], "az_usernam": 5, "user": [5, 6, 7, 9, 16, 19, 20, 21, 24], "az_ssh_kei": 5, "az": 5, "locat": [5, 7, 13, 16], "admin": 5, "usernam": 5, "publish": 5, "output": 5, "tabl": 5, "inspect": 5, "offici": [5, 25], "panel": 5, "inbound": 5, "rule": [5, 19], "destin": 5, "rang": [5, 24], "keep": 5, "rest": 5, "unchang": 5, "az_nsgnam": 5, "nsg": 5, "az_nsgrulenam": 5, "n": [5, 16, 19, 24], "prioriti": 5, "1050": 5, "take": [5, 16, 19], "up": [5, 14, 16, 19, 23, 25], "minut": [5, 23], "provis": [5, 20], "selector": [5, 19, 20, 24, 25], "choos": [5, 7, 19], "method": 5, "column": 5, "stabl": [5, 19, 23], "nvcr": [5, 24], "io": [5, 9, 19, 24], "core": [5, 19, 20, 23, 24, 25], "ubuntu20": [5, 11, 19, 20, 23, 24, 25], "shm": [5, 11], "1g": [5, 11], "ulimit": [5, 11], "memlock": [5, 11], "lab": [5, 9, 19], "execut": [5, 24], "cell": [5, 23], "open": [5, 9, 19, 20, 23], "enter": [5, 7, 23], "url": [5, 19], "blank": 5, "monitor": [5, 25], "statu": [5, 19, 25], "virtual": [6, 10, 12], "machin": [6, 7, 9, 12, 14], "secur": [6, 16], "group": [6, 19, 25], "variou": [6, 8, 18, 19], "kind": [6, 8, 19, 20, 24, 25], "differ": [6, 8, 16, 23], "nc": 6, "nd": 6, "v3": 6, "seri": [6, 19], "vcpu": [6, 10], "memori": [6, 16, 19, 24], "gib": 6, "temp": 6, "storag": 6, "nvme": 6, "disk": 6, "uncach": 6, "throughput": 6, "iop": 6, "mbp": 6, "nic": 6, "bandwidth": 6, "standard_nc24ads_a100_v4": 6, "220": 6, "1123": 6, "12": 6, "30000": 6, "1000": 6, "20": [6, 24, 25], "000": 6, "standard_nc48ads_a100_v4": 6, "48": [6, 10], "440": 6, "2246": 6, "160": 6, "60000": 6, "2000": 6, "standard_nc96ads_a100_v4": 6, "880": 6, "4492": 6, "120000": 6, "4000": 6, "standard_nc4as_t4_v3": 6, "28": 6, "180": 6, "8000": 6, "standard_nc8as_t4_v3": 6, "56": 6, "360": 6, "standard_nc16as_t4_v3": 6, "110": 6, "standard_nc64as_t4_v3": 6, "2880": 6, "32000": 6, "112": 6, "736": 6, "20000": 6, "200": [6, 25], "standard_nc12s_v3": 6, "224": 6, "1474": 6, "40000": 6, "400": 6, "standard_nc24s_v3": 6, "448": 6, "2948": 6, "80000": 6, "800": 6, "standard_nc24rs_v3": 6, "rdma": 6, "capabl": [6, 16], "v2": 6, "standard_nd96asr_v4": 6, "900": 6, "6000": 6, "nvlink": [6, 16], "standard_nd96amsr_a100_v4": 6, "1900": 6, "6400": 6, "standard_nd40rs_v2": 6, "672": 6, "overview": [6, 8], "gcp": 7, "nagiv": [7, 9], "under": [7, 9, 23, 25], "next": [7, 16, 19, 25], "registri": [7, 9], "alloc": [7, 24], "buffer": 7, "stdin": 7, "pseudo": 7, "tty": [7, 19], "interactivti": 7, "after": [7, 9], "aspect": [7, 9], "gcloud": 7, "minimum": [7, 24], "flag": 7, "instance_nam": 7, "image_path": 7, "gpu_numb": 7, "gpu_typ": 7, "onc": [7, 9, 16, 19, 25], "attach": 7, "shell": 7, "container_id": 7, "root": [7, 9, 19], "conda": [7, 14, 20, 24], "packag": [7, 15, 19], "opt": 7, "env": [7, 19, 23, 24, 25], "build": 7, "channel": [7, 16], "08": [7, 24], "00": 7, "cuda_11_py39_gb71873c701_0": 7, "cudf_kafka": 7, "py39_gb71873c701_0": 7, "libcudf": 7, "cuda11_gb71873c701_0": 7, "libcudf_kafka": 7, "gb71873c701_0": 7, "engin": [8, 12], "vertex": [8, 12], "pleas": [8, 16, 19], "new": [9, 19, 23, 25], "softwar": [9, 21], "befor": 9, "built": [9, 23], "8080": 9, "servic": [9, 14, 19, 20, 23, 25], "arg": [9, 24, 25], "rapids_imag": 9, "entrypoint": 9, "notebookapp": 9, "token": 9, "allow_origin": 9, "push": 9, "googl": [9, 14], "ui": 9, "gcr": 9, "fulli": 9, "jupyterlab": 9, "navig": [9, 19], "anoth": [9, 16, 20], "tab": [9, 19], "server": [10, 12, 14, 19, 20, 23], "login": 10, "requisit": 10, "gx2": 10, "8x64x1v100": 10, "tesla": 10, "16x128x1v100": 10, "16x128x2v100": 10, "32x256x2v100": 10, "p100": 10, "bare": 10, "mg4c": 10, "32x384": 10, "2xp100": 10, "384": 10, "48x384": 10, "2xv100": 10, "bill": 10, "monthli": 10, "interv": 10, "rather": 10, "hourli": 10, "float": 11, "web": [11, 14], "ibm": [11, 14], "extrem": 13, "well": 13, "tradit": 13, "often": 13, "co": 13, "hardwar": 13, "infiniband": 13, "queue": 13, "system": [13, 16], "lsf": 13, "pb": 13, "etc": 13, "anywher": 14, "workstat": 14, "wsl2": 14, "platform": [14, 20], "microsoft": 14, "azur": 14, "hpc": [14, 16], "high": 14, "perform": [14, 16, 19], "supercomput": 14, "slurm": 14, "xgboost": 14, "kubeflow": [14, 18], "databrick": [14, 18], "mani": [14, 20, 23, 25], "oper": [14, 21], "gatewai": [14, 21], "ml": 14, "opinion": 14, "boost": 14, "workflow": 14, "optuna": 14, "mlflow": 14, "rai": 14, "tune": 14, "current": [15, 16, 23], "experiment": [15, 19, 25], "window": 15, "subsystem": 15, "technologi": 16, "partit": 16, "seem": 16, "independ": 16, "receiv": 16, "certain": 16, "slice": 16, "defin": 16, "block": 16, "detach": 16, "chip": 16, "protect": 16, "due": 16, "layer": 16, "limit": [16, 19, 20, 23, 24, 25], "applic": 16, "lack": 16, "inter": 16, "process": [16, 25], "commun": [16, 25], "ipc": 16, "transfer": 16, "over": [16, 19], "nvswitch": 16, "greatli": 16, "speed": 16, "between": [16, 25], "physic": 16, "thu": 16, "unavail": 16, "forc": 16, "expens": 16, "cpu": [16, 19, 24], "given": 16, "advis": 16, "understand": 16, "tradeoff": 16, "made": [16, 25], "attempt": 16, "while": [16, 19], "could": [16, 20, 25], "benefici": 16, "onli": 16, "amount": [16, 19], "bottleneck": 16, "mai": [16, 20, 23, 24], "problem": 16, "thought": 16, "carefulli": 16, "long": 16, "ident": 16, "respect": 16, "much": 16, "like": [16, 19, 20, 25], "mix": 16, "good": [16, 25], "idea": 16, "abl": [16, 25], "balanc": 16, "correctli": [16, 23], "eventu": 16, "lead": 16, "frequent": 16, "error": 16, "two": [16, 19, 25], "10gb": 16, "should": [16, 19, 24, 25], "ok": 16, "howev": [16, 19], "20gb": 16, "avoid": 16, "unlik": 16, "compos": 16, "unpartit": 16, "cannot": 16, "infer": 16, "util": [16, 20], "achiev": 16, "cuda_visible_devic": 16, "dask_cuda": 16, "homonym": 16, "argument": 16, "indic": 16, "prefix": [16, 25], "uuid": 16, "look": [16, 19, 20, 25], "similar": [16, 19], "41b3359c": 16, "e721": 16, "56e5": 16, "8009": 16, "12e5797ed514": 16, "simplest": 16, "smi": [16, 19], "l": [16, 19, 25], "pcie": 16, "40gb": 16, "84fd49f2": 16, "48ad": 16, "50e8": 16, "9f2e": 16, "3bf0dfd47ccb": 16, "2g": 16, "65b79fff": 16, "6d3c": 16, "5490": 16, "a288": 16, "b31ec705f310": 16, "c6e2bae8": 16, "46d4": 16, "5a7e": 16, "9a68": 16, "c6cf1f680ba0": 16, "case": [16, 20, 23], "ha": [16, 19, 20, 23, 25], "startup": 16, "inaccess": 16, "part": 16, "altern": [16, 24, 25], "programat": [16, 20], "nvml": 16, "pynvml": 16, "api": [16, 19], "write": 16, "appropri": [16, 25], "purpos": 16, "suppos": 16, "would": [16, 19], "json": 16, "correct": 16, "thei": [16, 19, 20], "alwai": 16, "nccl": 16, "reason": 16, "A": [16, 19, 23, 24], "instead": [16, 19, 20, 25], "caus": 16, "consider": 16, "degrad": 16, "therefor": [16, 19], "integr": [18, 20], "pipelin": [18, 20, 25], "pod": [19, 20, 21, 23, 24, 25], "These": 19, "were": 19, "against": 19, "v1": [19, 20, 25], "21": 19, "directli": [19, 20, 25], "addit": [19, 23], "find": [19, 20], "shown": 19, "typic": 19, "want": [19, 20, 23, 25], "verifi": [19, 23], "Be": 19, "match": [19, 23, 24, 25], "cuda": [19, 24, 25], "gke": 19, "onward": 19, "doesn": [19, 25], "matter": 19, "backward": 19, "compat": 19, "copi": 19, "restart": [19, 25], "never": [19, 24], "495": 19, "46": 19, "On": 19, "few": [19, 25], "let": [19, 25], "box": 19, "past": 19, "got": 19, "someth": 19, "littl": 19, "higher": 19, "8gb": 19, "form": 19, "scroll": 19, "bottom": 19, "hit": 19, "pack": 19, "full": 19, "amaz": 19, "readi": [19, 25], "connect": [19, 20, 23, 25], "everyth": [19, 20, 23], "okai": 19, "termin": 19, "symbol": 19, "link": 19, "home": 19, "directori": 19, "easili": 19, "explor": 19, "ln": 19, "jovyan": 19, "those": 19, "librari": [19, 20, 23, 25], "offer": 19, "etl": 19, "develop": 19, "panda": 19, "datafram": [19, 24], "onto": [19, 25], "spread": 19, "do": [19, 23, 25], "leverag": [19, 23, 25], "sourc": [19, 24], "calcul": 19, "ani": [19, 23], "itself": 19, "date": [19, 25], "org": [19, 23, 25], "1666875935": 19, "revis": 19, "suit": 19, "been": 19, "successfulli": 19, "appli": [19, 20, 25], "expect": 19, "yet": 19, "succe": 19, "daskclust": 19, "app": [19, 20], "775b8bbbd5": 19, "zdrf7": 19, "74": 19, "lastli": 19, "edit": 19, "role": 19, "clusterrol": 19, "apigroup": 19, "verb": 19, "necessari": [19, 23], "done": 19, "yaml": [19, 20, 23, 24, 25], "kubeclust": [19, 24], "class": [19, 25], "tell": 19, "time": 19, "dask_kubernet": [19, 24, 25], "worker_command": [19, 25], "disable_jupyt": [19, 23, 24, 25], "true": [19, 23, 24, 25], "widget": 19, "call": [19, 25], "here": [19, 25], "realli": 19, "valuabl": 19, "extra": 19, "manifest": 19, "apivers": [19, 20, 25], "v1alpha1": 19, "poddefault": 19, "metadata": [19, 20, 24], "spec": [19, 20, 24, 25], "matchlabel": 19, "desc": 19, "dask_distributed__dashboard__link": 19, "nb_prefix": 19, "proxi": [19, 20, 25], "volumemount": 19, "config": [19, 23], "mountpath": 19, "jupyter_server_config": 19, "py": 19, "subpath": 19, "configmap": 19, "c": [19, 24], "serverproxi": 19, "host_allowlist": 19, "lambda": 19, "content": 19, "thing": [19, 20, 25], "safe": 19, "becaus": [19, 25], "reli": 19, "specif": [19, 24], "istio": [19, 25], "enforc": 19, "control": 19, "dashboard_link": 19, "attribut": 19, "show": [19, 25], "extens": 19, "view": 19, "plot": 19, "stat": 19, "about": 19, "right": [19, 20], "menu": 19, "search": 19, "icon": 19, "arrang": 19, "drag": 19, "around": 19, "label": [20, 24, 25], "nodeport": [20, 25], "targetport": [20, 25], "30002": 20, "securitycontext": 20, "fsgroup": 20, "containerport": [20, 25], "alternatv": 20, "forward": [20, 23, 25], "individu": 20, "alongsid": 20, "consist": 20, "compon": [20, 25], "both": [20, 25], "benefit": 20, "empow": 20, "nativ": [20, 21, 25], "dynam": 20, "flexibl": 20, "usual": 20, "conjunct": 20, "By": [20, 23, 25], "burst": 20, "beyond": 20, "spreak": 20, "across": 20, "unless": 20, "older": 20, "possibl": 20, "too": 20, "phase": 20, "favour": 20, "organis": 20, "central": [20, 21], "abstract": 20, "underli": 20, "permiss": 20, "consum": [20, 23], "centralis": 20, "turn": 20, "back": 20, "what": [20, 25], "awai": 20, "classic": [21, 24], "spawn": 21, "deprec": 21, "preconfigur": 23, "scalabl": 23, "juptyt": 23, "top": [23, 25], "tag": 23, "dask_work": 23, "dask_cuda_work": 23, "replica": [23, 25], "serviceport": 23, "password": 23, "hash": 23, "argon2": 23, "argon2id": 23, "v": 23, "19": 23, "m": 23, "10240": 23, "tbbhublux7efzgrkqqiwtw": 23, "rg": 23, "jcbb2kyf2vqzxkhmnvhnyju9mzngtm2eu2": 23, "f7qpc": 23, "woker": 23, "workaround": 23, "Will": 23, "futur": [23, 25], "exlicitli": 23, "request": [23, 24], "insid": [23, 25], "assign": 23, "place": 23, "regular": 23, "desir": 23, "topographi": 23, "ingress": 23, "traffic": [23, 25], "redirect": 23, "correspond": 23, "simplic": [23, 24], "127": [23, 25], "localhost": [23, 25], "conveni": 23, "pass": 23, "walk": 23, "valid": 23, "metric": 23, "examin": 23, "upgrad": 23, "articl": 24, "introduc": 24, "miniconda": 24, "domain": 24, "demo": 24, "meet": 24, "minim": 24, "required": 24, "mention": 24, "forg": 24, "cudatoolkit": 24, "make_pod_spec": 24, "gpu_worker_spec": 24, "cpu_limit": 24, "cpu_request": 24, "memory_limit": 24, "3g": 24, "memory_request": 24, "gpu_limit": 24, "standard": 24, "cluster_typ": 24, "dask_typ": 24, "gpu_work": 24, "restartpolici": 24, "imagepullpolici": [24, 25], "ifnotpres": [24, 25], "dask_scheduler_address": 24, "rmm": 24, "pick": 24, "At": [24, 25], "small": 24, "result": 24, "from_cudf": 24, "npartit": 24, "sum": 24, "print": 24, "190": 24, "With": 25, "definit": 25, "crd": 25, "daskworkergroup": 25, "daskjob": 25, "describ": 25, "choic": 25, "dask_worker_nam": 25, "comm": 25, "protocol": 25, "readinessprob": 25, "httpget": 25, "health": 25, "initialdelaysecond": 25, "periodsecond": 25, "livenessprob": 25, "15": 25, "break": 25, "nest": 25, "mainli": 25, "disabl": 25, "probe": 25, "envoi": 25, "mangl": 25, "outsid": 25, "0c202b85fd": 25, "4m13": 25, "ff5d376714": 25, "4m14": 25, "223": 25, "217": 25, "along": 25, "additon": 25, "implement": 25, "hood": 25, "3m28": 25, "07d674589a": 25, "3m30": 25, "a55ed88265": 25, "df785ab050": 25, "202": 25, "without": 25, "know": 25, "discov": 25, "And": 25, "manual": 25, "close": 25, "regist": 25, "exit": 25, "hook": 25, "shutdown_on_clos": 25, "fals": 25, "stage": 25, "persist": 25, "from_nam": 25, "wish": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"elast": [0, 1, 2], "comput": [0, 7], "cloud": [0, 8, 10, 12], "ec2": 0, "contain": [1, 5], "servic": [1, 2, 3, 12], "ec": 1, "kubernet": [2, 19, 20, 21, 24], "ek": 2, "amazon": [3, 12], "web": [3, 12], "sagemak": 4, "azur": [5, 6, 12], "virtual": [5, 11], "machin": 5, "creat": [5, 19], "gpu": [5, 16, 19], "nvidia": 5, "driver": 5, "runtim": 5, "network": [5, 11], "secur": 5, "group": 5, "instal": [5, 11, 19, 23, 25], "rapid": [5, 11, 14, 23, 25], "test": [5, 11], "us": [5, 6, 25], "link": [5, 6], "microsoft": [6, 12], "engin": 7, "instanc": [7, 11, 16], "googl": [8, 12], "platform": [8, 12, 18], "vertex": 9, "ai": 9, "manag": 9, "notebook": [9, 19, 20, 23], "ibm": [10, 12], "server": 11, "launch": 11, "vm": 11, "configur": [11, 23, 25], "login": 11, "pre": 11, "requisit": 11, "hpc": 13, "slurm": 13, "deploi": 14, "local": 15, "conda": 15, "docker": [15, 26], "pip": 15, "wsl": 15, "2": 15, "multi": 16, "mig": 16, "dask": [16, 19, 20, 22, 23, 24, 25], "cluster": [16, 19, 23, 24, 25], "determin": 16, "name": 16, "localcudaclust": 16, "cuda": 16, "worker": [16, 25], "xgboost": 16, "databrick": 17, "kubeflow": [19, 20], "scale": [19, 23], "out": 19, "mani": 19, "oper": [19, 20, 25], "access": [19, 25], "dashboard": 19, "from": 19, "interact": 20, "helm": [20, 23], "chart": [20, 23], "classic": 20, "gatewai": [20, 22], "tool": 21, "packag": 21, "run": 23, "prerequisit": 24, "client": 24, "environ": 24, "setup": 24, "verif": 24, "daskclust": 25, "exampl": 25, "kubectl": 25, "manifest": 25, "breakdown": 25, "metadata": 25, "schedul": 25, "your": 25, "kubeclust": 25, "imag": 26}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Elastic Compute Cloud (EC2)": [[0, "elastic-compute-cloud-ec2"]], "Elastic Container Service (ECS)": [[1, "elastic-container-service-ecs"]], "Elastic Kubernetes Service (EKS)": [[2, "elastic-kubernetes-service-eks"]], "Amazon Web Services": [[3, "amazon-web-services"], [3, null], [12, "amazon-web-services"]], "Sagemaker": [[4, "sagemaker"]], "Azure Virtual Machine": [[5, "azure-virtual-machine"]], "Create Azure Virtual Machine with GPU, Nvidia Driver and Nvidia Container Runtime": [[5, "create-azure-virtual-machine-with-gpu-nvidia-driver-and-nvidia-container-runtime"]], "Create Network Security Group": [[5, "create-network-security-group"]], "Install RAPIDS": [[5, "install-rapids"], [11, "install-rapids"]], "Test RAPIDS": [[5, "test-rapids"], [11, "test-rapids"]], "Useful Links": [[5, "useful-links"], [6, "useful-links"]], "Microsoft Azure": [[6, "microsoft-azure"], [6, null], [12, "microsoft-azure"]], "Compute Engine Instance": [[7, "compute-engine-instance"]], "Google Cloud Platform": [[8, "google-cloud-platform"], [8, null]], "Vertex AI": [[9, "vertex-ai"]], "Managed Notebooks": [[9, "managed-notebooks"]], "IBM Cloud": [[10, "ibm-cloud"], [10, null], [12, "ibm-cloud"]], "Virtual Server": [[11, "virtual-server"]], "Launch a VM instance": [[11, "launch-a-vm-instance"]], "Configure networking": [[11, "configure-networking"]], "Login": [[11, "login"]], "Install pre-requisites": [[11, "install-pre-requisites"]], "Cloud": [[12, "cloud"]], "Google Cloud Platforms": [[12, "google-cloud-platforms"]], "HPC": [[13, "hpc"]], "SLURM": [[13, "slurm"]], "Deploying RAPIDS": [[14, "deploying-rapids"]], "Local": [[15, "local"]], "Conda": [[15, "conda"]], "Docker": [[15, "docker"]], "pip": [[15, "pip"]], "WSL 2": [[15, "wsl-2"]], "Multi-Instance GPU (MIG)": [[16, "multi-instance-gpu-mig"]], "Dask Cluster": [[16, "dask-cluster"]], "Determine MIG Names": [[16, "determine-mig-names"]], "LocalCUDACluster": [[16, "localcudacluster"]], "dask-cuda-worker": [[16, "dask-cuda-worker"]], "XGBoost with Dask Cluster": [[16, "xgboost-with-dask-cluster"]], "Databricks": [[17, "databricks"]], "Platforms": [[18, "platforms"]], "Kubeflow": [[19, "kubeflow"]], "Kubeflow Notebooks": [[19, "kubeflow-notebooks"]], "Scaling out to many GPUs": [[19, "scaling-out-to-many-gpus"]], "Installing the Dask Kubernetes operator": [[19, "installing-the-dask-kubernetes-operator"]], "Creating a Dask cluster": [[19, "creating-a-dask-cluster"]], "Accessing the Dask dashboard from notebooks": [[19, "accessing-the-dask-dashboard-from-notebooks"]], "Kubernetes": [[20, "kubernetes"], [21, "kubernetes"]], "Interactive Notebook": [[20, "interactive-notebook"]], "Helm Chart": [[20, "helm-chart"]], "Dask Operator": [[20, "dask-operator"], [25, "dask-operator"]], "Dask Kubernetes (classic)": [[20, "dask-kubernetes-classic"]], "Dask Gateway": [[20, "dask-gateway"], [22, "dask-gateway"]], "KubeFlow": [[20, "kubeflow"]], "Tools": [[21, "tools"]], "Packages": [[21, "packages"]], "Dask Helm Chart": [[23, "dask-helm-chart"]], "Configuring RAPIDS": [[23, "configuring-rapids"]], "Installing the Helm Chart": [[23, "installing-the-helm-chart"]], "Running Rapids Notebook": [[23, "running-rapids-notebook"]], "Notebooks and Cluster Scaling": [[23, "notebooks-and-cluster-scaling"]], "Dask Kubernetes": [[24, "dask-kubernetes"]], "Prerequisite": [[24, "prerequisite"]], "Client environment setup": [[24, "client-environment-setup"]], "Cluster setup": [[24, "cluster-setup"]], "Verification": [[24, "verification"]], "Installation": [[25, "installation"]], "Configuring a RAPIDS DaskCluster": [[25, "configuring-a-rapids-daskcluster"]], "Example using kubectl": [[25, "example-using-kubectl"]], "Manifest breakdown": [[25, "manifest-breakdown"]], "Metadata": [[25, "metadata"]], "Worker": [[25, "worker"]], "Scheduler": [[25, "scheduler"]], "Accessing your Dask cluster": [[25, "accessing-your-dask-cluster"]], "Example using KubeCluster": [[25, "example-using-kubecluster"]], "Docker Images": [[26, "docker-images"]]}, "indexentries": {}})