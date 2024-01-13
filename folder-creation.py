# ignore this script. It's just for creating the folders for the 0-1 week

import os


def create_folder(path, folder_name):
    os.makedirs(path + "/" + folder_name, exist_ok=True)


def create_subfolders(path, folder_name):
    os.makedirs(path + "/" + folder_name + "/Assignments", exist_ok=True)
    os.makedirs(path + "/" + folder_name + "/Notes", exist_ok=True)
    os.makedirs(path + "/" + folder_name + "/Random", exist_ok=True)


def main():
    path = os.getcwd() + "/0-1"
    os.makedirs(path, exist_ok=True)
    for i in range(1, 7):
        create_folder(path, "Week_" + str(i))
        create_subfolders(path, "Week_" + str(i))


if __name__ == "__main__":
    main()
