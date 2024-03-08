file_path = "./server.txt"

# name = input("Enter your name: ")

# if name != "":
#     with open(file_path,"a") as file:
#         file.write(name+"\n")

show=input("Enete y to display all name and n for exit: ")
if show == "y":
    with open(file_path,"r") as file:
        file_content = file.read()

    print(file_content)