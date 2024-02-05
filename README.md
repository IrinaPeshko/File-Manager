# File Manager

Welcome to the File Manager! This CLI-based application allows you to perform various file operations, explore the host machine's operating system information, calculate file hashes, and compress/decompress files using the Brotli algorithm.

## Getting Started

1. **Installation:**
   - Make sure you have Node.js version 20 LTS installed.
   - Clone the repository to your local machine.

2. **Starting the Program:**
   - Open a terminal in the project directory.
   - Run the following command, replacing `your_username` with your desired username:
     ```bash
     npm run start -- --username=your_username
     ```

3. **Usage:**
   - After starting the program, you will see a welcome message with your username.
   - The current working directory will be displayed.
   - You can enter commands in the console to perform various file operations.

4. **Commands and Syntax:**

   - **Navigation & Working Directory (nwd):**
     - Go upper from the current directory: `up`
     - Go to a dedicated folder from the current directory: `cd path_to_directory`
     - Print a list of all files and folders in the current directory: `ls`

   - **Basic Operations with Files:**
     - Read file and print its content: `cat path_to_file`
     - Create an empty file in the current working directory: `add new_file_name`
     - Rename file (content remains unchanged): `rn path_to_file new_filename`
     - Copy file: `cp path_to_file path_to_new_directory`
     - Move file (initial file is deleted): `mv path_to_file path_to_new_directory`
     - Delete file: `rm path_to_file`

   - **Operating System Info (os):**
     - Get EOL (End-Of-Line) and print it to console: `os --EOL`
     - Get host machine CPUs info: `os --cpus`
     - Get home directory: `os --homedir`
     - Get current system username: `os --username`
     - Get CPU architecture for which Node.js binary has compiled: `os --architecture`

   - **Hash Calculation:**
     - Calculate hash for a file and print it: `hash path_to_file`

   - **Compress and Decompress Operations:**
     - Compress file using Brotli algorithm: `compress path_to_file path_to_destination`
     - Decompress file using Brotli algorithm: `decompress path_to_file path_to_destination`

   - **Important Note:**
     - If there are spaces in the folder or file names, enclose the entire path in double quotes.

5. **Exiting the Program:**
   - Press `ctrl + c` or enter the `.exit` command to exit the program.
   - A goodbye message with your username will be displayed.

Thank you for using the File Manager! If you have any questions or encounter issues, feel free to reach out. Happy file managing!

