import pandas as pd

def json_to_csv(json_data, csv_file):
    # Load the JSON data
    df = pd.read_json(json_data)
    
    # Save the DataFrame to CSV
    df.to_csv(csv_file, index=False)

if __name__ == "__main__":
    # Example usage
    json_data = '''
    [
        {"name": "Alice", "age": 25, "city": "New York"},
        {"name": "Bob", "age": 30, "city": "Los Angeles"},
        {"name": "Charlie", "age": 22, "city": "Chicago"}
    ]
    '''
    csv_file = "output.csv"
    
    json_to_csv(json_data, csv_file)
