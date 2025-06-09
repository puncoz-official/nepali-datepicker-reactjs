# Starting CalenderData.ts content (as read in the previous step)
current_bsMonthCalculatedData = [
    [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2], # Jestha (Month 2, index 1)
    [1, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2],
    [1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 2, 1, 3, 1, 2, 2, 2, 1, 2],
    [59, 1, 26, 1, 28, 1, 2, 1, 12],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 1, 2, 2, 1, 3, 1, 2, 1, 2],
    [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 7, 10, 2, 4],
    [0, 1, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 15, 2, 4],
    [1, 1, 3, 1, 3, 1, 14, 1, 3, 1, 1, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 15, 1, 2, 1, 1],
    [0, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 3, 1, 10, 15, 6, 1, 1, 1],
    [1, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 20, 3],
]

# Make a mutable copy
modified_bsMonthCalculatedData = [list(arr) for arr in current_bsMonthCalculatedData]

# Modify bsMonthCalculatedData[1] (Jestha)
jestha_data = modified_bsMonthCalculatedData[1]
print(f"Original Jestha data (len {len(jestha_data)}): {jestha_data}")

# Ensure array is long enough before attempting modifications
if len(jestha_data) > 61: # Needs to be at least 62 elements long for index 61
    print(f"Value at index 59 (original): {jestha_data[59]}")
    jestha_data[59] = 3
    print(f"Value at index 59 (modified): {jestha_data[59]}")

    print(f"Value at index 61 (original): {jestha_data[61]}")
    jestha_data[61] = 0
    print(f"Value at index 61 (modified): {jestha_data[61]}")

    # Filter out zeros
    modified_bsMonthCalculatedData[1] = [x for x in jestha_data if x != 0]
    print(f"Modified Jestha data after filtering (len {len(modified_bsMonthCalculatedData[1])}): {modified_bsMonthCalculatedData[1]}")
else:
    print(f"Error: Jestha data (len {len(jestha_data)}) is too short for modifications at index 59 or 61.")


# Generate the string for the new bsMonthCalculatedData
new_bsMonthCalculatedData_str = "export const bsMonthCalculatedData = [\n"
for i, month_data in enumerate(modified_bsMonthCalculatedData):
    new_bsMonthCalculatedData_str += "    ["
    if month_data:
        line_len = 0
        for j, val in enumerate(month_data):
            val_str = str(val)
            if line_len == 0:
                 new_bsMonthCalculatedData_str += val_str
                 line_len += len(val_str)
            elif line_len + len(val_str) + 2 > 80:
                new_bsMonthCalculatedData_str += ",\n        " + val_str
                line_len = len(val_str)
            else:
                new_bsMonthCalculatedData_str += ", " + val_str
                line_len += len(val_str) + 2
    new_bsMonthCalculatedData_str += "],"
    if i < len(modified_bsMonthCalculatedData) - 1:
        new_bsMonthCalculatedData_str += "\n"
new_bsMonthCalculatedData_str += "\n]\n"

original_file_prefix = """export const months = {
    en: [
        "Baisakh",
        "Jestha",
        "Asar",
        "Shrawan",
        "Bhadra",
        "Asoj",
        "Kartik",
        "Mangsir",
        "Pouse",
        "Magh",
        "Falgun",
        "Chaitra",
    ],
    ne: ["बैशाख", "जेठ", "असार", "सावन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पौष", "माघ", "फागुन", "चैت"],
}

export const weeks = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ne: ["आईत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"],
}

export const maxBSYear = 2100
export const minBSYear = 1970

export const bsMonthMaxDays = [
    [30, 31],
    [31, 32],
    [31, 32],
    [31, 32],
    [31, 32],
    [30, 31],
    [29, 30],
    [29, 30],
    [29, 30],
    [29, 30],
    [29, 30],
    [30, 31],
]
"""
final_content = original_file_prefix + "\n" + new_bsMonthCalculatedData_str.strip()
print(final_content)
