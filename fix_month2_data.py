# Current bsMonthCalculatedData from the file (after previous modifications)
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

# Apply the new targeted fix for Month 2 (Jestha, index 1), element at index 58
# Change bsMonthCalculatedData[1][58] from 1 to 3
if len(current_bsMonthCalculatedData[1]) > 58:
    print(f"Original bsMonthCalculatedData[1][58]: {current_bsMonthCalculatedData[1][58]}")
    current_bsMonthCalculatedData[1][58] = 3
    print(f"Modified bsMonthCalculatedData[1][58]: {current_bsMonthCalculatedData[1][58]}")
else:
    print("Error: Array for Month 2 is too short for the new modification.")

# Generate the string for the new bsMonthCalculatedData
new_bsMonthCalculatedData_str = "export const bsMonthCalculatedData = [\n"
for i, month_data in enumerate(current_bsMonthCalculatedData):
    new_bsMonthCalculatedData_str += "    ["
    if month_data:
        line_len = 0
        for j, val in enumerate(month_data):
            val_str = str(val)
            # Basic line wrapping logic (adjust limit as needed)
            if line_len == 0: # First element on a new line (after opening bracket)
                 new_bsMonthCalculatedData_str += val_str
                 line_len += len(val_str)
            elif line_len + len(val_str) + 2 > 80: # 2 for ", "
                new_bsMonthCalculatedData_str += ",\n        " + val_str
                line_len = len(val_str)
            else:
                new_bsMonthCalculatedData_str += ", " + val_str
                line_len += len(val_str) + 2

    new_bsMonthCalculatedData_str += "],"
    if i < len(current_bsMonthCalculatedData) - 1:
        new_bsMonthCalculatedData_str += "\n"
new_bsMonthCalculatedData_str += "\n]\n"

# Full file content construction
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
    ne: ["बैशाख", "जेठ", "असार", "सावन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पौष", "माघ", "फागुन", "चैत"],
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
print("\n--- Full modified file content (CalenderData.ts) ---")
print(final_content)

# For verification, print the sum for month 2 up to index 58
jestha_data = current_bsMonthCalculatedData[1]
totalYears = 113 # 2082 BS

year_count_accumulator = 0
triggering_index_jestha = -1
final_days_jestha = -1

for data_idx, year_span in enumerate(jestha_data):
    year_count_accumulator += year_span
    if year_count_accumulator >= totalYears:
        triggering_index_jestha = data_idx
        bsMonthUpperDaysIndex = data_idx % 2
        final_days_jestha = current_bsMonthCalculatedData[1][bsMonthUpperDaysIndex] # This is wrong, should use bsMonthMaxDays
        final_days_jestha = [[30, 31], [31, 32], [31, 32], [31, 32], [31, 32], [30, 31], [29, 30], [29, 30], [29, 30], [29, 30], [29, 30], [30, 31]][1][bsMonthUpperDaysIndex]
        break

print(f"\nVerification for Jestha (Month 2) with totalYears = {totalYears}:")
print(f"Cumulative sum up to index 57: {sum(jestha_data[:58])}") # Sum of first 58 elements
print(f"Value at index 58: {jestha_data[58]}")
print(f"Cumulative sum up to index 58: {sum(jestha_data[:59])}")
print(f"Triggering index for Jestha: {triggering_index_jestha}")
print(f"Calculated days for Jestha (2082 BS) by this script: {final_days_jestha}")

if triggering_index_jestha == 58 and final_days_jestha == 31:
    print("Jestha calculation seems correct for 31 days.")
else:
    print("Jestha calculation logic in script might need review or assumption was wrong.")

print("\nFix script finished.")
