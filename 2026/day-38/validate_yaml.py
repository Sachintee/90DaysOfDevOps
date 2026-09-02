import yaml

files = ["person.yaml", "server.yaml"]

for file in files:
    try:
        with open(file, "r") as f:
            yaml.safe_load(f)

        print(f"{file}: VALID")

    except yaml.YAMLError as error:
        print(f"{file}: INVALID")
        print(error)